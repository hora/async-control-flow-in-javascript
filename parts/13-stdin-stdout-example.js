// stdin set-up
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// listen for 'data' event

// Syntax:
// stdin.on(event, callback);
stdin.on('data', function(key) {
    if (key === '\u0003') {
        process.exit();
    }

    //console.log(key);
    process.stdout.write(`${key}\n`);
});
