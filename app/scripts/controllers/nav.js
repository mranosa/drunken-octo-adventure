'use strict';

drunkenOctoAdventureApp.controller('NavCtrl', [ '$location', '$scope', 
	function($location, $scope) {

  $scope.navs = [
  	{
  		name: 'item',
  		url: '#/item'
  	}, {
  		name: 'pitch',
  		url: '#/pitch'
    }
  ];

  $scope.updateActiveNav = function(){
    var navs = _.map($scope.navs, 
      function(nav){ 
        nav.navCls = '';
        if($location.path() !== '/' && nav.url.indexOf($location.path()) === 1) {
          nav.navCls = 'active';
        }

        return nav; 
      }
    );
  };

  $scope.$on('update_active_nav', $scope.updateActiveNav);

}]);
