import { appendFile, open, writeFile, unlink, rename, appendFileSync, openSync, writeFileSync } from 'fs';

appendFileSync('myfirst.html', '<p>Hello World</p>');

writeFileSync('mysecond.html', '<p>Goodbye World</p>');

unlink('myfirst.html', function(err) {
    if (err) throw err;
    console.log('File deleted!');
});

rename('mysecond.html', 'mythird.html', function(err) {
    if (err) throw err;
    console.log('File renamed!');
});