import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
// import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'.BundleAnalyzerPlugin;
import globals from '../src/config/globals';
import { merge } from './base';

const prodConfig: any = merge({
  name: 'client',
  mode: 'production',
  entry: {
    app: path.join(__dirname, '..', 'src/index.tsx'),
  },
  plugins: [
    new webpack.DefinePlugin(globals('client')),
    new HtmlWebpackPlugin({
      title: 'React Typescript Boilerplate',
      filename: 'index.html',
      inject: false,
      template: path.resolve(__dirname, '..', 'src/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    // new BundleAnalyzerPlugin(),
  ],
});

module.exports = prodConfig;
