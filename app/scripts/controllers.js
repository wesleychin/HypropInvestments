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

.controller('FeedCtrl', function($scope, $http) {
  //var url = "http://feeds1.mcgbfa.com/engine.asmx/getPriceData?SubFeed=0&newfeed=true&CompanyKey=Hyprop%20Investments%20Ltd";
  //var feed = $http.get(url);
  //console.log(JSON.stringify(feed));

  $scope.feed = {
    "data": {
      "record": {
        "field": [
        { "-name": "Date" },
        {
          "-name": "Name",
          "-value": "Hyprop Inv Ltd"
        },
        {
          "-name": "Ticker",
          "-value": "HYP"
        },
        {
          "-name": "Price",
          "-value": "121.8700"
        },
        {
          "-name": "Percentage",
          "-value": "0.00"
        },
        {
          "-name": "Movement",
          "-value": "0"
        },
        { "-name": "Time" }
        ]
      }
    }
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
