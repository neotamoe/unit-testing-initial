var expect = require('chai').expect;
var addOne = require ('../src/modules/addOne');

describe('testing add one module', function(){
  it('should add one to the number passed in', function(){
    // could do it this way, but other way is shorter
    // var ourNumber = 8;
    // var ourNumberPlusOne = addOne(ourNumber);
    expect(addOne(8)).to.equal(9);
    // expect(addOne(8)).to.be.a('number');
  });
  it('should return a number type', function(){
    // separating into its own "it" will make it be two tests
    expect(addOne(8)).to.be.a('number');
  });
});


// $mocha test/addOne.test.js
// convention: each file should test one module
