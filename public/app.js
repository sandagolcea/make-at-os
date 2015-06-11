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
    {"id": 1, "title": "Virgin Galactic Launch", "tag": "corporate", "text": "sometext", "images": ["http://i.dailymail.co.uk/i/pix/2015/01/06/2473100D00000578-2898639-Photographer_Andrey_Gudkov_snapped_the_images_on_the_plains_of_t-a-20_1420546215677.jpg", "http://i.dailymail.co.uk/i/pix/2015/01/06/2473100D00000578-2898639-Photographer_Andrey_Gudkov_snapped_the_images_on_the_plains_of_t-a-20_1420546215677.jpg"] },
    {"id": 2, "title": "Virgin Galactic Launch 2", "tag": "media", "text": "sometext2", "images": ["http://i.dailymail.co.uk/i/pix/2015/01/06/2473100D00000578-2898639-Photographer_Andrey_Gudkov_snapped_the_images_on_the_plains_of_t-a-20_1420546215677.jpg", "http://i.dailymail.co.uk/i/pix/2015/01/06/2473100D00000578-2898639-Photographer_Andrey_Gudkov_snapped_the_images_on_the_plains_of_t-a-20_1420546215677.jpg"] },
    {"id": 2, "title": "Virgin Galactic Launch 3", "tag": "entertainment", "text": "sometext2", "images": ["http://i.dailymail.co.uk/i/pix/2015/01/06/2473100D00000578-2898639-Photographer_Andrey_Gudkov_snapped_the_images_on_the_plains_of_t-a-20_1420546215677.jpg", "http://i.dailymail.co.uk/i/pix/2015/01/06/2473100D00000578-2898639-Photographer_Andrey_Gudkov_snapped_the_images_on_the_plains_of_t-a-20_1420546215677.jpg"] },
  ];
});
