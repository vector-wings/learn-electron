//主进程

// 引入electron模块
const electron = require("electron");

// nodejs中的path模块
const path = require("path");

// 创建electron引用
// 控制应用生命周期的模块
const app = electron.app;

// 创建electron BrowserWindow的引用
// 窗口相关的模块
const BrowserWindow = electron.BrowserWindow;

// 变量 保存对应用窗口的引用
let mainWindow = null;

function createWindow() {
  //创建BrowserWindow的实例 赋值给mainWindow打开窗口
  //软件默认打开的宽度高度 {width:400,height:400}
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadURL(path.join("file:", __dirname, "index.html"));

  //开启渲染进程中的调试模式
  mainWindow.webContents.openDevTools();

  console.log(path.join("file:", __dirname, "index.html"));

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

// 当所有的窗口被关闭后退出应用   Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q

  // 对于OS X系统，应用和相应的菜单栏会一直激活直到用户通过Cmd + Q显式退出
  if (process.platform !== "darwin") {
    app.quit();
  }
});

//macos
app.on("activate", () => {
  // 对于OS X系统，当dock图标被点击后会重新创建一个app窗口，并且不会有其他
  if (mainWindow === null) {
    createWindow();
  }
});