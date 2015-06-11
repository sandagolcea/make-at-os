var express = require('express');
var app = express();
var mongoose = require ('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
require('./app/models.js');
var Project = mongoose.model('Project');
app.use(bodyParser.json());

app.use('/', express.static(__dirname));



app.get('/create', function(request, response) {
  console.log('hi');
  Project.create({
   title: 'Walter', text: 'White', images: ['this']
  }, function() {
    response.send("Hello");
  });
});

app.get('/projects', function(request, response) {
  Project
    .find()
    .exec(function(err, projects) {
      if (err) {
       return handleError(err);
     }
    response.json(projects);
  });
});

function handleError (err) {
 console.log('Houston we have a problem: '+err);
}

app.listen(port, function () {
  console.log('Node listening at port ' + port + '..');
});
