"use strict";

angular.module('jk_site').controller('MediaController', function PortfolioController($scope, MediaListService, $timeout) {

	var ctrl = this;
	
	$scope.loaded = {};

	$scope.media = {
		portfolio: {
			list: [],
			stack: [],
			clone: [],
		},
		comment: {
			list: [],
		},
	};

	$scope.getPortfolio = function() {
		MediaListService.loadByGroup('работы').then(function(response) {
			$scope.loaded.portfolio = true;
			if(response.data.success) {
				$scope.media.portfolio.list = response.data.info;
				$scope.media.portfolio.clone = angular.copy(response.data.info);

				$scope.pushImage('portfolio', 8);
				$timeout(function() {
					bemMediaComponent();
				});
			}
		});
	};
	$scope.getPortfolio();

	$scope.pushImage = function(space, len) {
		len = len || 8;
		for(var i = 0; i < len; i++) {
			if($scope.media[space].clone.length === 0) return;

			var media = $scope.media[space].clone.shift();
			$scope.media[space].stack.push(media);
		}
	};

	$scope.addImage = function() {
		$scope.pushImage('portfolio', 8);
		$timeout(function() {
			bemMediaComponent();
		});
	};

});