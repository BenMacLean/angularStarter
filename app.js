(function () {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('Tactus', [
    'ngRoute', 'ui.router'
  ]);

  angular.module('Tactus').config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  });
})();
