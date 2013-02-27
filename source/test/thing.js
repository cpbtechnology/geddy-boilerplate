var assert = require('assert'),
	should = require('chai').should(),
	tests, 
	Thing = geddy.model.Thing;

tests = {
	'thing has a 5 letter name with a "k" in it': function () {
		var thing = Thing.create({
			name: 'abckw',
			description: 'it is a thing'
		});
		thing.should.be.a('object');
		thing.name.should.be.a('string');
		thing.name.should.have.length(5);
	},
	'thing has only a single letter "k"': function () {
		var thing = Thing.create({
			name: 'k',
			description: 'it is a thing'
		});
		thing.should.be.a('object');
		thing.name.should.be.a('string');
		thing.name.should.have.length(1);
		thing.isValid().should.equal(false);
	},
	'thing has 10 letters without a "k"': function () {
		var thing = Thing.create({
			name: 'asdfasdfsf',
			description: 'it is a thing'
		});
		thing.should.be.a('object');
		thing.name.should.be.a('string');
		thing.name.should.have.length(10);
		thing.isValid().should.equal(false);
	}
};

module.exports = tests;