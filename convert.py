import json
import re

def convert_photo_links(input_file, output_file):
    # Read the JSON file
    with open(input_file, 'r') as f:
        data = json.load(f)

    # Regular expression pattern to match and extract the file ID
    pattern = r'https://drive\.google\.com/file/d/([^/]+)/view\?usp=drive_link'

    # Iterate through each item in the JSON array
    for item in data:
        if 'photo' in item:
            # Check if the photo link matches the pattern
            match = re.match(pattern, item['photo'])
            if match:
                # Extract the file ID and create the new link
                file_id = match.group(1)
                item['photo'] = f'https://drive.google.com/open?id={file_id}'

    # Write the modified data back to a new JSON file
    with open(output_file, 'w') as f:
        json.dump(data, f, indent=4)

    print(f"Conversion complete. Modified data saved to {output_file}")

# Usage
input_file = 'file1.json'
output_file = 'file1_modified.json'
convert_photo_links(input_file, output_file)

