#!/bin/bash

if [ $# -lt 2 ]; then
    echo "Usage: $0 file-name test-command [function-name ...]"
    exit 1
fi

file_name=$1
test_command=$2

# Get the function names as an array from the remaining arguments
shift 2
function_names=("$@")

# Convert array to comma-separated string
comma_separated_function_names=$(IFS=", " ; echo "${function_names[*]}")

# Create export statement
export_statement="module.exports = { $comma_separated_function_names };"

# Add export statement to end of file
echo "$export_statement" >> "$file_name"

# Run test command
eval "$test_command"

# Save exit status
exit_status=$?

# Check exit status: 0 = success, 1 = failure
if [ $exit_status -ne 0 ]; then
    exit_status=1
fi

# Remove export statement from end of file
sed -i '$ d' "$file_name"

# Exit with exit status
exit $exit_status