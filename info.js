'use strict'

const { bold, cyan } = require('chalk')
const { log } = require('./log')

const { stdout } = process

const kPrefix = ' info: '

/**
 * Prints a formatted info message to stdout.
 * @public
 * @param {String} format
 * @param {...String} message
 * @return {String}
 */
function info(format, ...message) {
  return log(stdout, cyan(bold(kPrefix)), format, ...message)
}

module.exports = {
  info
}
