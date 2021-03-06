#!/usr/bin/env node

var gh = require('github-url-to-object');
var got = require('got');
var param = process.argv.slice(2);
var userDetails = gh(param[0]);
var url = 'https://api.github.com/repos/';
url = url + userDetails.user + '/' + userDetails.repo;

got(url, function (err, data) {
	if (err) {
		console.log('error');
	}
	var jsonData = JSON.parse(data);
	if (jsonData.homepage && jsonData.homepage !== '') {
		console.log(jsonData.homepage);
	} else {
		console.log('no homepage url found');
	}
	process.exit();
});
