const cp = require("child_process");

function executeCommand(command) {
    // Implementation
    console.log(cp.execSync(command).toString());
}

executeCommand('ls -la');
// Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Output: Hello, Node.js!