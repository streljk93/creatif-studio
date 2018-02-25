angular.module('jk_site').directive('slickPromotion', function($timeout) {
	return {
		restrict: 'E',
		link: function(scope, element, attr) {
      scope.$watch('loaded.promotion.list', function(data) {
        console.log(data);
        if(data) {
          $timeout((function() {
            element.slick({
              dots: false,
              centerMode: true,
              speed: 300,
              slidesToShow: 3,
              adaptiveHeight: true,
              mobileFirst: true,
              
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    prevArrow: '<i class="fa fa-chevron-left" style="position:absolute;top:45%;left: 0;color:#FC7D82;z-index:999;font-size:40px;cursor:pointer;"></i>',
                    nextArrow: '<i class="fa fa-chevron-right" style="position:absolute;top:45%;right: 0;color:#FC7D82;z-index:999;font-size:40px;cursor:pointer;"></i>',
                  }
                },
                {
                  breakpoint: 0,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    prevArrow: '<i class="fa fa-chevron-left" style="position:absolute;top:45%;left: 0;color:#FC7D82;z-index:999;font-size:40px;cursor:pointer;"></i>',
                    nextArrow: '<i class="fa fa-chevron-right" style="position:absolute;top:45%;right: 0;color:#FC7D82;z-index:999;font-size:40px;cursor:pointer;"></i>',
                  }
                }
              ]
            })
          }), 100);
        }
      })
			
		},
	};
});