const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 
module.exports = {
  module: {
    rules: [
      {
        test: /\.s|css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  resolve:{
    extensions: ['.vue', '.ts', '.js']
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[hash].css" })
  ],
  configureWebpack:{
    optimization: {
    runtimeChunk: 'single',
    splitChunks:{
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    }
  }
  }
  
};