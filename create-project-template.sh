#!/bin/bash

# Project template creator script
# Usage: ./create-project-template.sh <folder-name> [s1|s2]

if [ $# -eq 0 ]; then
    echo "Usage: $0 <folder-name> [s1|s2]"
    echo "Example: $0 my-project s2"
    exit 1
fi

FOLDER_NAME=$1
BASE_DIR=${2:-s2}  # Default to s2 if not specified

# Format the folder name for display (capitalize and replace hyphens/underscores with spaces)
DISPLAY_NAME=$(echo "$FOLDER_NAME" | sed 's/[-_]/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1')

# Create the directory
mkdir -p "$BASE_DIR/$FOLDER_NAME"

# Create index.html
cat > "$BASE_DIR/$FOLDER_NAME/index.html" << EOF
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>$DISPLAY_NAME</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>$DISPLAY_NAME</h1>
    <button class="btn">Click me</button>
    <script src="index.js"></script>
  </body>
</html>
EOF

# Create styles.css with dark mode
cat > "$BASE_DIR/$FOLDER_NAME/styles.css" << 'EOF'
:root {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  padding: 2rem;
}

h1 {
  color: var(--primary);
  margin-bottom: 2rem;
  font-size: 2rem;
}

.btn {
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background-color: var(--secondary);
  color: var(--secondary-foreground);
}

.btn:active {
  transform: translateY(1px);
}
EOF

# Create index.js
cat > "$BASE_DIR/$FOLDER_NAME/index.js" << 'EOF'
// JavaScript file

EOF

echo "✅ Created project template in $BASE_DIR/$FOLDER_NAME"
echo "📁 Files created:"
echo "   - index.html"
echo "   - styles.css (with dark mode)"
echo "   - index.js"