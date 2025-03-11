var express = require('express');
var router = express.Router();

// PARA ACESSAR AS PÁGINAS
// Quando eu receber uma rota para o endereço x responsa reendrizando a página y
/* GET home page. */
router.get('/', function(req, res, next) { // '/' é a RAIZ
  res.render('index', { titulo: 'MFLIX - LOGIN' });
});

router.post('/login', function(req, res, next){
  // captura os dados do formulario HTML
  const email = req.boby.campoEmail;
  const senha = req.body.campoSenha;
  //verifica se email e senha existem no BD
});

/*
router.get('/lista', function(req, res, next) {
  res.render('listaCoisas', { titulo: 'Listagem' });
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastroCoisas', { titulo: 'Cadastro' });
});
*/

/*
router.get('/rota', function(req, res, next) {
  res.render('arquivo', { title: 'nOME' });
});
*/

module.exports = router;
