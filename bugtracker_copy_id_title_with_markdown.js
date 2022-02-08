javascript: (function() {
    let createCopyHandler = function(msg) {
        return function(event) {
            event.clipboardData.setData('text', msg);
            event.preventDefault();
        };
    };

    let project_title = document.getElementsByClassName('title')[0].firstElementChild.innerText;
    if (project_title === 'Safe Access') {
        project_title = 'SA';
    }

    let list = document.getElementsByClassName('content');
    if (list[0].innerText && list[2].innerText) {
        let msg = '[{1}#{2}]({0}) - {3}';
        let url_link = window.location.href;
        msg = msg.replace('{0}', url_link);
        msg = msg.replace('{1}', project_title);
        msg = msg.replace('{2}', list[0].innerText);
        msg = msg.replace('{3}', list[2].innerText);

        let handler = createCopyHandler(msg);
        document.addEventListener('copy', handler);
        document.execCommand('copy');
        document.removeEventListener('copy', handler);
     }
}())
