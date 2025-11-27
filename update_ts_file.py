import json
import re

# Load updates
with open('updates.json', 'r') as f:
    updates1 = json.load(f)
with open('updates_kids_acc.json', 'r') as f:
    updates2 = json.load(f)

all_updates = updates1 + updates2
update_map = {item['productName']: item['imageUrl'] for item in all_updates}

# Read products.ts
with open('lib/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Function to replace image URL
def replace_image(match):
    # match.group(1) is the full object string roughly
    # We need to find the name and then replace the image
    block = match.group(0)
    
    # Extract name
    name_match = re.search(r"name:\s*['\"](.*?)['\"]", block)
    if not name_match:
        return block
    
    name = name_match.group(1)
    
    if name in update_map:
        new_url = update_map[name]
        # Replace the image line
        # Look for image: '...' or image: "..."
        block = re.sub(r"image:\s*['\"].*?['\"]", f"image: '{new_url}'", block)
        print(f"Updated {name}")
    
    return block

# Regex to match product objects. 
# Assuming standard formatting as seen in the file:
# {
#   id: ...,
#   ...
# }
# We'll try to match the content between { and } that contains id and name.
# Since regex for nested structures is hard, and the file format seems consistent (indentation based),
# we can try a pattern that matches the object block.
# However, a safer way might be to iterate line by line or use a more robust parser.
# Given the file size and structure, let's try a regex that captures the object properties.

# Pattern to find a product object block. 
# It starts with { and ends with }, containing keys like id, name, etc.
pattern = r"\{\s*id:.*?season:.*?\}"

# The file content has comments and structure. 
# Let's try a different approach: read the file line by line, track if we are inside an object, get the name, and if so, replace the image line.

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
                # Don't reset current_product_name yet, just in case (though unlikely to have multiple images)
    
    if stripped.startswith('},'):
        inside_product = False
        current_product_name = None

    new_lines.append(line)

with open('lib/products.ts', 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print("Finished updating lib/products.ts")
