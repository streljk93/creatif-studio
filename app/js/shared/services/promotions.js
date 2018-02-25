'use strict';

angular.module('jk_site').service('PromotionsService', function($http, config) {

	this.load = function() {
		return $http({
			method: 'GET',
			url: config.url.rest + 'plugin/promotions/load',
		});
	};

})