// 在渲染进程中实现顶部自定义菜单
// 创建菜单

// 第一种写法
// const electron = require('electron');
// const menu = electron.Menu;

// ES6 写法
const remote = require('electron').remote;
const Menu = remote.Menu;

// 定义 menu 模板
const template = [
    {
        label: '文件',
        submenu: [
            {
                label: '新建文件',
                accelerator: 'cmd + n',
                click: function() {
                    console.log('cmd + n');
                }
            },
            {
                label: '新建窗口',
                accelerator: 'cmd + w',
                click: function() {
                    console.log('new window');
                }
            }
        ]
    },
    {
        label: '编辑',
        submenu: [
            {
                // 在 macOS 下使用 role 的时候 必须指定 accelerator
                // 否则菜单不生效
                role: 'copy',
                label: '复制',  
                accelerator: 'cmd + c', 
            },
            {
                role: 'paste',
                label: '粘贴',
                accelerator: 'cmd + v', 
            },
            {
                role: 'cut',
                label: '剪贴',
                accelerator: 'cmd + x', 
            }
        ]
    }
];

// 添加 menu
const m = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(m);

// contextmenu: 右键事件
window.addEventListener('contextmenu', function(e){

    //阻止当前窗口默认事件
    e.preventDefault();

    //在当前窗口点击右键的时候弹出  定义的菜单模板
    m.popup({window: remote.getCurrentWindow()})
},false)