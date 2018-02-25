"use strict";

angular.module('jk_site').service('NotificationService', function($http, config) {
	
	this.sendFeedBack = function(feedback) {
		return $http({
			method: 'GET',
			url: config.url.rest + 'common/notification/send_feedback',
			params: {
				data: feedback,
			},
		});
	};

});