var app = angular.module('appName',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/',{
    controller: 'MainController',
    templateUrl: '/public/views/users.html'
  });
});

app.controller('MainController', function($scope) {
  $scope.projects = [
    {"id": 1, "title": "Virgin Galactic Launch", "text": "Airline offering suborbital spaceflights with a new version of SpaceShipOne. Provides description of flights, the vehicle and offers bookings starting 2005.", "images": ["/public/images/virgin.jpg"] },
    {"id": 2, "title": "Tesco", "text": "Tesco PLC is a British multinational grocery and general merchandise retailer headquartered in Cheshunt, Hertfordshire, England, United Kingdom. It is the third large…", "images": ["/public/images/tesco.jpg"]},
  ];
});
