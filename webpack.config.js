module.exports = {
  entry: './app.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: { loader: "babel-loader" }, exclude: /node_modules/}
    ]
  }
};