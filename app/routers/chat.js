module.exports = function(server){
    server.post('/chat',function(req,res){
        server.app.controllers.chat.initChat(server,req,res);
    });
}