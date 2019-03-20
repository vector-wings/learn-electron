/**
 * html5 拖放 api：http://www.runoob.com/html/html5-draganddrop.html
 * 
 * 
 * 
 */

const fs = require('fs'); 
const content = document.querySelector('#content');

content.ondragenter = content.ondragover = content.ondragleave = function() {
	// 阻止默认行为  
	return false;
}

content.ondrop = function(e) {
	// 阻止默认行为
	e.preventDefault();
	console.log(e);
	console.log(e.dataTransfer.files[0]);
	const path = e.dataTransfer.files[0].path;

	fs.readFile(path, 'utf-8', (err, data) => {
		if (err) {
			console.log(err);
			return false;
		} else {
			content.innerHTML = data;
		}
	});
}
