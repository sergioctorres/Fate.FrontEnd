/// <reference path="../scripts/angular.js" />
var customerApp = angular.module('customers', ['ngRoute']);

customerApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/CustomerDetails/:id', {
                templateUrl: 'Views/customerDetails.html',
                controller: 'CustomerDetailsController'
            }).
            when('/About', {
                templateUrl: 'Views/about.html',
                controller: 'AboutController'
            }).
            when('/Customer', {
                templateUrl: 'Views/customer.html',
                controller: 'CustomerController'
            }).
            otherwise({
                redirectTo: '/Customer'
            });
    }
]);

customerApp.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

customerApp.controller("AboutController", function ($scope) {
    $scope.message = "Sobre";
});

customerApp.controller("CustomerDetailsController", function ($scope) {
    $scope.message = "Detalhes de Cliente";
});

customerApp.controller("CustomerController", function ($scope) {
    $scope.message = "Clientes";
});