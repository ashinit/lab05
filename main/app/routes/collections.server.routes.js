'use strict';

module.exports = function(app) {
	
	var collections = require('../../app/controllers/collections.server.controller');
	//var users = require('../../app/controllers/users.server.controller');
	
	app.route('/collections')
		.get(collections.list)
		.post(collections.create);
		
	app.route('/collections/:collectionId')
   		.get(collections.read)
   		.put(collections.update)
		.delete(collections.delete);
		
	app.param('collectionId', collections.collectionByID);
};
