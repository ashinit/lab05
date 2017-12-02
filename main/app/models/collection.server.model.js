'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
	
/**
 * Validation
 */
function validateLength (v) {
  // a custom validation function for checking string length to be used by the model
  return v.length <= 15;
}

function validateRating (v) {
  // a custom validation function for checking length to be used by the model
  return v <= 10;
}

/**
 * Collection Schema
 */
var CollectionSchema = new Schema({
    created: {         
        type: Date,   
        default: Date.now 
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    name: {
        type: String,
        default: '',
        trim: true,     
        unique : true,
        required: 'name cannot be blank',
        validate: [validateLength, 'name must be 15 chars in length or less']
    },
    rate:{
        type: Number,
        default: null,
        validate: [validateRating, 'rating must be between 1 and 10!']
    },
    
    visibility:{
        type: String,
        enum:['public','private'],
        default: ['public']
    }
});

mongoose.model('Collection', CollectionSchema);