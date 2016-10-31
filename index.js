#!/usr/bin/env node
// jshint esversion:6

let request = require('request');

let options = require('./lib/options.js');

module.exports = function(keywords, cb) {
	
	options.qs.q = keywords;
	
	request(options, (error, response, body) => {
		
		if (( ! error) && (response.statusCode == 200)) {
			
			let result = body.split('<BR>').slice(0, -1);
			let col = [];
			
			for (let i = 0, l = result.length; i < l; i++) {
				
				if (result[i].length) {
					
					col.push(result[i]);
					
				}
				
			}
			
			cb(error, col);
			
		} else {
			
			cb(error, null);
			
		}
		
	});
	
};
