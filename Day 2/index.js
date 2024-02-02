const fs = require("fs");

function writeToFile(filePath, content) {
    // Implementation
    fs.writeFile(filePath, content, (err) => {
        if(err){
            console.log(err);
            return;
        }
        console.log("Data written to output.txt");
    })
}

writeToFile('Day 2/test-files/output1.txt', 'Sample content.');
// Output: Data written to output1.txt

writeToFile('Day 2/test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Output: Error writing to file: ENOENT: no such file or directory...