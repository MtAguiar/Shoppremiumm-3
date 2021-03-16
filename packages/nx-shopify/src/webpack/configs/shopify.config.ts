import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import * as HTMLWebpackPlugin from 'html-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as path from 'path';
import * as TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';
import * as webpackMerge from 'webpack-merge';
import { BuildExecutorSchema } from '../../executors/build/schema';
import { getCommonWebpackPartialConfig } from './common.config';

function getShopifyWebpackPartialConfig(
  options: BuildExecutorSchema,
  isDevServer: boolean
) {
  const { sourceRoot, outputPath, themekitConfig, main } = options;

  const chunksBaseName = isDevServer
    ? 'assets/[name]'
    : 'assets/[name].[contenthash]';
  const chunksOutputPath = `${outputPath}`;

  const webpackConfig: Configuration = {
    entry: {
      // ...themeEntryPoints,
      // ...Object.entries(themeEntryPoints).reduce(
      //   (entriesObj, [entryName, entryValue]) => {
      //     return {
      //       ...entriesObj,
      //       [entryName]: isDevServer
      //         ? [path.join(__dirname, './hmr/hot-client.js')].concat(entryValue)
      //         : entryValue,
      //     };
      //   },
      //   {}
      // ),
      main,
    },
    output: {
      path: chunksOutputPath,
      // chunkFilename: './assets/[name].bundle.js',
      filename: `${chunksBaseName}.js`,
    },
    node: false,
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: `./${sourceRoot}/config/*.json`,
            to: 'config/[name].[ext]',
          },
          {
            from: `./${sourceRoot}/locales/*.json`,
            to: 'locales/[name].[ext]',
          },
          {
            from: `./${themekitConfig}`,
            to: '[name].[ext]',
          },
          {
            from: `./${sourceRoot}/theme/layout/**/*.liquid`,
            to: 'layout/[name].[ext]',
          },
          {
            from: `./${sourceRoot}/theme/templates/**/*.liquid`,
            to: 'templates/[name].[ext]',
            globOptions: {
              ignore: ['**/customers/**/*'],
            },
          },
          {
            from: `./${sourceRoot}/theme/templates/customers/**/*.liquid`,
            to: 'templates/customers/[name].[ext]',
          },
          {
            from: `./${sourceRoot}/theme/snippets/**/*.liquid`,
            to: 'snippets/[name].[ext]',
          },
          {
            from: `./${sourceRoot}/theme/sections/**/*.liquid`,
            to: 'sections/[name].[ext]',
          },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: `${chunksBaseName}.css`,
      }),
      new HTMLWebpackPlugin({
        excludeChunks: ['static'],
        filename: `snippets/script-tags.liquid`,
        template: path.resolve(__dirname, 'templates', 'script-tags.html'),
        inject: false,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: false,
          preserveLineBreaks: true,
          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'auto',
        isDevServer,
      }),
      new HTMLWebpackPlugin({
        filename: `snippets/webpack-public-path.liquid`,
        template: path.resolve(
          __dirname,
          'templates',
          'webpack-public-path.html'
        ),
        inject: false,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: false,
          preserveLineBreaks: true,
          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        },
        isDevServer,
      }),
    ],

    optimization: {
      usedExports: true,
      splitChunks: {
        chunks: 'all',
      },
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },
  };
  return webpackConfig;
}

export function getShopifyWebpackConfig(
  options: BuildExecutorSchema,
  isDevServer: boolean
): Configuration {
  return webpackMerge.merge(
    getCommonWebpackPartialConfig(options, isDevServer),
    getShopifyWebpackPartialConfig(options, isDevServer)
  );
}
