var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../views/home.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '../views/login.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '../views/signup.html'
    });
});
