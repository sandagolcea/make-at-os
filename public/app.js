var app = angular.module('appName',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/',{
    controller: 'MainController',
    templateUrl: '/public/views/users.html'
  });
});

app.controller('MainController', function($scope) {
  $scope.users = [
    {"id": 1, "name": "sandagolcea"},
    {"id": 2, "name": "ptolemybarnes"}
  ]
});
