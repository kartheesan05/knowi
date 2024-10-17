import json

# Load JSON data from files
with open('file1.json', 'r') as f1, open('file2.json', 'r') as f2:
    data1 = json.load(f1)
    data2 = json.load(f2)

# Compare objects by photo link and add 'pic' from file 2 to file 1
for obj1 in data1:
    for obj2 in data2:
        if obj1.get('photo') == obj2.get('photo'):
            obj1['pic'] = obj2.get('pic')

# Save the updated file 1 data back to a new file
with open('updated_file1.json', 'w') as f1_out:
    json.dump(data1, f1_out, indent=4)

print("Comparison complete. Updated file1.json saved as 'updated_file1.json'.")
