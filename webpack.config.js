const path = require('path');

module.exports = {
  entry: { "drc-video-core": "./src/src.js" },
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: "player.dist.js",
    publicPath: '/dist/js/'
  },
  module: {
    rules: [
      {
        test: /.jsx?$|.js?$/,
        include: path.resolve('./'),
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
    ]
  },
  node: {
    fs: 'empty' // necessary for drc-media-statistics module
  }
};