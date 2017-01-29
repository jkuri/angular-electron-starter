import * as path from 'path';
import * as packager from 'electron-packager';
import * as fs from 'fs-extra';
import * as os from 'os';

export function makePackages(): Promise<null> {
  return new Promise((resolve, reject) => {
    let pkgJson: any = fs.readJsonSync(path.resolve(__dirname, '../package.json'));
    let version = pkgJson.dependencies.electron.replace(/[v\^]/, '');

    let options: ElectronPackager.Options = {
      name: pkgJson.name,
      'app-version': pkgJson.version,
      version: version,
      dir: path.resolve(__dirname, '../dist'),
      arch: 'x64',
      platform: os.platform(),
      out: path.resolve(__dirname, '../build')
    };

    packager(options, (err, cb) => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });
}
