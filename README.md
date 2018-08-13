ara-console
===========

Logging functions for Ara modules so logging is consistent

## Installation

```sh
$ npm install arablocks/ara-console
```

## API

This module exports a series of utility logging functions for use in
several Ara modules.

### `console.log(stream, prefix, format, ...message)`

Writes a formatted message with a prefix to a given
stream like stdout or stderr.

```js
const { log } = require('ara-console')
log(process.stdout, 'info: ', '%s %s', someMessage, otherMessage)
```

### `console.error(format, ...message)`

Prints a formatted error message to stderr.

```js
const { error } = require('ara-console')
error("fatal: ", someMessage)
```

### `console.info(format, ...message)`

Prints a formatted info message to stdout.

```js
const { info } = require('ara-console')
info("fatal: ", someMessage)
```

### `console.warn(format, ...message)`

Prints a formatted warn message to stderr.

```js
const { warn } = require('ara-console')
warn("fatal: ", someMessage)
```

## License

LGPL-3.0
