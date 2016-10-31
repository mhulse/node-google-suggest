#!/usr/bin/env node

var suggest = require('../index.js');
var keyword = process.argv[2];

if ( ! keyword) {
	
	console.error('no keyword');
	
	process.exitCode = 1;
	
}

suggest(keyword, function(error, result) {

	if( ! error) {
		
		console.log(result);
		
	} else {
		
		console.log('no result');
		
	}
	
});
