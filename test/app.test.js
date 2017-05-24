var expect = require('chai').expect;
var request = require('request');

describe ('test main server file', function(){
  var url = 'http://localhost:4000/addOne/5';
  // done needs to be injected into function due to asynchronous
  it('test server add adds one', function(done){
    request(url, function(err, res, body){
      console.log('body-->', body);
      expect(JSON.parse(body).answer).to.equal(6);
      // expect(JSON.parse(body).answer).to.equal(6);  --> starting line -->currently is saying 51

      done();
    });
  });
  it('should return status code 200', function(done){
    request(url, function(err, res, body){
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
