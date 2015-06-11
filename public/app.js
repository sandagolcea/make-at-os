var app = angular.module('appName',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/',{
    controller: 'MainController',
    templateUrl: '/public/views/users.html'
  });
});

app.controller('MainController', function($scope) {
  $scope.projects = [
    {"id": 1, "title": "Virgin Galactic Launch", "text": "sometext", "images": ["http://i.dailymail.co.uk/i/pix/2015/01/06/2473100D00000578-2898639-Photographer_Andrey_Gudkov_snapped_the_images_on_the_plains_of_t-a-20_1420546215677.jpg", "http://i.dailymail.co.uk/i/pix/2015/01/06/2473100D00000578-2898639-Photographer_Andrey_Gudkov_snapped_the_images_on_the_plains_of_t-a-20_1420546215677.jpg"] },
    {"id": 2, "title": "Virgin Galactic Launch 2", "text": "sometext2", "images": ["http://i.dailymail.co.uk/i/pix/2015/01/06/2473100D00000578-2898639-Photographer_Andrey_Gudkov_snapped_the_images_on_the_plains_of_t-a-20_1420546215677.jpg", "http://i.dailymail.co.uk/i/pix/2015/01/06/2473100D00000578-2898639-Photographer_Andrey_Gudkov_snapped_the_images_on_the_plains_of_t-a-20_1420546215677.jpg"] },
  ]
});
