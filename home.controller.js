(function () {
  'use strict';

  angular.module('Tactus').config(function ($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home.template.html',
      resolve: {},
      controller: 'homeCtrl'
    });
  });

  angular.module('Tactus').controller('homeCtrl', function ($scope, $http) {
    $scope.testAngular = function(){
      $scope.myVar = 'Hello World Angular!';
    };
  });
})();
