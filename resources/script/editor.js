const textAlignBtns =
	document.getElementsByClassName('text-align-btns')[0].children;
const leftAlignBtn = textAlignBtns[0];
const centerAlignBtn = textAlignBtns[1];
const rightAlignBtn = textAlignBtns[2];

const content = document.getElementById('content');

const formatText = tag => {
	const selectedText = window.getSelection();
	if (selectedText.isCollapsed) return; // nothing being selected

	// Create a container that will hold the selected text
	const container = document.createElement('div');

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
	}

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
