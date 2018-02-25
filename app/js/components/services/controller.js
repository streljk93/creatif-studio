"use strict";

angular.module('jk_site').controller('ServicesController', function($rootScope, $scope, ServicesService, $sce) {
	
	$scope.trustAsHtml = $sce.trustAsHtml

	$rootScope.loaded.services = {};
	$scope.serviceList = [];

	$scope.getServiceList = function() {
		ServicesService.load().then(function(response) {
			
			if(response.data.success) {
				$scope.serviceList = response.data.info;
			}

		});
	};
	$scope.getServiceList();

});