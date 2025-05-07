const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  mode: 'development', // Set to 'production' for production builds
  entry: './app.js', // Your main JS file
  output: {
    filename: 'bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  devtool: 'inline-source-map', // Source maps for easier debugging
  watch: true, // Watch for changes and rebuild automatically
  module: {
    rules: [
      {
        test: /\.css$/i, // Match .css files
        use: ['style-loader', 'css-loader'], // Use these loaders
      },
      {
        test: /\.pem$/,
        use: 'ignore-loader'
      }
      // You can add more rules for other file types here
    ],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys)
  ],
};
