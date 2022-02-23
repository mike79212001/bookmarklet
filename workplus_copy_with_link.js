javascript: (function() {
	let textToClipBoard = function(text) {
		let mediaType = 'text/html';
		var wrapData = [new ClipboardItem({ [mediaType]: new Blob([text], { type: mediaType }) })];
		navigator.clipboard.write(wrapData);
	};
	let bugId = document.getElementsByClassName('breadcrumb-item')[3].innerText;
	let bugTitle = document.getElementsByClassName('issue-header')[0].getElementsByClassName('title')[0].innerText;
	let url_link = window.location.href;
	let project_title = document.getElementsByClassName('location-name')[0].innerText;
	if (project_title === 'Safe Access') {
		project_title = 'SA';
	}
	let text = '<a href="{0}">{1}{2}</a> - {3}';
	text = text.replace('{0}', url_link);
	text = text.replace('{1}', project_title);
	text = text.replace('{2}', bugId);
	text = text.replace('{3}', bugTitle);
	textToClipBoard(text);
}())
