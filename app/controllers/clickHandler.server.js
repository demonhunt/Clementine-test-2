'use strict';
var Users = require('../models/users.js');
function clickHandler () {

	this.getClicks = function (req, res) {
		Users
		.findOne({ 'facebook.id': req.user.facebook.id }, { '_id': false })
		.exec(function (err, result) {
			if (err) { throw err; }

			res.json(result.nbrClicks);
		});
	};

	this.addClick = function (req, res) {
		Users
		.findOneAndUpdate({ 'facebook.id': req.user.facebook.id }, { $inc: { 'nbrClicks.clicks': 1 } })
		.exec(function (err, result) {
			if (err) { throw err; }

			res.json(result.nbrClicks);
		}
		);
	};

	this.resetClicks = function (req, res) {
		Users
		.findOneAndUpdate({ 'facebook.id': req.user.facebook.id }, { 'nbrClicks.clicks': 0 })
		.exec(function (err, result) {
			if (err) { throw err; }

			res.json(result.nbrClicks);
		}
		);
	};

}
module.exports = clickHandler;