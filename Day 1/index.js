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
// Output: Content of file1.txt

readFileContent('Day\ 1/test-files/empty-file.txt');
// Output: (empty string)

readFileContent('Day\ 1/test-files/nonexistent-file.txt');
// Output: Error reading file: ENOENT: no such file or directory...
