const { app, BrowserWindow } = require('electron');

let window;

const createWindow = () => {
  window = new BrowserWindow({});
  window.on('close', () => {
    window = null;
  });
};

app.on('ready', () => {
  createWindow();
});
