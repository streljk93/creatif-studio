"use strict";

angular.module('jk_site').controller('FeedBackController', function($scope, NotificationService) {

	$scope.loaded = {};

	$scope.feedback = {
		name: '',
		email: '',
		phone: '',
		message: '',
	};

	$scope.sendFeedBack = function() {
		NotificationService.sendFeedBack($scope.feedback).then(function(response) {
			if(response.data.info) {
				console.log('message ok');
			} else {
				console.log('message not ok');
			}
		});
	};

});