// This library allows us to combine paths easily
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'index.js')],
   output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'bundle.js'
   },
   devServer: {
        contentBase: './src',
        publicPath: '/output'
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   module: {
      rules: [
         {
             test: /\.(js|jsx)/,
             use: {
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-react', '@babel/preset-env'] }
             }
         },
         {
            test: /\.scss/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] // Note that postcss loader must come before sass-loader
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ]
};