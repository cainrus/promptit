const { strict: assert } = require('node:assert');

const {
    execSync,
} = require('child_process');

const value = execSync(`echo 'test' | ${process.argv0} ../bin/readliner`, {
    encoding: 'utf8',
    cwd: __dirname,
}).trim();

assert(value === 'test', 'Should read and print same value');