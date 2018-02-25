"use strict";

angular.module('jk_site').service('MediaListService', function($http, config) {
	
	this.loadByGroup = function(group) {
		return $http({
			method: 'GET',
			url: config.url.rest + 'media/medialist/load_by_group',
			params: {group: group},
		});
	};

});