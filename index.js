const {app, BrowserWindow} = require('electron')


let window;
const createWindow = () => {
    window = new BrowserWindow({height: 720,width:1080});
        // and load the index.html of the app.
    window.loadFile('index.html')
    window.webContents.on('did-finish-load',()=>{
      window.webContents.send('finished','Termino de cargar')
    })
    // Open the DevTools.
    window.webContents.openDevTools()
    
    // Emitted when the window is closed.
    window.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        window = null
    })
      console.log("Window Created")

}


app.on("ready",createWindow);

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })

