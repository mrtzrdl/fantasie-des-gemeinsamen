var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SnippetSchema = new mongoose.Schema({
  text: String,
  date: { type : Date, default: Date.now }
});

module.exports = mongoose.model('Snippet', SnippetSchema);
