var express = require ('express');
var app = express();

var addOne = require('./modules/addOne');

// GET
// /addOne/8
app.get('/addOne/:number', function(req,res){
  console.log('inside GET route', req.params.number);
  // note that number may be a string
  var myNumber = parseInt(req.params.number);
  var result = addOne(myNumber);
  console.log('result:', result);
  res.status(200).send({answer: result});
});


app.listen(4000, function(){
  console.log('up on port 4000');
});
