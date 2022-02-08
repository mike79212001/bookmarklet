javascript: (function() {
    let createCopyHandler = function(msg) {
        return function(event) {
            event.clipboardData.setData('text/html', msg);
            event.preventDefault();
        };
    };

    let projectTitle = document.getElementsByClassName('outline')[0].innerText;
    if (projectTitle === 'Safe Access') {
        projectTitle = 'SA';
    }

    let tdList = document.getElementsByClassName('table-main-list')[0].firstElementChild.children;

    let result = '';
    for (let tdItem of tdList) {
        let className = tdItem.firstElementChild.className;
        if (!className.startsWith('line')) {
            continue;
        }

        let bugId = tdItem.children[1].innerText;
        let bugTag = tdItem.children[2].firstElementChild.lastElementChild.firstElementChild;
        let bugTitle = bugTag.innerText;
        let bugLink = bugTag.getAttribute('href');

        let msg = '<tr><td><a href="{0}">{1}#{2}</a></td><td>{3}</td></tr>';
        msg = msg.replace('{0}', bugLink);
        msg = msg.replace('{1}', projectTitle);
        msg = msg.replace('{2}', bugId);
        msg = msg.replace('{3}', bugTitle);

        result += msg;
    }

    let handler = createCopyHandler(result);
    document.addEventListener('copy', handler);
    document.execCommand('copy');
    document.removeEventListener('copy', handler);
}())
