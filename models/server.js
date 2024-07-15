const express = require('express')
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.port || PORT;
        this.server = require('http').createServer( this.app );
        this.io = require('socket.io')( this.server );

        this.paths = {}
        
        this.middlewares();

        this.routes();

        this.sockets();
    }

    middlewares(){
        this.app.use(cors());

        this.app.use(express.static( 'public' ));

    }
    
    routes(){
        // this.app.use(this.paths.auth, require('../routes/authPath'));
    }

    sockets() {
        this.io.on('connection', socket => {
            console.log('a user connected', socket.id );

            socket.on('disconnect', ()=>{
                console.log('user desconected', socket.id  );
            })
        });
    }

    listen(){
        this.server.listen(this.port , () => {
            console.log( `Server running on port ${ this.port }` )
        })
    }

}

module.exports = {
    Server
};