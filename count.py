import json

def count_objects_without_pic(json_data):
    count = 0
    for obj in json_data:
        if 'pic' not in obj:
            count += 1
    return count

# Read the JSON data from the file
with open('updated_file1.json', 'r') as file:
    data = json.load(file)

# Count objects without 'pic' key
result = count_objects_without_pic(data)

print(f"Number of objects without 'pic' key: {result}")

