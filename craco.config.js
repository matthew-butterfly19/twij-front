const path = require('path');
const { getPathAliases } = require('./craco/tsConfigAliases');

module.exports = {
  webpack: {
    alias: getPathAliases(__dirname, path.resolve('tsconfig.paths.json'))
  }
}
