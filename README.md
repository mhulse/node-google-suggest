# Node Google Suggest (EN)

This is the English version of [Node Google Suggest by @LinZap](https://github.com/LinZap/node-google-suggest).

This module returns keywords based on input keyword; results are provided by <http://pagerank.tw/google-suggest/>.

## Usage

```bash
$ cd node-google-suggest-en
$ npm install
```

### Query keywords

```bash
$ node bin/suggest.js "credit card"
```

Output:

```js
[
	'Credit card',
	'Credit card tax',
	'Credit Card Airport Transfer',
	'Credit card to pay license tax',
	'The credit recommendation',
	'Credit card cash-back',
	'CVC',
	'Credit card payment',
	'Card number',
	'Credit card offers',
	'Credit Card Airport Transfer',
	'Credit card comparison',
	'The credit recommendation ',
	'Credit card cash-back',
	'Credit card tax',
	'Credit cards film',
	'Credit card trunk',
	'Credit card license tax',
	'CVC',
	'Credit Card Airport Parking'
]
```

## API

Install:

```bash
$ npm install node-google-suggest --save-dev
```

Require:

```js
var suggest = require('node-google-suggest')
var keyword = 'Netfix'

suggest(keyword, function(err, res) {

	if (( ! err) && res.length) {
		console.log(res);
	} else {
		console.log('no result');
	}
	
})
```

## npm

… because I forget:

```bash
# If not already, login:
$ npm adduser
# Bump version number in `package.json` …
# … and publish on npm:
$ npm publish
```

## License

MIT License
