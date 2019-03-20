const btn = document.querySelector("#btn");

//渲染进程没法直接调用主进程中的模块，但是我们可以通过 electron中的remote模块间接的调用主进程中的模块

const path = require("path");

const BrowserWindow = require("electron").remote.BrowserWindow;

let win = null;

btn.onclick = function() {
  //调用 BrowserWindow打开新窗口
  win = new BrowserWindow({
    width: 400,
    height: 300,
    // frame: false,
    // fullscreen:true
  });
  win.loadURL(path.join("file:", __dirname, "news.html"));

  win.on("closed", () => {
    win = null;
  });
};
