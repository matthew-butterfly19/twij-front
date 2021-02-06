const path = require('path');
const fs = require('fs');

module.exports.getPathAliases = (rootPath, tsConfigPath) => {
  const tsConfigContent = fs.readFileSync(tsConfigPath).toString();
  const tsconfigJson = JSON.parse(tsConfigContent);
  
  const aliases = {};
  const pathsMap = tsconfigJson.compilerOptions.paths;
  for (let key in pathsMap) {
    if (!pathsMap.hasOwnProperty(key)) {
      continue;
    }
    const keyPath = key.replace('/*', '');
    const dirPath = pathsMap[key][0];
    aliases[keyPath] = path.resolve(rootPath, dirPath.replace('*', ''));
  }
  return aliases;
}
