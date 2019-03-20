const fs = require('fs');
window.onload = function() {
    const btn = this.document.querySelector('#btn');
    const textarea = this.document.querySelector('#textarea');

    btn.onclick = function() {
        /**
         * 获取本地文件
         * 赋值给 textarea
         */
        fs.readFile('package.json', (err, data) => {
            textarea.innerHTML = data;
        })
    }
}