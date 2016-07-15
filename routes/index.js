var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Snippet = require('../models/model-snippet.js');

/* GET index */
router.get('/', function(req, res, next) {
  res.render('index');
});

//alle snippets laden
router.get('/api/snippets', function(req, res, next) {
  Snippet.find(function(err, snippets){
    res.json(snippets);
  });
});

//snippet hinzufügen
router.post('/api/snippets', function(req, res, next) {
  Snippet.create(req.body, function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

//snippet löschen
router.delete('/api/snippets/:id', function(req, res, next) {
  Snippet.findByIdAndRemove(req.params.id, function(err, snippet){
    res.send('Got a DELETE request at /api/snippets');
  });
});

module.exports = router;
