'use strict';

/**
 * @ngdoc function
 * @name scratchpadApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scratchpadApp
 */
angular.module('scratchpadApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
