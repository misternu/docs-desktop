const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process');

// config directories
const SRC_DIR = path.resolve(__dirname, 'app');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');

// any directories you need
const defaultInclude = [SRC_DIR];

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: OUTPUT_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, // bake down css
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        include: defaultInclude
      },
      {
        test: /\.jsx?$/, // bake down components
        use: [{ loader: 'babel-loader' }],
        include: defaultInclude
      }
    ]
  },
  target: 'electron-renderer', // the actual important bit
  plugins: [
    new HtmlWebpackPlugin(), // creates the index for us.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devtool: 'cheap-source-map', // big bundle size, exclude from prod
  devServer: {
    contentBase: OUTPUT_DIR,
    stats: {
      colors: true,
      chunks: false,
      children: false
    },
    setup() {
      spawn('electron', ['.'], { shell: true, env: process.env, stdio: 'inherit' })
        .on('close', (code = 0) => process.exit(code))
        .on('error', spawnError => console.error(spawnError)); // eslint-disable-line no-console
    }
  }
};
