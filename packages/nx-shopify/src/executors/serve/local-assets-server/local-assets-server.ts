import * as chalk from 'chalk';
import { createHash } from 'crypto';
import * as figures from 'figures';
import { createServer } from 'https';
import * as ora from 'ora';
import * as webpack from 'webpack';
import { Compiler as WebpackCompiler, Stats as WebpackStats } from 'webpack';
import { ThemekitEnvironmentConfig } from '../../../utils/themekit';
import { isHotUpdateFile } from '../../../webpack/utils';
import { LocalDevelopmentServer } from '../local-development-server';
import { ShopifySyncClient } from './shopify-sync/shopify-sync-client';
import {
  getSslKeyCert,
  SslKeyCert,
} from '../local-development-server/ssl/server-ssl';
import { ServeExecutorSchema } from '../schema';
import { AssetsServerApp } from './assets-server-app';

const spinner = ora(chalk.magenta(' Compiling...'));
export class LocalAssetServer {
  assetHashes;
  address: string;
  options;
  port: number;
  webpackCompiler: WebpackCompiler;
  assetsServerApp: AssetsServerApp;
  shopifySyncClient: ShopifySyncClient;
  ssl: SslKeyCert;
  httpsServer;
  firstSync: boolean;
  devServer: LocalDevelopmentServer;
  themekitEnvConfig: ThemekitEnvironmentConfig;

  constructor(options) {
    const { devServer, address, port, themekitEnvConfig } = options;

    options.webpackConfig.output.publicPath = `https://${address}:${port}/`;
    this.assetHashes = {};
    this.address = address;
    this.options = options;
    this.port = options.port;
    this.themekitEnvConfig = themekitEnvConfig;
    this.webpackCompiler = webpack(options.webpackConfig);
    this.assetsServerApp = new AssetsServerApp(this.webpackCompiler);
    this.shopifySyncClient = new ShopifySyncClient();
    this.shopifySyncClient.hooks.afterSync.tap(
      'HotMiddleWare',
      this.onAfterSync.bind(this)
    );
    this.firstSync = true;
    this.devServer = devServer;
  }

  start(options: ServeExecutorSchema) {
    this.webpackCompiler.hooks.compile.tap(
      'CLI',
      this.onCompilerCompile.bind(this)
    );
    this.webpackCompiler.hooks.done.tap('CLI', this.onCompilerDone.bind(this));
    this.shopifySyncClient.hooks.beforeSync.tapPromise(
      'CLI',
      this.onClientBeforeSync(options).bind(this)
    );
    this.shopifySyncClient.hooks.syncSkipped.tap(
      'CLI',
      this.onClientSyncSkipped(options).bind(this)
    );
    this.shopifySyncClient.hooks.sync.tap('CLI', this.onClientSync.bind(this));
    this.shopifySyncClient.hooks.syncDone.tap(
      'CLI',
      this.onClientSyncDone.bind(this)
    );
    this.shopifySyncClient.hooks.afterSync.tap(
      'CLI',
      this.onClientAfterSync.bind(this)
    );

    this.webpackCompiler.hooks.done.tap(
      'DevServer',
      this.onCompileDone.bind(this)
    );
    this.ssl = getSslKeyCert();
    this.httpsServer = createServer(
      this.ssl,
      this.assetsServerApp.buildServer()
    );

    this.httpsServer.listen(this.port);
  }

  set skipDeploy(value: boolean) {
    this.shopifySyncClient.skipNextSync = value;
  }

  private onCompileDone(stats: WebpackStats) {
    const files = this._getAssetsToUpload(stats);
    return this.shopifySyncClient.syncChangedFiles(files, stats);
  }

  private onAfterSync(files: string[]) {
    this.assetsServerApp.webpackHotMiddleware.publish({
      action: 'shopify_upload_finished',
      force: files.length > 0,
    });
  }

  private isChunk(key, chunks) {
    return (
      chunks.filter((chunk) => {
        return key.indexOf(chunk.id) > -1 && !this.isLiquidStyle(key);
      }).length > 0
    );
  }

  private isLiquidStyle(key) {
    return key.indexOf('styleLiquid.scss.liquid') > -1;
  }

  private hasAssetChanged(key, asset) {
    const oldHash = this.assetHashes[key];
    const newHash = this._updateAssetHash(key, asset);

    return oldHash !== newHash;
  }

  private _getAssetsToUpload(stats: WebpackStats) {
    const assets: [string, any][] = Object.entries(stats.compilation.assets);
    const chunks = stats.compilation.chunks;
    return (
      assets
        .filter(([key, asset]) => {
          return (
            asset.emitted &&
            !this.isChunk(key, chunks) &&
            !isHotUpdateFile(key) &&
            this.hasAssetChanged(key, asset)
          );
        })
        /* eslint-disable-next-line no-unused-vars */
        .map(([_key, asset]) => {
          return asset.existsAt.replace(this.webpackCompiler.outputPath, '');
        })
    );
  }

  private _updateAssetHash(key, asset) {
    const rawSource = asset.source();
    const source = Array.isArray(rawSource) ? rawSource.join('\n') : rawSource;
    const hash = createHash('sha256').update(source).digest('hex');

    return (this.assetHashes[key] = hash);
  }

  private onCompilerCompile() {
    if (process.env.NODE_ENV !== 'test') {
      //
    }
    spinner.start();
  }

  private onCompilerDone(stats: WebpackStats) {
    const statsJson = stats.toJson({}, true);

    if (statsJson.errors.length) {
      console.log(chalk.red('Failed to compile.\n'));

      statsJson.errors.forEach((message) => {
        console.log(`${message}\n`);
      });
    }

    if (statsJson.warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.\n'));

      statsJson.warnings.forEach((message) => {
        console.log(`${message}\n`);
      });
    }

    if (!statsJson.errors.length && !statsJson.warnings.length) {
      spinner.succeed();
      console.log(
        `${chalk.green(figures.tick)}  Compiled successfully in ${
          statsJson.time / 1000
        }s!`
      );
    }
  }

  onClientBeforeSync(options: ServeExecutorSchema) {
    return async (files: string[]) => {
      const themeID = 'getThemeIdValue()';

      if (this.firstSync && options.skipFirstDeploy) {
        this.skipDeploy = true;

        return;
      }

      // if (continueIfPublishedTheme === null) {
      //   try {
      //     continueIfPublishedTheme = await promptContinueIfPublishedTheme(
      //       themeID
      //     );
      //   } catch (error) {
      //     console.log(`\n${chalk.red(error)}\n`);
      //   }
      // }

      // if (!continueIfPublishedTheme) {
      //   process.exit(0);
      // }

      // if (skipSettingsData === null) {
      //   skipSettingsData = await promptSkipSettingsData(files);
      // }

      // if (skipSettingsData) {
      //   this.files = files.filter(
      //     (file) => !file.endsWith('settings_data.json')
      //   );
      // }
    };
  }

  onClientSyncSkipped(options: ServeExecutorSchema) {
    return () => {
      if (!(this.firstSync && options.skipFirstDeploy)) return;
      console.log(
        `\n${chalk.blue(
          figures.info
        )}  Skipping first deployment because --skipFirstDeploy flag`
      );
    };
  }

  onClientSync() {
    // console.log('client sync')
  }

  onClientSyncDone() {
    //process.stdout.write(consoleControl.previousLine(4));
    //process.stdout.write(consoleControl.eraseData());

    console.log(`\n${chalk.green(figures.tick)}  Files uploaded successfully!`);
  }

  async onClientAfterSync() {
    if (this.firstSync) {
      this.firstSync = false;
      await this.devServer.start();
    }

    const urls = this.devServer.browserSyncServer.getOption('urls');

    console.log(
      `${chalk.yellow(
        figures.star
      )}  You are editing files in theme ${chalk.green(
        this.themekitEnvConfig.themeId
      )} on the following store:\n`
    );

    const { target, themeId } = this.devServer;

    const previewUrl = `${target}?preview_theme_id=${themeId}`;

    console.log(`      ${chalk.cyan(previewUrl)}`);

    console.log();
    console.log(`   Your theme can be previewed at:\n`);
    console.log(
      `      ${chalk.cyan(urls.get('local'))} ${chalk.grey('(Local)')}`
    );

    if (this.devServer.address !== 'localhost') {
      console.log(
        `      ${chalk.cyan(urls.get('external'))} ${chalk.grey('(External)')}`
      );
    }
    console.log();
    console.log(`   Assets are being served from:\n`);

    console.log(
      `      ${chalk.cyan(`https://localhost:${this.port}`)} ${chalk.grey(
        '(Local)'
      )}`
    );

    if (this.address !== 'localhost') {
      console.log(
        `      ${chalk.cyan(
          `https://${this.address}:${this.port}`
        )} ${chalk.grey('(External)')}`
      );
    }

    console.log();
    console.log(`   The Browsersync control panel is available at:\n`);

    if (this.devServer.address !== 'localhost') {
      console.log(
        `      ${chalk.cyan(urls.get('ui-external'))} ${chalk.grey(
          '(External)'
        )}`
      );
    }

    console.log(chalk.magenta('\nWatching for changes...'));
  }
}