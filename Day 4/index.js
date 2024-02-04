const path = require("path");

function resolvePath(relativePath) {
    // Implementation
    console.log(path.resolve(relativePath));
}

resolvePath('Day 2/test-files/output1.txt');
// Expected Output: Resolved Path: /Users/username/project/folder/file.txt

resolvePath('nonexistent-folder/file.txt');
// Expected Output: Resolved Path: /Users/username/nonexistent-folder/file.txt