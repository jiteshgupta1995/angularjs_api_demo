'use strict';

var app = angular.module('myApp.view1', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

app.controller('View1Ctrl', ["$scope", "$http", "appSettings", "fetchService", function($scope, $http, appSettings, fetchService){
	// console.log(appSettings);
	$http.get('https://restcountries.eu/rest/v2/all').
        then(function(response) {
            $scope.items = response.data;
        });


    $scope.propertyName = 'name';
    $scope.reverse = true;

	$scope.sortBy = function(propertyName) {
		$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
		$scope.propertyName = propertyName;
	};
}]);