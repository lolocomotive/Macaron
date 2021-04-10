import { Http2ServerRequest, Http2ServerResponse } from 'node:http2';

var http = require('http');

http.createServer(function (req: Http2ServerRequest, res: Http2ServerResponse) {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
    });

    let responseRaw: any[] = [];
    req.on('data', (chunk) => {
        responseRaw.push(chunk);
    }).on('end', () => {
        var body = Buffer.concat(responseRaw);
        // body.toString = '{"username":"lolocomotive","password":"password"}'
        let credentials = JSON.parse(body.toString());
        console.log(
            'Identifying user "' +
                credentials.username +
                '" using password "' +
                credentials.password +
                '"'
        );
        let response: { status: string; message: string } = {
            status: '',
            message: '',
        };

        //! If the user exists
        //TODO Change this to an actual database query

        if (credentials.username === 'lolocomotive') {
            //! If the password is correct
            //TODO Use a password hash and a database query

            if (credentials.password === 'password') {
                response.status = 'authorized';
            } else {
                response.status = 'unauthorized';
                response.message = 'Wrong password!';
            }
        } else {
            response.status = 'unauthorized';
            response.message = 'No such user';
        }
        switch (response.status) {
            case 'authorized':
                console.log('User has been authorized');
                break;
            case 'unauthorized':
                console.log(
                    'The access has been denied to the user for reason:',
                    response.message
                );
                break;
            default:
                console.log('UNKNOWN STATUS!');
        }
        res.end(JSON.stringify(response));
    });
}).listen(5000);
