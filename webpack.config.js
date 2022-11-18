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
          "sass-loader",
          
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 1000, // 1kB
            name: 'img/[name].[contenthash:7].[ext]'
          }
        }]
      },
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