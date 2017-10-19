const { app, BrowserWindow } = require('electron');

let window;

const createWindow = () => {
  window = new BrowserWindow({});

  window.loadURL(`file://${__dirname}/index.html`);

  window.once('ready-to-show', () => {
    newWindow.show();
  });

  window.on('close', () => {
    window = null;
  });
};

app.on('ready', () => {
  createWindow();
});
