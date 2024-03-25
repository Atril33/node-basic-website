const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./index.html');
const aboutPage = readFileSync('./about.html');
const contactMePage = readFileSync('./contact-me.html');
const notFoundPage = readFileSync('./404.html');



const server = http.createServer((req, res) => {
    const url = req.url
    console.log(url)
    if (url === '/') {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(homePage);
        res.end()

    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(aboutPage);
        res.end()
    } else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(contactMePage);
        res.end()
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(notFoundPage);
        res.end()
    }
})


server.listen(8080, () => {
    console.log('Server is running on port 5000');
});