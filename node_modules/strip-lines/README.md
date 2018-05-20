# strip-lines

Remove n lines from the beginning of a string.

[![Build status](https://travis-ci.org/watson/strip-lines.svg?branch=master)](https://travis-ci.org/watson/strip-lines)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install strip-lines
```

## Usage

```js
var strip = require('strip-lines')

var str = 'foo\r\nbar\nbaz'

// remove the first 2 lines from `str`
console.log(strip(str, 2)) // => baz
```

## API

The module exposes a single function which takes two arguments:

```
strip(string, lines)
```

- `string` - The string that should be parsed
- `lines` - The number of lines to remove from the beginning of the
  provided `string`

## License

MIT
