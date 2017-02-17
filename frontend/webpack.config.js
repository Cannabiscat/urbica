const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'production';


module.exports = {
  context: __dirname,
  entry: {
    bundle: './static/application.js',
  },
  output: {
    filename: '[name].js',
    path: './static/build',
    library: '[name]',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // watch: NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: 300,
  },
  // devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null,
  target: 'node',
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-0', 'stage-1'],
      },
    }],
  },
};
if (NODE_ENV === 'production') {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin(
    {
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
      },
    }));
}