#! /usr/bin/env node

var gh = require('github-url-to-object');
var got = require('got');
var isOnline = require('is-online');

var param = process.argv.slice(2);
var userDetails = gh(param[0]);
var url = 'https://api.github.com/repos/';
url = url + userDetails.user + '/' + userDetails.repo;

isOnline(function (err, online) {
	if (err) {
		//console.log(err.message);
		
	}
	if (!online) {
		console.log('Internet connection is required');
	}
});

got(url, function (err, data) {
	if (err) {
		
	}
	var jsonData = JSON.parse(data);
	if (jsonData.homepage && jsonData.homepage !== '') {
		console.log(jsonData.homepage);
	} else {
		//console.log('no homepage url defined');
		
	}
	process.exit();
});
