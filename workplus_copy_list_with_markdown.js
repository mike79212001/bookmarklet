javascript: (function() {
	let textToClipBoard = function(text) {
		let mediaType = 'text/plain';
		var wrapData = [new ClipboardItem({ [mediaType]: new Blob([text], { type: mediaType }) })];
		navigator.clipboard.write(wrapData);
	};

	let projectTitle = document.getElementsByClassName('location-name')[0].innerText;
	if (projectTitle === 'Safe Access') {
		projectTitle = 'SA';
	}

	let result = '';
	let list = document.getElementsByClassName('issue-list')[0].getElementsByClassName('v-table-tbody')[0].children;
	for (let item of list) {
		let bugId = item.children[0].firstChild.firstChild.innerHTML;
		let bugTitle = item.children[1].getElementsByClassName('title')[0].innerHTML;
		let bugLink = location.origin + item.children[1].getElementsByClassName('link-item')[0].getAttribute('href');

		let msg = '- [{1}{2}]({0}) - {3}\n';
		msg = msg.replace('{0}', bugLink);
		msg = msg.replace('{1}', projectTitle);
		msg = msg.replace('{2}', bugId);
		msg = msg.replace('{3}', bugTitle);
		result += msg;
	}

	textToClipBoard(result);
}())
