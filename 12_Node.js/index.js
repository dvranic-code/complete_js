//access to file sistem
// fs is core module
const fs = require('fs');
//make server
const http = require('http');
//url module for routing
const url = require('url');



const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
//convert string into and object
const laptopData = JSON.parse(json);

//Create server
const server = http.createServer((request, response) => {

    // console.log('Someone has access the server!');
    // response.writeHead(200, {'Content-type': 'text/html'});
    // response.end('This is response');

    const pathName = url.parse(request.url, true).pathname;
    const query = url.parse(request.url, true).query;
    const id = query.id;

    //routing
    //in real life use something like node framework Express https://expressjs.com/

    // PRODUCT OVERVIEW
    if (pathName === '/products' || pathName === '/') {
        response.writeHead(200, { 'Content-type': 'text/html' });

        fs.readFile(`${__dirname}/templates/temp-overview.html`, 'utf-8', (err, data) => {

            let overviewOutput = data;

            fs.readFile(`${__dirname}/templates/temp-cart.html`, 'utf-8', (err, data) => {
            
                const cardsOutput = laptopData.map(el => replaceTemplate(data, el)).join('');
                overviewOutput = overviewOutput.replace('{%CARDS%}', cardsOutput);
                response.end(overviewOutput);
            });
        });
    }

    // LAPTOP OVERVIEW
    else if (pathName === '/laptop' && id < laptopData.length) {
        response.writeHead(200, { 'Content-type': 'text/html' });

        fs.readFile(`${__dirname}/templates/temp-laptop.html`, 'utf-8', (err, data) => {
            const laptop = laptopData[id];
            const output = replaceTemplate(data, laptop);
            response.end(output);
        });
    }

    // IMAGES
    else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName)) {
        fs.readFile(`${__dirname}/data/img${pathName}`, (err, data) => {
            response.writeHead(200, { 'Content-type': 'imge/html' });
            response.end(data);
        });
    }

    // PAGE NOT FOUND
    else {
        response.writeHead(404, { 'Content-type': 'text/html' });
        response.end('Page was not found');
    }

});

//listen on a certain port on a certain IP address
server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for request');

});

function replaceTemplate(originalhtml, laptop) {
    let output = originalhtml.replace(/{%PRODUCTNAME%}/g, laptop.productName);
    output = output.replace(/{%IMAGE%}/g, laptop.image);
    output = output.replace(/{%CPU%}/g, laptop.cpu);
    output = output.replace(/{%RAM%}/g, laptop.ram);
    output = output.replace(/{%STORAGE%}/g, laptop.storage);
    output = output.replace(/{%SCREEN%}/g, laptop.screen);
    output = output.replace(/{%PRICE%}/g, laptop.price);
    output = output.replace(/{%DESCRIPTION%}/g, laptop.description);
    output = output.replace(/{%ID%}/g, laptop.id);
    return output;
}
