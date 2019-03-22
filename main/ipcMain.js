// 主进程处理渲染进程广播的数据
const { ipcMain, BrowserWindow } = require("electron");
const path = require("path");

// 接收广播的数据
ipcMain.on("sendM", function(event, data) {
  console.log(event);
  console.log(data);
});

// 接收广播并返回处理结果
ipcMain.on("sendReply", function(event, data) {
  console.log(event);
  console.log(data);

  // 主进程给渲染进程广播数据
  event.sender.send("reply", "ok over");
});

// 接收同步广播
ipcMain.on("sendSync", function(event, data) {
  console.log(data);

  // 给渲染进程返回数据
  event.returnValue = "this is sync reply data";
});


let win = null;

// 接收到广播
ipcMain.on("openWindow", function(event, aid) {
  // 获取当前窗口对象
  let winId = BrowserWindow.getFocusedWindow().id;
  console.log(winId);
  
  //调用 BrowserWindow打开新窗口
  win = new BrowserWindow({
    width: 400,
    height: 300
    // frame: false,
    // fullscreen:true
  });
  win.loadURL(path.join("file:", __dirname, "../news.html"));

  // 注意：想要在哪个窗口打开调试模式
  // 都需要加入下面这个
  win.webContents.openDevTools();

  // 通过 win.webContents.send 把当前数据广播给 news
  win.webContents.on('did-finish-load', function() {
      win.webContents.send('toNews', aid, winId);
  })

  win.on("closed", () => {
    win = null;
  });
});
