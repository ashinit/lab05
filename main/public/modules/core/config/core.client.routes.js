'use strict';
/*global angular*/

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('view-security', {
			url: '/policies/security',
			templateUrl: 'modules/core/views/view-security.client.view.html'
		}).
		state('policies', {
			url: '/policies',
			templateUrl: 'modules/core/views/policies.client.view.html'
		}).
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);
