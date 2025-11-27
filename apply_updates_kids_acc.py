import json

# Read the updates
with open('updates_kids_acc.json', 'r') as f:
    updates = json.load(f)

# Create a lookup dictionary for faster access
update_map = {item['productName']: item['imageUrl'] for item in updates}

# Read the products file
with open('data/products.json', 'r') as f:
    data = json.load(f)

# Apply updates
updated_count = 0
for product in data['products']:
    if product['name'] in update_map:
        product['image'] = update_map[product['name']]
        updated_count += 1

# Write back to products.json
with open('data/products.json', 'w') as f:
    json.dump(data, f, indent=2)

print(f"Successfully updated {updated_count} products.")
