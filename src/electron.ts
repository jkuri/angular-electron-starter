const electron = require('electron');
const { app, BrowserWindow } = electron;

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
