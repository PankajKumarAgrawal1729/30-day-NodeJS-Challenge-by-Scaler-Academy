const fs = require("fs");

function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if(err){
            console.error(err);
            return;
        }
        console.log(data);
    });
}

readFileContent('Day\ 1/test-files/file1.txt');
// Expected Output: Content of file1.txt

readFileContent('Day\ 1/test-files/empty-file.txt');
// Expected Output: (empty string)

readFileContent('Day\ 1/test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...
