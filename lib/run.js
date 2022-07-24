const readline = require('readline');

module.exports = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stderr
    });
    rl.question(process.argv.slice(2).join(' '), (name) =>{
        process.stdout.write(name);
        rl.close();
    });
}