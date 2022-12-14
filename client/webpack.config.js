

const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest'); 
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// in mod plugins is in module.export 
module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
plugins: [
  new InjectManifest({
    swSrc: './src/sw.js',
    swDest: 'service-worker.js',
  }),
  new HtmlWebpackPlugin({
    template: './index.html',
    title: 'Webpack Plugin',
  }),

],
// TODO: Add CSS loaders and babel to webpack.
// module defined somewhere else?

module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  ],
},
}



  
  // not sure where this return is from no return in this file in mod

  // return {
  //   mode: 'development',
  //   entry: {
  //     main: './src/js/index.js',
  //     install: './src/js/install.js'
  //   },
  //   output: {
  //     filename: '[name].bundle.js',
  //     path: path.resolve(__dirname, 'dist'),
  //   },
  //   plugins: [
      
  //   ],
  
  //   module: {
  //     rules: [
        
  //     ],
  //   },
  // };
  // };

  // module: {
  //   rules: [
    //     {
      //       test: /\.css$/i,
      //       use: ['style-loader', 'css-loader'],
      //     },
  //     {
  //       test: /\.(png|svg|jpg|jpeg|gif)$/i,
  //       type: 'asset/resource',
  //     },
  //     {
    //       test: /\.m?js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: {
    //         loader: 'babel-loader',
    //         options: {
  //           presets: ['@babel/preset-env'],
  //         },
  //       },
  //     },
  //   ],
  // },


// from contact card mod 

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {InjectManifest} = require('workbox-webpack-plugin');
// const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: './src/js/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },

//   plugins: [
//     new InjectManifest({
//       swSrc: './src/sw.js',
//       swDest: 'service-worker.js',
//     }),
//     new HtmlWebpackPlugin({
//       template: './index.html',
//       title: 'Webpack Plugin',
//     }),

//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.m?js$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env'],
//           },
//         },
//       },
//     ],
//   },
// };

