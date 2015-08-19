var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

  //===========================================
  //redirect to state one======================
  $urlRouterProvider.otherwise("/");

  //===========================================
  //set the states=============================
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../views/home.html',
      controller: 'homeCtrl'
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
