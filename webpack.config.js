var path = require('path');

module.exports = {
  resolve: {
    modules: [
      path.join(__dirname, 'heromerge'),
      'node_modules'
    ]
  },
  entry: './heromerge/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }

}
