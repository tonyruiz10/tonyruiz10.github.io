var page = require('webpage').create();

page.open('http://net.tutsplus.com', function(s, a, b, c) {
	console.log(s);
	phantom.exit();
});
