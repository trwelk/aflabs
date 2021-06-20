//Q2
const os = require('os');

console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());

//Q3
const fs = require('fs');
const fileName = __dirname + '/test.txt';
fs.readFile(fileName,(err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})

const data = fs.readFileSync(fileName);
console.log(data.toString());

//Q4
const oFilename = __dirname + '/test-copy.txt';
const readStream = fs.createReadStream(fileName);
const ws = fs.createWriteStream(oFilename);

readStream.pipe(ws);

readStream.on('data', data => {
    console.log(data.toString());
})

//Q5

const http = require('http');

http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(9000,(err) => {
    console.log("Server is listening to port 9000");
});
