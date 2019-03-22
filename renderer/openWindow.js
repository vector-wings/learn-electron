const { ipcRenderer } = require('electron');
const btn = document.querySelector('#btn');

btn.onclick = function() {
    // 通过主进程打开新窗口
    // ipcRenderer.send('openWindow');

    // 传值方式1
    // 通过 localStorage 实现页面传值
    // let aid = 123;
    // localStorage.setItem('aid', aid);

    // 传值方式2
    // 通过主进程打开新窗口并传值
    let aid = 456;
    ipcRenderer.send('openWindow', aid);
}


// 接收 news 传过来的数据
ipcRenderer.on('toIndex', function(event, data) {
    console.log(data)
})