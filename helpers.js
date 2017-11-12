const fs = require('fs');
const path = require('path');
const { resolve } = require('path');
const nodeModules = {};

function root(path) {
  return resolve(__dirname, path);
}

fs.readdirSync(path.resolve(__dirname, './node_modules'))
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });

module.exports = {
  root: root,
  nodeModules
};
