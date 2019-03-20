// 主进程

// 引入 electron 模块
const electron = require('electron');

const path = require('path');

// 创建 electron 引用
const app = electron.app;

// 创建 electron BroswerWindow 的应用
const BrowserWindow = electron.BrowserWindow;

// 变量 保存对应窗口的引用
let mainWindow = null;

app.on('ready', () => {
    // 创建 BroswerWindow 的实例 赋值给 win 打开窗口

    // 软件默认打开的宽和高
    mainWindow = new BrowserWindow({width: 800, height: 600});

    // 把 index.html 加载到窗口
    // 使用相对路径
    mainWindow.loadFile('index.html');

    // 打开调试工具
    mainWindow.webContents.openDevTools();

    // 加载 index.html 的第二种方式
    // 使用绝对路径
    mainWindow.loadURL(path.join('file:', __dirname, 'index.html'));


    // 监听窗口关闭时间
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
})
