import { BuilderContext } from '@angular-devkit/architect';
import { ExecutorContext } from '@nrwl/devkit';
import * as themekit from '@shopify/themekit';
import * as fs from 'fs';
import { resolve } from 'path';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { uniq } from '../output-dir-utils';

export type ThemeKitCommand = 'version' | 'watch' | 'deploy' | 'open';

export type ThemeKitOptions = {
  cwd?: string;
  logLevel?: string;
};

export type ThemeKitFlags = {
  password?: string;
  store?: string;
  themeid?: string;
  env?: string;
  noIgnore?: string;
  allowLive?: boolean;
  ignoredFile?: string;
  ignoredFiles?: string[];
  notify?: string;
  nodelete?: boolean;
  files?: string[];
};

export type ThemekitRunResult = { success: boolean };

export function runThemekitCommandObservable(
  context: BuilderContext,
  command: ThemeKitCommand,
  flagObj: ThemeKitFlags = {},
  options?: ThemeKitOptions
): Observable<ThemekitRunResult> {
  return from(themekit.command(command, flagObj, options)).pipe(
    map(() => ({ success: true })),
    catchError((err) => {
      context.logger.error(
        `❌ Failed to execute themekit '${command}'${
          err && typeof err === 'string' ? `. Error: ${err}` : ''
        }`,
        err && err instanceof Object ? err : undefined
      );
      return throwError(err);
    })
  );
}

export function runThemekitCommand(
  command: ThemeKitCommand,
  flagObj: ThemeKitFlags = {},
  options?: ThemeKitOptions
): Promise<void> {
  return themekit.command(command, flagObj, options);
}

export function runThemekitWatch(
  context: BuilderContext,
  flagObj?: ThemeKitFlags,
  options?: ThemeKitOptions
): Observable<ThemekitRunResult> {
  context.logger.info('Themekit Watch runned!');
  return new Observable((subscriber) => {
    const notifyFile = resolve(
      context.workspaceRoot,
      `tmp/${uniq(context.target.project)}.themekit.notify`
    );

    fs.openSync(notifyFile, 'w');
    themekit.command('watch', { ...flagObj, notify: notifyFile }, options);
    fs.watch(notifyFile, (curr, prev) => {
      context.logger.info(`Notify file changed`);
      subscriber.next({ success: true });
    });
    subscriber.next({ success: true });
    subscriber.add(() => {
      context.logger.debug(
        'Teardown executed (not working when Ctrl + C is hit)'
      );
    });
  });
}
