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
    {"id": 2, "title": "Tesco", "text": "Tesco PLC is a British multinational grocery and general merchandise retailer headquartered in Cheshunt, Hertfordshire, England, United Kingdom.[3] It is the third largest retailer in the world measured by profits[4][5] and second-largest retailer in the world measured by revenues. It has stores in 12 countries across Asia and Europe and is the grocery market leader in the UK (where it has a market share of around 28.4%), Ireland, Hungary,[6] Malaysia, and Thailand.[7][8]", "images": ["/public/images/tesco.jpg"]},
  ];
});
