var calc = require('../kata-calculator.js');
var chai = require('chai');
var expect = chai.expect;

describe('kata-calculator', function() {
  var kata = new calc.KataCalculator();
    it("shouldn't add only one number. It should return the same number", function(){
        var number = 0;

        var result = kata.add(number);        
        expect(result).eq(number);
    });
    
    it('should add two numbers', function() {
        var number_1 = 2, number_2 = 3;
        var result = kata.add(number_1, number_2);
        
        expect(result).greaterThan(0);
    });
});