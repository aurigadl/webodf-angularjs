/*jslint browser:true, unparam: true*/
/*global define, angular*/
'use strict';

angular.module('app', ['webodf'])
.controller("mainCtrl", function($scope){
  $scope.data = 'test';
});
