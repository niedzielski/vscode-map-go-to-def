const pkg = require('./package.json')

export default {
  entry: 'src/index.js',
  dest: pkg.main,
  format: 'es',
  sourceMap: true
}