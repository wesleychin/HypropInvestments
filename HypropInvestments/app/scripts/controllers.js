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

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
  { title: 'Reggae', id: 1 },
  { title: 'Chill', id: 2 },
  { title: 'Dubstep', id: 3 },
  { title: 'Indie', id: 4 },
  { title: 'Rap', id: 5 },
  { title: 'Cowbell', id: 6 }
  ];
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
  var firebaseRootRef = new Firebase('https://boiling-heat-2151.firebaseio.com/');
  var firebaseChildRef = firebaseRootRef.child("shareinformation/datafeed");

  firebaseChildRef.limitToLast(1).on("value", function(snapshot) {
    console.log(JSON.stringify(snapshot.val()));
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  $scope.config = {
title: {
            text: 'Share Price',
            x: -20 //center
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
        };
      })

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
