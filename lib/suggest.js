#!/usr/bin/env node
// jshint esversion:6

let request = require('request');

let options = require('./lib/options.js');

module.exports = function(keywords, cb) {
	
	options.qs.q = keywords;
	
	request(options, (error, response, body) => {
		
		if (( ! error) && (response.statusCode == 200)) {
			
			let res = body.split('<BR>').slice(0, -1);
			
			cb(error, res);
			
		} else {
			
			cb(error, null);
			
		}
		
	});
	
};
