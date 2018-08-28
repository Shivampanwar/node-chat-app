const path=require('path')
const http =  require('http')
const express=require('express')
const socketIO =  require('socket.io')

var app=express()
const publicPath=path.join(__dirname,'../public')
const port=process.env.PORT||3000;//done for heroku
// console.log(__dirname+'/../public')
// console.log(publicPath)
var server =  http.createServer(app)
var io=socketIO(server)//at this point we are ready to accept new connections
io.on('connection',(socket)=>{
   console.log('New user connected')
})
console.log('JJk')
app.use(express.static(publicPath))

server.listen(port,()=>{
    console.log(`Server is up on port ${port}`)
})