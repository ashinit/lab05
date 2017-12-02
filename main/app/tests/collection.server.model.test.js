'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
    mongoose = require('mongoose'),
    Collection = mongoose.model('Collection');

/**
 * Unit tests
 */
describe('Collection Model', function() {

    describe('Saving', function() {
        it('saves new record', function(done) {
            var collection = new Collection({
                name: 'Beverages',
                description: 'Soft drinks, coffees, teas, beers, and ales'
            });

            collection.save(function(err, saved) {
                should.not.exist(err);
                done();
            });
        });

        it('throws validation error when name is empty', function(done) {   
            var collection = new Collection({
                description: 'Soft drinks, coffees, teas, beers, and ales'
            });

            collection.save(function(err) {
                should.exist(err);
                err.errors.name.message.should.equal('name cannot be blank');
                done();
            });
        });

        it('throws validation error when name longer than 15 chars', function(done) {
            var collection = new Collection({
                name: 'Grains/Cereals/Chocolates'
            });

            collection.save(function(err, saved) {
                should.exist(err);
                err.errors.name.message.should.equal('name must be 15 chars in length or less');
                done();
            });
        });

        it('throws validation error for duplicate category name', function(done) {
            var collection = new Collection({
                name: 'Beverages'
            });

            collection.save(function(err) {
                should.not.exist(err);

                var duplicate = new Collection({
                    name: 'Beverages'
                });

                duplicate.save(function(err) {
                    err.err.indexOf('$name').should.not.equal(-1);
                    err.err.indexOf('duplicate key error').should.not.equal(-1);
                    should.exist(err);
                    done();
                });
            });
        });
    });

    afterEach(function(done) { 
        // NB this deletes ALL categories (but is run against a test database)
        Collection.remove().exec();
        done();
    });
});
// 'use strict';

// /**
//  * Module dependencies.
//  */
// var should = require('should'),
// 	mongoose = require('mongoose'),
// 	Collection = mongoose.model('Collection');

// /**
//  * Unit tests
//  */
// describe('Collection Model', function() {

// 	describe('Saving', function() {
// 		it('saves new record');

// 		it('throws validation error when name is empty');

// 		it('throws validation error when name longer than 15 chars');
		
// 		it('throws validation error for duplicate category name');
// 	});

// });