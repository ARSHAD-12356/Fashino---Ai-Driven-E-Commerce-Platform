import json

with open('data/products.json', 'r') as f:
    data = json.load(f)

products = data.get('products', [])
with open('products_list.txt', 'w', encoding='utf-8') as out:
    for p in products:
        out.write(f"{p['id']}|{p['name']}|{p['category']}|{p['subcategory']}|{p['image']}\n")
