module.exports = {
	url: 'http://pagerank.tw/google-suggest/result.php',
	headers: {
		'Accept-Language': 'en-US;q=0.6,en;q=0.4',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36',
		'Accept': '*/*',
		'Referer': 'http://pagerank.tw/google-suggest/',
		'Cookie': 'sc_is_visitor_unique=rx8458189.1467605106.DA7C75C8094B4F2E6778F2522A64CCE2.1.1.1.1.1.1.1.1.1',
		'Connection': 'keep-alive',
		'Content-Type': 'text/plain; charset=utf-8'
	},
	qs: {
		dc: 'Google.com',
	}
};
