const readline = require('readline');

module.exports = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(process.argv[2] || '', function (name) {
        console.log(name);
        rl.close();
    });
}