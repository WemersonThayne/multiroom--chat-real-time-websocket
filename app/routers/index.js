module.exports = function(server){
    server.get('/',function(req,res){
        server.app.controllers.index.home(server,req,res);
    });
}

