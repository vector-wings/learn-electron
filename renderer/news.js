
// 页面传值方式一
// 获取 localStorage 的数据
// let aid = localStorage.getItem('aid');


// 页面传值方式二
const { ipcRenderer } = require('electron');
const BrowserWindow = require('electron').remote.BrowserWindow;

ipcRenderer.on('toNews', function(event, aid, winId) {
    console.log(aid, winId);
    // winId 第一个窗口的 id
    let firstWin = BrowserWindow.fromId(winId);
    firstWin.webContents.send('toIndex', 'this is news');
})
