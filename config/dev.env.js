'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API: '"https://api.cloudw2p.com/api/v1/"'
  // API:'"http://192.168.20.124:8001/api/v1/"'
})
