/* eslint-disable no-param-reassign */

const {
  bold,
  black
} = require('chalk')
const util = require('util')

const { stdout } = process

/**
 * Writes a formatted message with a prefix to a given
 * stream like stdout or stderr.
 * @public
 * @param {Stream} stream
 * @param {String} prefix
 * @param {String} format
 * @param {...String} message
 * @return {String}
 */
function log(stream, prefix, format, ...message) {
  if ('string' === typeof stream) {
    return log(stdout, '', stream, prefix, ...[ format, ...message ])
  }

  if (null != prefix) { prefix = String(prefix) }
  if (null != format) { format = String(format) }

  if (!prefix) { prefix = '' }
  if (!format) { format = '' }

  message = message.filter(m => undefined !== m)
  const string = util.format(format, ...message)

  stream.write(' ')
  stream.write(bold(black('ara:')))
  stream.write(' ')
  stream.write(prefix)
  stream.write(string)
  stream.write('\n')

  return string
}

module.exports = {
  log
}
