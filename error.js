'use strict'

const { bold, red } = require('chalk')
const { log } = require('./log')

const { stderr } = process

const kPrefix = 'error: '

/**
 * Prints a formatted error message to stderr.
 * @public
 * @param {String} format
 * @param {...String} message
 * @return {String}
 */
function error(format, ...message) {
  return log(stderr, red(bold(kPrefix)), format, ...message)
}

module.exports = {
  error
}
