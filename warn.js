'use strict'

const { bold, yellow } = require('chalk')
const { log } = require('./log')

const { stderr } = process

const kPrefix = ' warn: '

/**
 * Prints a formatted warn message to stderr.
 * @public
 * @param {String} format
 * @param {...String} message
 * @return {String}
 */
function warn(format, ...message) {
  return log(stderr, yellow(bold(kPrefix)), format, ...message)
}

module.exports = {
  warn
}
