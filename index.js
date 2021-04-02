const { bold } = require('chalk')
const { error } = require('./error')
const { info } = require('./info')
const { warn } = require('./warn')
const { log } = require('./log')

function Console(label) {
  return {
    error: prefixify(label, error),
    info: prefixify(label, info),
    warn: prefixify(label, warn),
    log: prefixify(label, log),
  }
}

module.exports = Object.assign(Console, Console())

function prefixify(label, fn) {
  const prefix = bold(label ? `(${label}): ` : '')
  return (...args) => fn(prefix + args[0], ...args.slice(1))
}
