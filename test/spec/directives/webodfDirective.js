'use strict';

describe('Directive: webodfDirective', function () {

  // load the directive's module
  beforeEach(module('webodfAngularjsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<webodf-directive></webodf-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the webodfDirective directive');
  }));
});
