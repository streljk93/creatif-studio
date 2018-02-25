'use strict';

angular.module('jk_site').controller('PromotionsController', function($rootScope, $scope, PromotionsService) {
	
	$rootScope.loaded.promotion = {};

	$scope.promotionList = [];
	$scope.promotionSelected = {};

	$scope.slickConfig = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    adaptiveHeight: true,
    mobileFirst: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

	$scope.getPromotionList = function() {
		PromotionsService.load().then(function(response) {
			
			if(response.data.success === true) {
				// loaded promotion list
				$rootScope.loaded.promotion.list = true;

				// get promotion list
				$scope.promotionList = response.data.info;

				// Seleted promotion
				if($scope.promotionList.length > 0) {
					$scope.promotionSelected = $scope.promotionList[0];
					$scope.selectedKey = 0;
				}
			}

		});
	};
	$scope.getPromotionList();

	$scope.$watch('promotionSelected', function(data) {
		var start = data.promotion_start;
		var end = data.promotion_end;
		if(start !== undefined && end !== undefined) {

			$scope.timer = new Timer();
			$scope.timer.set(start, end, function() {
	      console.log('ok');
		  })

		}
	});

	$scope.selectPromotion = function(key) {
		console.log('ok');
		$scope.promotionSelected = $scope.promotionList[key];
		$scope.selectedKey = key;
		$scope.timer.clear();
	};

});