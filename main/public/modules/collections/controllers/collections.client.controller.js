'use strict';
/*global angular*/
///* global $stateParams*/

angular.module('collections').controller('CollectionsController', ['$scope', '$stateParams','$location','$http', 'Collections',
	function($scope, $stateParams,  $location, $http, Collections) {
		//$scope.authentication = Authentication;
		//$scope.authentication = Authentication;
	  	$scope.currentPage = 1;
	  	$scope.pageSize = 10;
	  	$scope.offset = 0;
	  	
	  	$http. get('http://images-api.nasa.gov/search?q=mars').
        then(function(response) {
            $scope.search = response.data;
        });
        
        
	   // Page changed handler
	   $scope.pageChanged = function() {
	  		$scope.offset = ($scope.currentPage - 1) * $scope.pageSize;
	   };
		
		// Create new Collection
		$scope.create = function() {
			// Create new Collection object
			var collection= new Collections ({
				name: this.name,
				description: this.description,
				rating: this.rating
			});
			

			// var app = angular.module('myApp', []);
			// app.controller('myCtrl', function($scope, $http) {
		 //   $http.get("welcome.htm")
		 //   .then(function(response) {
		 //       	$scope.myWelcome = response.data;
		 //   	});
			// });

			// Redirect after save
			collection.$save(function(response) {
				$location.path('collections/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
		
		
		
		// Remove existing Collection
		$scope.remove = function(collection) {
			if (collection) { 
				collection.$remove();

				for (var i in $scope.collections) {
					if ($scope.collections [i] === collection) {
						$scope.collections.splice(i, 1);
					}
				}
			} else {
				$scope.collection.$remove(function() {
					$location.path('collections');
				});
			}
		};

		// Update existing Collection
		$scope.update = function() {
			var collection = $scope.collection;

			collection.$update(function() {
				$location.path('collections/' + collection._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Collections
		$scope.find = function() {
			$scope.collections = Collections.query();
		};
		
		// Find existing Collection
		$scope.findOne = function() {
			$scope.collection = Collections.get({ 
				collectionId: $stateParams.collectionId
			});
		};

		
		// Search for a collection
    	$scope.collectionSearch = function(collection) {
        	$location.path('collections/' + collection._id);
    	};
    	
    	//Rate a collection
    	$scope.collectionRate = function(collection) {
        	$location.path('collections/' + collection._id);
    	};
	}
]);