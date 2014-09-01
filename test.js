var should = require('should');
var something = require('./main.js');

describe('WHAT', function() {
	var obj;

	beforeEach(function() {
		obj = something;
	});

	it('does something', function() {
		obj.test.should.be.exactly(true, 'just true, believe me!');
	})

});