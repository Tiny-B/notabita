const textAlignBtns =
	document.getElementsByClassName('text-align-btns')[0].children;
const leftAlignBtn = textAlignBtns[0];
const centerAlignBtn = textAlignBtns[1];
const rightAlignBtn = textAlignBtns[2];

console.log('textAlignBtns:', textAlignBtns);
console.log('leftAlignBtn:', leftAlignBtn);

const fontStyleBtns =
	document.getElementsByClassName('font-style-btns')[0].children;
const boldBtn = fontStyleBtns[0];
const italicBtn = fontStyleBtns[1];
const underlineBtn = fontStyleBtns[2];

const content = document.getElementById('content');

const formatText = tag => {
	const selectedText = window.getSelection();
	if (selectedText.isCollapsed) return; // nothing being selected
	console.log('selectedText:', selectedText);

	// Create a container that will hold the selected text
	const container = document.createElement('div');
	//container.style.display = 'inline-block';

	// Determine what kind of formatting we need
	switch (tag) {
		case 'left':
			container.style.textAlign = tag;
			break;
		case 'center':
			container.style.textAlign = tag;
			break;
		case 'right':
			container.style.textAlign = tag;
			break;
		case 'bold':
			container.style.fontWeight = 'bolder';
			break;
		case 'italic':
			container.style.fontStyle = 'italic';
			break;
		case 'underline':
			container.style.textDecoration = 'underline';
			break;
	}
	console.log('tag:', tag);
	console.log('container:', container);

	// Pull the selected contents out of the DOM
	const range = selectedText.getRangeAt(0);

	// Check if text selected is text we allow to be edited
	const is_editable_text = content.contains(range.commonAncestorContainer);
	if (!is_editable_text) {
		//console.error('Selection is not within the content window');
		return;
	}

	container.appendChild(range.extractContents());

	// Insert the new container back where the range used to be
	range.insertNode(container);

	// reselect the text
	selectedText.removeAllRanges();
	const newRange = document.createRange();
	newRange.selectNodeContents(container);
	selectedText.addRange(newRange);
};

leftAlignBtn.onclick = function () {
	formatText('left');
};
centerAlignBtn.onclick = function () {
	formatText('center');
};
rightAlignBtn.onclick = function () {
	formatText('right');
};

boldBtn.onclick = function () {
	formatText('bold');
};
italicBtn.onclick = function () {
	formatText('italic');
};
underlineBtn.onclick = function () {
	formatText('underline');
};
