// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'highcharts-ng'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if (window.cordova && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  }
  if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html"
      }
    }
  })

  .state('app.shareinformation', {
    url: "/shareinformation",
    views: {
      'menuContent': {
        templateUrl: "templates/shareinformation.html",
        controller: 'ShareInformationCtrl'
      }
    }
  })

  .state('app.FinancialResults', {
    url: "/shareinformation",
    views: {
      'menuContent': {
        templateUrl: "templates/shareinformation.html"
      }
    }
  })

  .state('app.announcements', {
    url: "/announcements",
    views: {
      'menuContent': {
        templateUrl: "templates/announcements.html"
      }
    }
  })

  .state('app.financialcalendar', {
    url: "/financialcalendar",
    views: {
      'menuContent': {
        templateUrl: "templates/financialcalendar.html"
      }
    }
  })

  .state('app.annualreports', {
    url: "/annualreports",
    views: {
      'menuContent': {
        templateUrl: "templates/annualreports.html"
      }
    }
  })

  .state('app.presentations', {
    url: "/presentations",
    views: {
      'menuContent': {
        templateUrl: "templates/presentations.html"
      }
    }
  })

  .state('app.pressreleases', {
    url: "/pressreleases",
    views: {
      'menuContent': {
        templateUrl: "templates/pressreleases.html"
      }
    }
  })

  .state('app.webcasts', {
    url: "/webcasts",
    views: {
      'menuContent': {
        templateUrl: "templates/webcasts.html"
      }
    }
  })

  .state('app.operationaldata', {
    url: "/operationaldata",
    views: {
      'menuContent': {
        templateUrl: "templates/operationaldata.html"
      }
    }
  })

  .state('app.corporategovernance', {
    url: "/corporategovernance",
    views: {
      'menuContent': {
        templateUrl: "templates/corporategovernance.html"
      }
    }
  })

  .state('app.shareholderstructure', {
    url: "/shareholderstructure",
    views: {
      'menuContent': {
        templateUrl: "templates/shareholderstructure.html"
      }
    }
  })

  .state('app.investorcontacts', {
    url: "/investorcontacts",
    views: {
      'menuContent': {
        templateUrl: "templates/investorcontacts.html"
      }
    }
  })

  .state('app.playlists', {
    url: "/playlists",
    views: {
      'menuContent': {
        templateUrl: "templates/playlists.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
