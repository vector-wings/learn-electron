const { shell } = require('electron');
const aDom = document.querySelector('#aDom');

aDom.onclick = function(e) {
    
    // 阻止模式行为
    e.preventDefault();
    
    const href = this.getAttribute('href');

    // shell 模块打开外部浏览器
    shell.openExternal(href);
}