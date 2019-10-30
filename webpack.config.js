module.exports = {
  entry: `${__dirname}/src/client/app.js`,
  mode: "development",
  output: {
    path: `${__dirname}/src/public`,
    filename: "bundle.js"
  },
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
