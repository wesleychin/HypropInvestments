'use strict';

/**
 * @ngdoc function
 * @name scratchpadApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the scratchpadApp
 */
angular.module('scratchpadApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
