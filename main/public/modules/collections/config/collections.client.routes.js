'use strict';

/*global angular*/

//Setting up route
angular.module('collections').config(['$stateProvider',
	function($stateProvider) {
		// Collections state routing
		$stateProvider.
		state('browse-collections', {
			url: '/collections/browse',
			templateUrl: 'modules/collections/views/browse-collections.client.view.html'
		}).
		state('edit-collection', {
			url: '/collections/edit',
			templateUrl: 'modules/collections/views/edit-collection.client.view.html'
		}).
		state('view-collection', {
			url: '/collections/view',
			templateUrl: 'modules/collections/views/view-collection.client.view.html'
		}).
		state('createcollection', {
			url: '/collections/create',
			templateUrl: 'modules/collections/views/create-collection.client.view.html'
		}).
		state('collections', {
			url: '/collections',
			templateUrl: 'modules/collections/views/collections.client.view.html'
		}).
		state('viewCollection', {
			url: '/collections/:collectionId',
			templateUrl: 'modules/collections/views/view-collection.client.view.html'
		}).
		state('editCollection', {
			url: '/collections/:collectionId/edit',
			templateUrl: 'modules/collections/views/edit-collection.client.view.html'
		});
	}
]);
