#!/bin/bash

# Auto template watcher - monitors s1 and s2 directories for new folders
# Run this in the background to automatically create templates

echo "🔍 Watching s1/ and s2/ directories for new folders..."
echo "Press Ctrl+C to stop"

# Function to create template in new directory
create_template() {
    local new_dir=$1
    local folder_name=$(basename "$new_dir")
    local base_dir=$(dirname "$new_dir")
    
    # Format the folder name for display
    local display_name=$(echo "$folder_name" | sed 's/[-_]/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1')
    
    echo "📁 New folder detected: $new_dir"
    
    # Check if it's empty (no files yet)
    if [ -z "$(ls -A "$new_dir" 2>/dev/null)" ]; then
        echo "🚀 Creating template files..."
        
        # Create index.html
        cat > "$new_dir/index.html" << EOF
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>$display_name</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>$display_name</h1>
    <button class="btn">Click me</button>
    <script src="index.js"></script>
  </body>
</html>
EOF

        # Create styles.css
        cat > "$new_dir/styles.css" << 'EOF'
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
        cat > "$new_dir/index.js" << 'EOF'
// JavaScript file

EOF

        echo "✅ Template created in $new_dir"
        echo "   📄 index.html, styles.css, index.js"
    fi
}

# Use fswatch to monitor directories (install with: brew install fswatch)
if command -v fswatch >/dev/null 2>&1; then
    fswatch -0 -r --event Created s1 s2 2>/dev/null | while read -d "" event; do
        if [ -d "$event" ]; then
            create_template "$event"
        fi
    done
else
    echo "⚠️  fswatch not found. Install with: brew install fswatch"
    echo "💡 Alternative: Use the manual script ./create-project-template.sh"
fi