function optionsApply() {
	if (localStorage.WriteSpaceEditorWidth) {
		document.querySelector("#main").style.width = localStorage.WriteSpaceEditorWidth;
	};
	if (localStorage.WriteSpaceBackgroundColor) {
		document.querySelector("html").style.background = localStorage.WriteSpaceBackgroundColor;
		document.querySelector("#editor").style.background = localStorage.WriteSpaceBackgroundColor;
	};
	if (localStorage.WriteSpaceFontColor) {
		document.querySelector("#editor").style.color = localStorage.WriteSpaceFontColor;
	};
	if (localStorage.WriteSpaceFontFamily) {
		document.querySelector("#editor").style.fontFamily = localStorage.WriteSpaceFontFamily;
		document.querySelector("#statistics").style.fontFamily = localStorage.WriteSpaceFontFamily;
	};
	if (localStorage.WriteSpaceFontSize) {
		document.querySelector("body").style.fontSize = localStorage.WriteSpaceFontSize;
	};
	if (localStorage.WriteSpaceLineHeight) {
		document.querySelector("#editor").style.lineHeight = localStorage.WriteSpaceLineHeight;
	};
	if (localStorage.WriteSpaceDisplayFooter) {
		document.querySelector("#footer").style.display = "none";
	}
	else {
		document.querySelector("#footer").style.display = "block";
	};
};
