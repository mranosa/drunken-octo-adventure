'use strict';

describe('Controller: ItemCtrl', function() {

  // load the controller's module
  beforeEach(module('drunkenOctoAdventureApp'));

  var ItemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    ItemCtrl = $controller('ItemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
