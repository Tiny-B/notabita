const textAlignBtns =
	document.getElementsByClassName('text-align-btns')[0].children;
const leftAlignBtn = textAlignBtns[0];
const centerAlignBtn = textAlignBtns[1];
const rightAlignBtn = textAlignBtns[2];

const content = document.getElementById('content');

let selectedText = '';

// Text selection
const selectText = () => {
	const start = content.selectionStart;
	const end = content.selectionEnd;

	selectedText = content.textContent.slice(start, end);
	console.log(selectedText);
};

content.addEventListener('mouseup', selectText);

// Aligning text
const alignText = (tag = '') => {
	if (tag == '') {
	} else if (tag == 'left') {
		content.style.textAlign = 'left';
	} else if (tag == 'center') {
		content.style.textAlign = 'center';
	} else if (tag == 'right') {
		content.style.textAlign = 'right';
	}
};

leftAlignBtn.onclick = function () {
	alignText('left');
};
centerAlignBtn.onclick = function () {
	alignText('center');
};
rightAlignBtn.onclick = function () {
	alignText('right');
};
