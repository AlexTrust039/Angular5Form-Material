var webpack = require('webpack');

module.exports = {

    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },

    module: {
        rules: [
          {
            test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
            loader: '@ngtools/webpack'
          },
          {
            test : /\.css$/, 
            use: [
                'style-loader',
                'css-loader'
                 ]
          }
        ]
      },
      resolve: {
          extensions: ['', 'js', 'ts', 'css']
      }


};