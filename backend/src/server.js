import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io'
import cors from 'cors';

const app  = express();
const server = createServer(app);
const io = new Server(server,{
    cors:{
        origin:'http://localhost:5173',
        methods:['GET','POST'],
    }
});

app.use(cors());

io.on('connection',(socket)=>{
    console.log("socket id = ",socket.id);
    socket.on('send_message',(message,room)=>{
        console.log("bsend = ",room)
        if(room==""){
            console.log("bsand m = ",message)
        socket.broadcast.emit('receive_message',message)}
        else{
            socket.to(room).emit('receive_message',message);
        }
    });

    socket.on('disconnect',()=>{
        console.log('use_disconnected',socket.id);
    })
});

server.listen(3000,()=>{
    console.log('server running on port 3000')
})