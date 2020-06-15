const path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  externals: [
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      'node_modules',
      path.join(__dirname, 'src'),
    ],
  },
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'react-permissible.js',
    library: 'react-permissible',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'lib'),
    umdNamedDefine: true,
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
