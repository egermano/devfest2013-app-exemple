'use strict';

describe('Controller: DevfestCtrl', function () {

  // load the controller's module
  beforeEach(module('appExempleApp'));

  var DevfestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DevfestCtrl = $controller('DevfestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
