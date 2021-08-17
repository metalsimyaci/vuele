import { app, BrowserWindow } from 'electron'
let win = null

app.on('ready', () => {
    win = new BrowserWindow();
    win.setBounds({ x: 0, y: 0, with: 300, height: 300 })
});