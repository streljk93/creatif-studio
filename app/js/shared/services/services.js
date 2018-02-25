"use strict";

angular.module('jk_site').service('ServicesService', function($http, config) {

	this.load = function() {
		return $http({
			method: 'GET',
			url: config.url.rest + 'plugin/services/load',
		});
	};

})