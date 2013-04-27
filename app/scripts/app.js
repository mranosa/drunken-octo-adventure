'use strict';

var drunkenOctoAdventureApp = angular.module('drunkenOctoAdventureApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/item', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl'
      })
      .when('/pitch', {
        templateUrl: 'views/pitch.html',
        controller: 'PitchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
