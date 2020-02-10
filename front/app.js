var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'ligneFraisController'
		})
		.when('/LignesFrais', {
			templateUrl:'templates/list.html',
			controller:'ligneFraisController'
		})
		.when('/LignesFrais/create', {
			templateUrl:'templates/add.html',
			controller:'ligneFraisController'
		})
		.when('/LignesFrais/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'ligneFraisController'
		})
		.when('/LignesFrais/:id/show', {
			templateUrl:'templates/show.html',
			controller:'ligneFraisController'
		});
});
