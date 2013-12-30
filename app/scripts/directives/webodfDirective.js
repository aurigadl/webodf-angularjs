/*jslint browser:true, unparam: true*/
/*global define, angular*/

angular.module('webodf', [])
  .directive('webodfview', function ($compile) {
    return {
      restrict: 'E',
      scope: {file : "@"},
      link: function (scope, element, attrs) {
        var nid = 'odt' + Math.floor((Math.random()*100)+1);
        element.attr('id', nid);
        odfcanvas = new odf.OdfCanvas(element[0]);
        odfcanvas.load('./files/' + scope.file);
      }
    };
  });
