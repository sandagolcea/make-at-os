var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var projectSchema = new Schema({
  title: String,
  text: String,
  images: [String]
});

mongoose.model('Project', projectSchema);

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
 console.log('Successfully connected to mongodb..');
});