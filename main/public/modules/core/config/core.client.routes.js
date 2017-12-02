'use strict';
/*global angular*/

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.

		// state('dmca-core', {
		// 	url: '/core/dmca',
		// 	templateUrl: 'modules/core/views/dmca-core.client.view.html'
		// }).
		// state('dmcacore', {
		// 	url: '/core/dmca',
		// 	templateUrl: 'modules/core/views/dmca-core.client.view.html'
		// }).

		state('core', {
			url: '/core',
			templateUrl: 'modules/core/views/core.client.view.html'
		}).
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		}).
		state('dmcacore', {
			url: '/core/dmca',
			templateUrl: 'modules/core/views/dmca-core.client.view.html'
		});
	}
]);
