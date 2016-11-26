'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
  .service('foodFinder', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
     this.getMenu = function() {
     	return $.get('/menu/menu.json');
     };

     this.getItem = function(id) {
     	var menuItemFile = '/menu/' + id + '.json';
     	return $.get( menuItemFile );
     };
  });
