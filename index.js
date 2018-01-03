'use strict'

const fs = require('fs')
const yaml = require('js-yaml')

function nixconfigYamlLoader (file) {
  return yaml.safeLoad(fs.readFileSync(file))
}

module.exports = {
  '.yaml': nixconfigYamlLoader,
  '.yml': nixconfigYamlLoader
}
