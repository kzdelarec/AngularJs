const mysql = require('promise-mysql');
const http = require('http');
const {readFile} = require('fs');
const {promisify} = require('util');
const readFileAsync=promisify(readFile);
const url = require('url');

const init = async function(){


    let connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '9zwrGst6',
        database: 'labos5'
    });

    console.log("Database is connected ... ");
    http.createServer(async function (request, response) {

        let u=url.parse(request.url, true); //da dobimo objekt za query
        let pathname=u.pathname;

        /*if (pathname=='/'){

            try {

                let f = await readFileAsync('NJP10-19.html');
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(f.toString());
                response.end();

            } catch (err){

                console.log(err);
                response.writeHead(404, {'Content-Type': 'text/html'});

            }



        } else if (pathname=='/data'){

            if (request.method=="GET") {

                let params= u.query;
                console.log(params);
                let q='';
                if (params){
                    q=' WHERE gdp>'+params.gdp;
                }

                let rows = await connection.query('SELECT * FROM countries'+q);
                response.writeHead(200, {'Content-Type': 'application/json'});
                response.write(JSON.stringify(rows));
                response.end();


            } else if (request.method=="POST"){

                response.write('Post zahtjev je stigao');
                response.end();

            }


        }*/




    }).listen(8081);
    console.log('Server running at http://127.0.0.1:8081/');

};

init();