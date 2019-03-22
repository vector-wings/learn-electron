// 在主进程实现自定义菜单
// 创建菜单

// 第一种写法
// const electron = require('electron');
// const menu = electron.Menu;

// ES6 写法
const { Menu, shell, BrowserWindow } = require('electron');

function openWebView(url) {
    console.log("url:", url);
    let win = BrowserWindow.getFocusedWindow();
    win.webContents.send('openWebView', url);
}

function openWeb(url) {
    shell.openExternal(url);
}

// 定义 menu 模板
const template = [
    {
        label: '加载网页',
        submenu: [
            {
                label: '优酷',
                click: function() {
                    openWebView('https://youku.com/');
                }
            },
            {
                label: '爱奇艺',
                click: function() {
                    openWebView('https://www.iqiyi.com/');
                }
            }
        ]
    },
    {
        label: '帮助',
        submenu: [
            {
                label: "关于我们",
                click: function() {
                    openWeb('http://www.baidu.com')
                }
            },
            {
                type: 'separator' // 分隔符
            },
            {
                label: "联系我们",
                click: function() {
                    openWeb('http://www.vectorwings.top')
                }
            }
        ]
    }
];

// 添加 menu
const m = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(m);