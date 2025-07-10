const editor = document.querySelector('#editor');
let cursorPos = 0;

editor.addEventListener('keydown', (e) => {
    const { key, ctrlKey, metaKey, shiftKey } = e;
    const isCharInput = (key.length === 1 || key === 'Enter') && !ctrlKey && !metaKey;
    const selection = window.getSelection();

    if (isCharInput) {
        e.preventDefault();
        const char = key === 'Enter' ? '\n' : key;
        cursorPos = getCursorPosition();

        const htmlOffset = [...editor.children]
            .slice(0, cursorPos)
            .reduce((acc, el) => acc + el.outerHTML.length, 0);

        editor.innerHTML = insertString(editor.innerHTML, htmlOffset, wrapChar(char));
        updateCursorPos(++cursorPos);
    }

    else if (key === 'Backspace' || key === 'Delete') {
        e.preventDefault();
        if (!selection.isCollapsed) {
            cursorPos = modifySelectionText(removeNode);
        } else if ((key === 'Backspace' && cursorPos > 0) || (key === 'Delete' && cursorPos < editor.children.length)) {
            if (key === 'Backspace') updateCursorPos(--cursorPos);
            else updateCursorPos(cursorPos);
            cursorPos = modifySelectionText(removeNode);
        }
        updateCursorPos(cursorPos);
    }

    else if (key === 'b' && ctrlKey) {
        e.preventDefault();
        if (!selection.isCollapsed) {
            modifySelectionText(node => node.classList.toggle('c'));
        } else {
            const char = editor.children[cursorPos];
            if (char) char.classList.toggle('c');
        }
    }
});

function getCursorPosition() {
    const sel = window.getSelection();
    if (!sel.rangeCount) return 0;
    const range = sel.getRangeAt(0);
    if (!editor.contains(range.commonAncestorContainer)) return 0;

    const preRange = range.cloneRange();
    preRange.selectNodeContents(editor);
    preRange.setEnd(range.endContainer, range.endOffset);
    return preRange.toString().length;
}

function updateCursorPos(pos) {
    const sel = window.getSelection();
    const range = document.createRange();
    const target = editor.childNodes[pos];
    range.setStart(target || editor, target ? 0 : pos);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
}

function wrapChar(char) {return `<span class="char">${char}</span>`;}
function insertString (str, i, val) {return str.slice(0, i) + val + str.slice(i);}
function removeNode(node) {return node.remove();}

function modifySelectionText(callback, selection = window.getSelection()) {
    if (!selection.rangeCount) return cursorPos;

    const range = selection.getRangeAt(0);
    const nodes = [...editor.children];
    const getParent = node => node.nodeType === 3 ? node.parentNode : node;

    const start = getParent(range.startContainer);
    const end = getParent(range.endContainer);
    const startPos = nodes.indexOf(start);
    const endPos = nodes.indexOf(end);

    if (startPos === -1 || endPos === -1) return cursorPos;

    if (range.collapsed) {
        if (nodes[startPos]) callback(nodes[startPos], startPos);
        return Math.max(0, startPos);
    }

    const [from, to] = [Math.min(startPos, endPos), Math.max(startPos, endPos)];
    for (let i = to; i >= from; i--) nodes[i] && callback(nodes[i], i);
    return from;
}

// Optional helpers
function htmlToText() { return [...editor.children].map(n => n.textContent).join('');}
function textToHtml(text) {return [...text].map(wrapChar).join('');}
function getCellPosition (cell) {return [...editor.children].indexOf(cell);}
