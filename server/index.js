"use strict"

const http = require("http")

const server = http.createServer((request, response)=> {
    response.end("hola nailu backend")

})
server.listen(8000, ()=>console.log("servidor corriendo en el puerto 8000"))