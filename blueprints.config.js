module.exports = [{
  name: 'apiClient',
  webpack: {
    entry: {
      flags: './index.es6.js',
    },
    output: {
      library: '[name].js',
      libraryTarget: 'umd',
    },
    resolve: {
      generator: 'npm-and-modules',
      extensions: ['', '.js', '.jsx', '.es6.js', '.json'],
    },
    loaders: [
      'esnextreact',
      'json',
    ],
    plugins: [
      'production-loaders',
      'set-node-env',
      'abort-if-errors',
      'minify-and-treeshake',
    ],
    externals: 'node-modules',
  },
}];
