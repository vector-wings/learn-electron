// 让渲染进程给主进程发送消息
const { ipcRenderer } = require('electron');

const sendDom = document.querySelector('#send');

// 渲染进程执行主进程里面的方法
sendDom.onclick = function() {

    // 触发主进程中的方法
    // 渲染进程给主进程广播数据
    ipcRenderer.send('sendM', 'this is renderer');
}

// 渲染进程执行主进程里面的方法
// 主进程给渲染进程返回处理结果
const sendReplyDom = document.querySelector('#sendReply');
sendReplyDom.onclick = function() {
    
    // 渲染进程给主进程广播数据 
    ipcRenderer.send('sendReply', 'this is renderer, call reply');
}

// 接收主进程返回的结果
ipcRenderer.on('reply', function(event, data) {
    console.log(data);
})


// 渲染进程和主进程同步通信
const sendSyncDom = document.querySelector('#sendSync');

// 渲染进程执行主进程里面的方法
sendSyncDom.onclick = function() {

    // 触发主进程中的方法
    // 渲染进程给主进程广播数据
    const msg = ipcRenderer.sendSync('sendSync', 'this is renderer sync');
    console.log(msg);
}


