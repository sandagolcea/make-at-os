var app = angular.module('appName',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/',{
    controller: 'MainController',
    templateUrl: '/public/views/all.html'
  })
  .when('/corporate',{
    controller: 'MainController',
    templateUrl: '/public/views/corporate.html'
  })
  .when('/entertainment',{
    controller: 'MainController',
    templateUrl: '/public/views/entertainment.html'
  })
  .when('/media',{
    controller: 'MainController',
    templateUrl: '/public/views/media.html'
  });
});

app.controller('MainController', function($scope) {
  $scope.projects = [
    {"id": 1, "title": "Virgin Galactic Launch", "tag": "entertainment", "text": "Airline offering suborbital spaceflights with a new version of SpaceShipOne. Provides description of flights, the vehicle and offers bookings starting 2005.", "images": ["/public/images/virgin.jpg"] },
    {"id": 2, "title": "Tesco", "tag": "corporate", "text": "Tesco PLC is a British multinational grocery and general merchandise retailer headquartered in Cheshunt, Hertfordshire, England, United Kingdom. It is the third large…", "images": ["/public/images/tesco.jpg"]},
    {"id": 3, "title": "Sony", "tag": "media", "text": "Sony is Sanda's favourite brand", "images": ["/public/images/tesco.jpg"]},
    {"id": 4, "title": "Virgin Galactic Launch", "tag": "entertainment", "text": "Airline offering suborbital spaceflights with a new version of SpaceShipOne. Provides description of flights, the vehicle and offers bookings starting 2005.", "images": ["/public/images/virgin.jpg"] },
    {"id": 5, "title": "Tesco", "tag": "corporate", "text": "Tesco PLC is a British multinational grocery and general merchandise retailer headquartered in Cheshunt, Hertfordshire, England, United Kingdom. It is the third large…", "images": ["/public/images/tesco.jpg"]},
    {"id": 6, "title": "Sony", "tag": "media", "text": "Sony is Sanda's favourite brand", "images": ["/public/images/tesco.jpg"]},
  ];
});
