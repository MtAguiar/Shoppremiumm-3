import * as browserSync from 'browser-sync';
import {
  BrowserSyncInstance,
  Options as BrowserSyncOptions,
} from 'browser-sync';

import { getSSLKeyPath, getSSLCertPath } from './ssl/server-ssl';

export interface LocalDevelopmentServerOptions {
  target: string;
  themeId: string;
  address: string;
  port: number;
  uiPort: number;
  openBrowser: boolean;
}

export class LocalDevelopmentServer {
  target: string;
  themeId: string;
  port: number;
  address: string;
  uiPort: number;
  proxyTarget: string;
  browserSyncInstance: BrowserSyncInstance;
  browserSyncServer: BrowserSyncInstance;
  openBrowser: boolean;

  constructor(options: LocalDevelopmentServerOptions) {
    const { target, themeId, port, address, uiPort, openBrowser } = options;

    this.browserSyncInstance = browserSync.create();
    this.target = `https://${target}`;
    this.themeId = themeId;
    this.port = port;
    this.address = address;
    this.uiPort = uiPort;
    this.proxyTarget =
      this.target +
      (this.themeId === 'live' ? '' : `?preview_theme_id=${this.themeId}`);
    this.openBrowser = openBrowser;
  }

  start() {
    const bsConfig: BrowserSyncOptions = {
      port: this.port,
      proxy: {
        target: this.proxyTarget,
        middleware: (req, res, next) => {
          // Shopify sites with redirection enabled for custom domains force redirection
          // to that domain. `?_fd=0` prevents that forwarding.
          // ?pb=0 hides the Shopify preview bar
          const prefix = req.url.indexOf('?') > -1 ? '&' : '?';
          const queryStringComponents = ['_fd=0&pb=0'];

          req.url += prefix + queryStringComponents.join('&');
          next();
        },
      },
      snippetOptions: {
        rule: {
          match: /<\/body>/i,
          fn(snippet, match) {
            return snippet + match;
          },
        },
      },
      https: { key: getSSLKeyPath(), cert: getSSLCertPath() },
      logLevel: 'silent',
      socket: {
        domain: `https://${this.address}:${this.port}`,
      },
      ui: {
        port: this.uiPort,
      },
      open: this.openBrowser,
    };

    return new Promise((resolve) => {
      this.browserSyncServer = this.browserSyncInstance.init(bsConfig, resolve);
    });
  }
}
