var socket=io()
socket.on('connect',function(){
    console.log('Connected to server')
    
    // socket.emit('createEmail',{
    //     to:'jen@example.com',
    //     text: 'Hey This is andrew'
    // })
    socket.emit('createMessage',{
        from:"ket jeenings@gmail.com",
        text:"I am doin this all "
    })

})
socket.on('disconnect',function() {
    console.log('Disconnected from server')
})
// socket.on('newEmail',function(email){
//     console.log('New Email',email)
// })

socket.on('newMessage',function(message)
{
    console.log(' New Message', message)
})