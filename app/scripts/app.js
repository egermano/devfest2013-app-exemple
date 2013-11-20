'use strict';

angular.module('appExempleApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/devfest', {
        templateUrl: 'views/devfest.html',
        controller: 'DevfestCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
