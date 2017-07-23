const electron = require('electron');
const { app, BrowserWindow } = electron;
const { join } = require('path');

if (process.argv.slice(1).some(val => val === '--serve')) {
  require('electron-reload')(__dirname, {
    electron: join(__dirname, '..', 'node_modules', '.bin', 'electron'),
    hardResetMethod: 'exit'
  });
}

let win: any = null;

function createWindow(): void {
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.setMenu(null);

  win.loadURL(`file://${__dirname}/index.html`);

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
