ara-console
===========

Logging functions for Ara modules to ensure consistent console logs.

## Status
**Stable**

## Installation

```sh
$ npm install arablocks/ara-console
```

## Example

Print out examples of all logs.

```sh
$ node example.js
```

## API

This module exports a series of utility logging functions for use in
several Ara modules.

### `console.log(stream, prefix, format, ...message)`

Writes a formatted message with a prefix to a given
stream like `stdout` or `stderr`.

```js
const { log } = require('ara-console')
log(process.stdout, 'info: ', '%s %s', someMessage, otherMessage)
```

### `console.error(format, ...message)`

Prints a formatted error message to `stderr`.

```js
const { error } = require('ara-console')
error("fatal: ", someMessage)
```

### `console.info(format, ...message)`

Prints a formatted info message to `stdout`.

```js
const { info } = require('ara-console')
info("fatal: ", someMessage)
```

### `console.warn(format, ...message)`

Prints a formatted warn message to `stderr`.

```js
const { warn } = require('ara-console')
warn("fatal: ", someMessage)
```

## Contributing

- [Commit message format](/.github/COMMIT_FORMAT.md)
- [Commit message examples](/.github/COMMIT_FORMAT_EXAMPLES.md)
- [How to contribute](/.github/CONTRIBUTING.md)

Releases follow [Semantic Versioning](https://semver.org/)

## See Also

- [Log](https://goo.gl/6pm7Re)

## License

LGPL-3.0
