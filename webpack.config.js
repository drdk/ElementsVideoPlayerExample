const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: "./src/src.js",
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: "player.dist.js",
    publicPath: '/dist/js/'
  },
  watch: true,
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
      {
        test: /\.png/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: '10000',
              minetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.swf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'swf/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  node: {
    fs: 'empty' // necessary for drc-media-statistics module
  }
};