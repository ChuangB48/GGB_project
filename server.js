const express=require("express");
const WebSocket=require("ws").Server;
const port=process.env.PORT||80;
const server=express().listen(port,()=>{
    console.log("listening at "+port+".");
});
const wss=new WebSocket({server});
let t=0;
wss.on("connection",ws=>{
    ws.on("message",data=>{
        wss.clients.forEach(function each(e){
            t++;
            e.send(t.toString());
        });
    });
});
