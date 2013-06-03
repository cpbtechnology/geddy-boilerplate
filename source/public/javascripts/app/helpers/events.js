define(['underscore','backbone'], function (_, Backbone) {
	return _.clone(Backbone.Events);// holds Backbone.Events instance for message passing between components
});