const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const fs = require("fs");
const path = require("path");
// const sharp = require("sharp");
const Jimp = require("jimp");
const PDFDocument = require("pdfkit");
const uniqid = require("uniqid");
const generatePDF = require("./modules/generatePDF")

// Hot reload!
require("electron-reload")(__dirname);

const createWindow = () => {
  let win = new BrowserWindow({
    // fullscreen: true,
    title: 'FDR Dog Factfile Generator',
    backgroundColor: '#52bbb4',
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile("./index.html");

  ipcMain.on("choose image", (e, arg) => {
    const id = uniqid();
    const fpath = dialog.showOpenDialogSync(win, {
      title: "Choose an image....",
      filters: [
        {
          name: "Images",
          extensions: ["jpg", "png"]
        }
      ]
    });
    if (!fs.existsSync(path.join(__dirname, "/.cache/"))) {
      fs.mkdirSync("./.cache");
    }

    Jimp.read(fpath[0], (err, img) => {
      if (err) throw err;
      img
        .cover(350, 350)
        .quality(100)
        .normalize()
        .color([
          { apply: "blue", params: [25] },
          { apply: "red", params: [10] }
        ])
        .write(`.cache/${id}.jpg`, () => {
          win.webContents.send(
            "filepath",
            path.join(__dirname, `.cache/${id}.jpg`)
          );
        });
    });
  });

  ipcMain.on("generate", (e, arg)=>{
    let filePath = dialog.showSaveDialogSync(win, {
      title: 'Save PDF...',
      filters: [
        {
          name: "PDF Documents",
          extensions: ["pdf"]
        }
      ]
    })
    if(!filePath.match(/\.pdf$/g)){
      filePath += '.pdf'
    }
    generatePDF(arg.data, filePath)
  })

  ipcMain.on("test", (e, arg) => {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream("test.pdf"));
    doc.text(arg);
    doc.end();
    // win.webContents.send("something");
  });
};

app.on("ready", createWindow);
app.on("will-quit", e => {
  e.preventDefault();
  if (fs.existsSync(".cache")) {
    const cacheDir = fs.readdirSync(".cache");
    cacheDir.forEach(element => {
      fs.unlinkSync(`.cache/${element}`);
    });
  }
  app.quit()
});
