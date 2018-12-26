'use strict'
module.exports = {
  NODE_ENV: '"production"',
  baseUrl: process.env.NODE_ENV === 'production'
  ? '/golden-ratio/'
  : '/'
}
