const PROXY_CONFIG = [{
	context: [
		"/api/"
	],
	target: "https://api.darksky.net/",
	changeOrigin: true,
	secure: false,
	pathRewrite: {
		"^/api/": "/"
	}
}];

module.exports = PROXY_CONFIG;
