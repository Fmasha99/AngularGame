const PROXY_CONFIG = [{
	context: [
		"/api/darksky/"
	],
	target: "https://api.darksky.net/",
	changeOrigin: true,
	secure: false,
	pathRewrite: {
		"^/api/darksky/": "/"
	}
}, {
	context: [
		"/api/googleMap/"
	],
	target: "https://maps.googleapis.com/",
	changeOrigin: true,
	secure: false,
	pathRewrite: {
		"^/api/googleMap/": "/"
	}
}];

module.exports = PROXY_CONFIG;
