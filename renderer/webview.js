// const { ipcRenderer } = require('electron');

const myWebViewDom = document.querySelector("#myWebView");

ipcRenderer.on('openWebView', function(event, data) {

    console.log(data);
    
    // data就是链接地址
    myWebViewDom.src = data;
})