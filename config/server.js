/** importar o módulo do framework express*/
const express = require('express');

/**importar o módulo do consign*/
const consign = require('consign');

/**importar o módulo do body-parser*/
const bodyParser = require('body-parser');

/**importar o módulo do express-validator*/
const expressValidator = require('express-validator');

/**iniciando o objeto do express*/
const server = express();

/** Setar as variaveis 'view engine 'e  'views' do express */
server.set('view engine', 'ejs');
server.set('views', './app/views');

/**configurar o middleware express.static */
server.use(express.static('./app/public'));

/**configurar o middleware do body-parser */
server.use(bodyParser.urlencoded({extended: true}));

/** configurar o middleware express-validator */
server.use(expressValidator());

/**efetua o autoload dos arquivos do projeto */
consign().include('app/routers')
         .then('app/models')
         .then('app/controllers')
         .into(server);


/**exportar o objeto server */
module.exports = server;


