// stdin set-up
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const stdout = process.stdout;

// listen for events on stdin
// for example: the 'data' event

stdin.on('data', function(key) {
    if (key === '\u0003') {
        process.exit();
    }

    if (key === '\u1f600') {
        stdout.write('\n');
    }

    stdout.write(key);
});

for (let i = 0; i < 200000; i++) {
    console.log(i);
}

