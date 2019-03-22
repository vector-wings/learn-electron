const { dialog } = require('electron').remote;

const errorBtn = document.querySelector('#error');
const messageBoxBtn = document.querySelector('#messageBox');
const openDialogBtn = document.querySelector('#openDialog');
const saveDialogBtn = document.querySelector('#saveDialog');

errorBtn.onclick = function() {
    dialog.showErrorBox('提示', '出错啦');
}

messageBoxBtn.onclick = function() {
    dialog.showMessageBox({
        type: 'info',
        title: '提示信息',
        message: '内容',
        buttons: [
            'ok',
            'cancel'
        ]
    }, function(index) {
        console.log(index);
    });
}

openDialogBtn.onclick = function() {
    dialog.showOpenDialog({
        properties: ['openDirectory', 'openFile']
    }, function(path) {
        console.log(path);
    });
}

saveDialogBtn.onclick = function() {
    dialog.showSaveDialog({
        title: 'save file',
        defaultPath: '/Users/Vector/',
        filters: [
            { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
            { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
            { name: 'Custom File Type', extensions: ['as'] },
            { name: 'All Files', extensions: ['*'] }
        ]
    }, function(path) {
        console.log(path);
        // 不会真正的保存 之后返回保存的路径 
        // 真正的保存 需要通过 node.js 保存
    });
}