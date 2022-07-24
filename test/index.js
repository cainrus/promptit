const { strict: assert } = require('node:assert');

const {
    execSync,
} = require('child_process');

const nodeBin = process.argv0;
const promptitBin = require.resolve('../bin/promptit');
const cmd = `${nodeBin} ${promptitBin}`;

(() => {
    const description = 'Should print user input';
    const testValue = "test";
    let value = execSync(`echo '${testValue}' | ${cmd}`, {
        encoding: 'utf8',
        cwd: __dirname,
    }).trim();
    assert(value === testValue, description);
})();

(() => {
    const description = 'Should print empty value on empty user input';
    const testValue = "";
    const value = execSync(`echo '${testValue}' | ${cmd} "Dummy msg.. "`, {
        encoding: 'utf8',
        cwd: __dirname,
    }).trim();
    assert(value === testValue, description);
})();

(() => {
    const description = 'should accept multiple arguments as prompt message'
    const testValue = "300";
    const message = 'Continue the sequence 100200';
    const value = execSync(`echo '${testValue}' | ${cmd} ${message} 2>&1`, {
        encoding: 'utf8',
        cwd: __dirname,
    }).trim();
    assert(value === message + testValue, description);
})();