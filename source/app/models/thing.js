var Thing = function () {

	this.defineProperties({
		name: {
			type: 'string'
		},
		description: {
			type: 'string'
		}
	});

	// name must be at least 3 characters and contain the letter 'k'
	this.validatesWithFunction('name', function (n) {
		if (n.length > 3 && n.match(/k/)) {
			return true;
		}
		return false;
	});
/*
  this.property('login', 'string', {required: true});
  this.property('password', 'string', {required: true});
  this.property('lastName', 'string');
  this.property('firstName', 'string');

  this.validatesPresent('login');
  this.validatesFormat('login', /[a-z]+/, {message: 'Subdivisions!'});
  this.validatesLength('login', {min: 3});
  // Use with the name of the other parameter to compare with
  this.validatesConfirmed('password', 'confirmPassword');
  // Use with any function that returns a Boolean
  this.validatesWithFunction('password', function (s) {
      return s.length > 0;
  });

  // Can define methods for instances like this
  this.someMethod = function () {
    // Do some stuff
  };
  */

};

/*
// Can also define them on the prototype
Thing.prototype.someOtherMethod = function () {
  // Do some other stuff
};
// Can also define static methods and properties
Thing.someStaticMethod = function () {
  // Do some other stuff
};
Thing.someStaticProperty = 'YYZ';
*/

Thing = geddy.model.register('Thing', Thing);