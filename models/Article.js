var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  date: {
  	type: Date,
  	default: Date.now,
  	required: "Date is Required"
  },
  url: {
  	type: String,
  	required: true,
  	required: "URL is Required",
  	unique: true
  }
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;