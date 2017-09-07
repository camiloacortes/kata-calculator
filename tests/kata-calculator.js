var calc = require('../kata-calculator.js');
var chai = require('chai');
var expect = chai.expect;

describe('kata-calculator', function() {
  describe('failed-test', function() {
    it('should add 0 to an empty string', function() {
        var kata = new calc.KataCalculator();
        var number = '';
        expect(number).be.a('string');
        var result = kata.add("");
        expect(result).be.a('number');
        expect(result).equal(0);
    });
  });
});