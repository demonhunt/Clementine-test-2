'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	facebook: {
		id: String,
		token: String,
		name: String,
      email: String
	},
   nbrClicks: {
      clicks: Number
   }
});

module.exports = mongoose.model('User', User);