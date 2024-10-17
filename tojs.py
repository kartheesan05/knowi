import json

# Read the JSON file
with open('updated_file1.json', 'r') as file:
    data = json.load(file)

# Group the data by team
teams = {}
for item in data:
    team = item['team']
    if team not in teams:
        teams[team] = []
    teams[team].append(item)

# Prepare the JavaScript content
js_content = []
for team, members in teams.items():
    variable_name = team.lower().replace(' ', '_')
    js_array = json.dumps(members, indent=2)
    js_content.append(f"export const {variable_name} = {js_array};")

# Write to a JavaScript file
with open('team_data.js', 'w') as js_file:
    js_file.write('\n\n'.join(js_content))

print("JavaScript file 'team_data.js' has been created successfully.")

