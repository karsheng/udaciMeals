'use strict';

/**
 * @ngdoc overview
 * @name udaciMealsApp
 * @description
 * # udaciMealsApp
 *
 * Main module of the application.
 */
angular
  .module('udaciMealsApp', ['ui.router']) // this creates the module, the empty array indicates that it doesn't depend on other modules
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  	// providers are like services, but only providers can be used for a module configuration.
  	
  	$urlRouterProvider.otherwise('/'); // this loads the home state by default

  	$stateProvider
  		.state('home', {
  			url: '/',
  			templateUrl: 'views/menu.html',
  			controller: 'MenuCtrl as menu'
  		})
  		.state('item', {
  			url: '/item/:id',
  			templateUrl: 'views/item.html',
  			controller: 'ItemCtrl as item'
  		});
  }]);
