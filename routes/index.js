var express = require('express');
var router = express.Router();

// PARA ACESSAR AS PÁGINAS
// Quando eu receber uma rota para o endereço x responsa reendrizando a página y
/* GET home page. */
router.get('/', function(req, res, next) { // '/' é a RAIZ
  res.render('index', { titulo: 'MFLIX - LOGIN' });
});

router.get('/login', function(req, res, next) { // '/' é a RAIZ
  res.render('login', { titulo: 'MFLIX - LOGIN' });
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
