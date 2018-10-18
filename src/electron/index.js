// src/electron/electron.js
const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const fs = require('fs');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
let mainPage;
let searchBox;
let searchBoxVisible = false;
function installMenu(mainWindow) {
  const template = [
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteandmatchstyle' },
        { role: 'delete' },
        { role: 'selectall' },
        {
          label: 'Search in File',
          accelerator: 'CmdOrCtrl+F',
          click() {
            searchBoxVisible = !searchBoxVisible;
            if (searchBox) {
              searchBox.send('findInPage', { type: 'searchBox', event:'toggleSearch' });
            }
            if (mainPage) {
              mainPage.send('findInPage', { type: 'searchBox', event: 'toggleSearch', eventData: searchBoxVisible});
            }
          }
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      role: 'window',
      submenu: [
        { role: 'minimize' },
        { role: 'close' }
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click() { require('electron').shell.openExternal('https://electron.atom.io') }
        }
      ]
    }
  ]

  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services', submenu: [] },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    })

    // Edit menu
    template[1].submenu.push(
      { type: 'separator' },
      {
        label: 'Speech',
        submenu: [
          { role: 'startspeaking' },
          { role: 'stopspeaking' }
        ]
      }
    )

    // Window menu
    template[3].submenu = [
      { role: 'close' },
      { role: 'minimize' },
      { role: 'zoom' },
      { type: 'separator' },
      { role: 'front' }
    ]
  }

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

const createWindow = () =>{
    win = new BrowserWindow({
        width: 700,
        height: 500,
        show: false,
    });
    win.loadURL(`file://${__dirname}/index.html`);
    win.setMenuBarVisibility(true);
    installMenu(win);
    win.maximize();
    
    ipcMain.on('pumlInited', (event, arg) => {
        // sub widnow loaded event
        mainPage.send('pumlInited');
      });
      ipcMain.on('pumlclosed', (event, arg) => {
        // sub widnow loaded event
        mainPage.send('pumlclosed');
    });

    win.webContents.openDevTools();
    win.on('closed', () => win = null)
    win.on('ready-to-show', () =>{
        win.show()
        win.focus()
    })
}

app.on('ready', _ => createWindow())
app.on('window-all-closed', _ => process.platform !== 'darwin'&& app.quit())
app.on('activate', _ => win === null&& createWindow())