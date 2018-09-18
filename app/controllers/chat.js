module.exports.initChat = function(app,req,res){
    var nomeParticipante = req.body;

    console.log('Body:'+nomeParticipante);
    req.assert('apelido', 'Nome ou Apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou Apelido deve conter entre 3 e 15 caracteres').len(3,15);

    var erros = req.validationErrors();
    
    if(erros){
        res.render("index", { validacao : erros });0
        return;
    }

    res.render('chat');
}