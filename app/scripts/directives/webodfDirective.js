/*jslint browser:true, unparam: true*/
/*global define, angular*/

angular.module('webodf', [])
  .directive('webodfview', function ($compile) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the webodfDirective directive');
      }
    };
  });
