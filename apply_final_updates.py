import json
import re

# Load updates
with open('updates_remaining.json', 'r') as f:
    updates = json.load(f)

update_map = {item['productName']: item['imageUrl'] for item in updates}

# --- Update products.json ---
with open('data/products.json', 'r') as f:
    data = json.load(f)

updated_count_json = 0
for product in data['products']:
    if product['name'] in update_map:
        product['image'] = update_map[product['name']]
        updated_count_json += 1

with open('data/products.json', 'w') as f:
    json.dump(data, f, indent=2)

print(f"Updated {updated_count_json} products in products.json")

# --- Update products.ts ---
with open('lib/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

updated_count_ts = 0
new_lines = []
current_product_name = None
inside_product = False

lines = content.split('\n')
for line in lines:
    stripped = line.strip()
    if stripped.startswith('{'):
        inside_product = True
        current_product_name = None
    
    if inside_product:
        # Check for name
        name_match = re.match(r"\s*name:\s*['\"](.*?)['\"],?", line)
        if name_match:
            current_product_name = name_match.group(1)
        
        # Check for image
        if current_product_name and current_product_name in update_map:
            if re.match(r"\s*image:\s*['\"].*?['\"],?", line):
                indent = line[:line.find('image')]
                line = f"{indent}image: '{update_map[current_product_name]}',"
                updated_count_ts += 1
                # Don't reset current_product_name yet
    
    if stripped.startswith('},'):
        inside_product = False
        current_product_name = None

    new_lines.append(line)

with open('lib/products.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print(f"Updated {updated_count_ts} products in products.ts")
