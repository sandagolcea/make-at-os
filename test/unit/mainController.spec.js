describe('MainController', function() {
  beforeEach(module('appName'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('MainController', {
        $scope: scope,
    });
  }));

  it('initialises with an empty search result and term', function() {
    expect(scope.users.length).toEqual(2);
  });
});