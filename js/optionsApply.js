function optionsApply() {
	if (localStorage.WriteSpaceEditorWidth) {
		document.querySelector("html").style.minWidth = localStorage.WriteSpaceEditorWidth + "px";
		document.querySelector("#statistics").style.width = localStorage.WriteSpaceEditorWidth + "px";
	};
	if (localStorage.WriteSpaceVerticalPadding) {
		document.querySelector("#main").style.paddingTop = localStorage.WriteSpaceVerticalPadding + "px";
		document.querySelector("#main").style.paddingBottom = localStorage.WriteSpaceVerticalPadding + "px";
	};
	if (localStorage.WriteSpaceBackgroundColor) {
		document.querySelector("html").style.background = localStorage.WriteSpaceBackgroundColor;
		document.querySelector("#editor").style.background = localStorage.WriteSpaceBackgroundColor;
	};
	if (localStorage.WriteSpaceFontColor) {
		document.querySelector("#editor").style.color = localStorage.WriteSpaceFontColor;
		document.querySelector("#footer").style.borderTopColor = localStorage.WriteSpaceFontColor;
		document.querySelector("#statistics").style.color = localStorage.WriteSpaceFontColor;
	};
	if (localStorage.WriteSpaceFontFamily) {
		document.querySelector("#editor").style.fontFamily = localStorage.WriteSpaceFontFamily;
		document.querySelector("#statistics").style.fontFamily = localStorage.WriteSpaceFontFamily;
	};
	if (localStorage.WriteSpaceFontSize) {
		document.querySelector("#editor").style.fontSize = localStorage.WriteSpaceFontSize;
		document.querySelector("#statistics").style.fontSize = localStorage.WriteSpaceFontSize;
	};
	if (localStorage.WriteSpaceLineHeight) {
		document.querySelector("#editor").style.lineHeight = localStorage.WriteSpaceLineHeight;
		document.querySelector("#footer").style.height = localStorage.WriteSpaceLineHeight;
	};
	if (localStorage.WriteSpaceDisplayFooter) {
		document.querySelector("#footer").style.display = "none";
	}
	else {
		document.querySelector("#footer").style.display = "block";
	};
};
