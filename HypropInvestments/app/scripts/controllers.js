angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ShareholderStructureCtrl', function($scope) {

})

.controller('PressReleasesCtrl', function($scope, $http) {
  $http.get('/api/pressreleases.json').success(function(response) {
    var data = response;
    $scope.pressreleases = data.rss.channel[0].item;
  });
})

.controller('InvestorContactsCtrl', function($scope, uiGmapIsReady, $timeout, $http) {
  $scope.markers = [];
  $scope.map = {
    center: { latitude: -26.145311, longitude: 28.042061 },
    zoom: 15
  };

  $scope.control = {};

  $scope.$watch($scope.active, function() {
    $timeout(function() {
      uiGmapIsReady.promise().then(function () {
        $scope.markers.push({
          idKey: 1,
          coords: {
            latitude: -26.145311,
            longitude: 28.042061
          },

        });
      });
    }, 0);
  });
})

.controller('ShareInformationCtrl', function($scope, uiGmapIsReady, $timeout, $firebaseArray, $firebaseObject) {
  // var firebaseRootRef = new Firebase('https://boiling-heat-2151.firebaseio.com/');
  // var firebaseChildRef = firebaseRootRef.child("shareinformation/datafeed");

  // firebaseChildRef.limitToLast(1).on("value", function(snapshot) {
  //   console.log(JSON.stringify(snapshot.val()));
  // }, function (errorObject) {
  //   console.log("The read failed: " + errorObject.code);
  // });

$scope.config1d = {
  title: {
    text: '',
            x: -20 //center
          },
          xAxis: {
            categories: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']
          },
          yAxis: {
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          tooltip: {
            valueSuffix: ''
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
          },
          series: [{
            name: '',
            data: [13200, 13071, 13077, 13056, 13085, 13088, 13069, 13149]
          }]
        };

        $scope.config5d = {
  title: {
    text: '',
            x: -20 //center
          },
          xAxis: {
            categories: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']
          },
          yAxis: {
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          tooltip: {
            valueSuffix: ''
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
          },
          series: [{
            name: '',
            data: [13200, 13071, 13077, 13056, 13085, 13088, 13069, 13149]
          }]
        };

        $scope.config1m = {
  title: {
    text: '',
            x: -20 //center
          },
          xAxis: {
            categories: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']
          },
          yAxis: {
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          tooltip: {
            valueSuffix: ''
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
          },
          series: [{
            name: '',
            data: [13200, 13071, 13077, 13056, 13085, 13088, 13069, 13149]
          }]
        };

        $scope.config3m = {
  title: {
    text: '',
            x: -20 //center
          },
          xAxis: {
            categories: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']
          },
          yAxis: {
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          tooltip: {
            valueSuffix: ''
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
          },
          series: [{
            name: '',
            data: [13200, 13071, 13077, 13056, 13085, 13088, 13069, 13149]
          }]
        };

        $scope.config5m = {
  title: {
    text: '',
            x: -20 //center
          },
          xAxis: {
            categories: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']
          },
          yAxis: {
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          tooltip: {
            valueSuffix: ''
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
          },
          series: [{
            name: '',
            data: [13200, 13071, 13077, 13056, 13085, 13088, 13069, 13149]
          }]
        };

        $scope.config1y = {
  title: {
    text: '',
            x: -20 //center
          },
          xAxis: {
            categories: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']
          },
          yAxis: {
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          tooltip: {
            valueSuffix: ''
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
          },
          series: [{
            name: '',
            data: [13200, 13071, 13077, 13056, 13085, 13088, 13069, 13149]
          }]
        };

        $scope.config5y = {
  title: {
    text: '',
            x: -20 //center
          },
          xAxis: {
            categories: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']
          },
          yAxis: {
            title: {
              text: ''
            },
            plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
            }]
          },
          tooltip: {
            valueSuffix: ''
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
          },
          series: [{
            name: '',
            data: [13200, 13071, 13077, 13056, 13085, 13088, 13069, 13149]
          }]
        };
      })

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
