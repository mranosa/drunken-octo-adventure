'use strict';

describe('Controller: PitchCtrl', function() {

  // load the controller's module
  beforeEach(module('drunkenOctoAdventureApp'));

  var PitchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    PitchCtrl = $controller('PitchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
