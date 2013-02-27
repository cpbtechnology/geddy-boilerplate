var Things = function () {
	this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

	this.index = function (req, resp, params) {
		var self = this;

		geddy.model.Thing.all(function (err, things) {
			self.respond({
				params: params,
				things: things
			});
		});
	};

	this.add = function (req, resp, params) {
		this.respond({
			params: params
		});
	};

	this.create = function (req, resp, params) {
		params.id = params.id || geddy.string.uuid(10);

		var self = this,
			thing = geddy.model.Thing.create(params);

		if (!thing.isValid()) {
			params.errors = thing.errors;
			self.transfer('add');
		}

		thing.save(function (err, data) {
			if (err) {
				params.errors = err;
				self.transfer('add');
			} else {
				self.redirect({
					controller: self.name
				});
			}
		});
	};

	this.show = function (req, resp, params) {
		var self = this;

		geddy.model.Thing.first(params.id, function (err, thing) {
			if (!thing) {
				var err = new Error();
				err.statusCode = 400;
				self.error(err);
			} else {
				self.respond({
					params: params,
					thing: thing.toObj()
				});
			}
		});
	};

	this.edit = function (req, resp, params) {
		var self = this;

		geddy.model.Thing.first(params.id, function (err, thing) {
			if (!thing) {
				var err = new Error();
				err.statusCode = 400;
				self.error(err);
			} else {
				self.respond({
					params: params,
					thing: thing
				});
			}
		});
	};

	this.update = function (req, resp, params) {
		var self = this;

		geddy.model.Thing.first(params.id, function (err, thing) {
			thing.updateAttributes(params);
			if (!thing.isValid()) {
				params.errors = thing.errors;
				self.transfer('edit');
			}

			thing.save(function (err, data) {
				if (err) {
					params.errors = err;
					self.transfer('edit');
				} else {
					self.redirect({
						controller: self.name
					});
				}
			});
		});
	};

	this.destroy = function (req, resp, params) {
		var self = this;

		geddy.model.Thing.remove(params.id, function (err) {
			if (err) {
				params.errors = err;
				self.transfer('edit');
			} else {
				self.redirect({
					controller: self.name
				});
			}
		});
	};

};

exports.Things = Things;