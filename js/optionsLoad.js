function optionsLoad() {
	if (localStorage.WriteSpaceEditorWidth) {
		document.querySelector("#editorWidth").value = window.localStorage.getItem("WriteSpaceEditorWidth");
	}
	if (localStorage.WriteSpaceBackgroundColor) {
		document.querySelector("#backgroundColor").value = window.localStorage.getItem("WriteSpaceBackgroundColor");
	}
	if (localStorage.WriteSpaceFontColor) {
		document.querySelector("#fontColor").value = window.localStorage.getItem("WriteSpaceFontColor");
	}
	if (localStorage.WriteSpaceFontFamily) {
		document.querySelector("#fontFamily").value = window.localStorage.getItem("WriteSpaceFontFamily");
	}
	if (localStorage.WriteSpaceFontSize) {
		document.querySelector("#fontSize").value = window.localStorage.getItem("WriteSpaceFontSize");
	}
	if (localStorage.WriteSpaceLineHeight) {
		document.querySelector("#lineHeight").value = window.localStorage.getItem("WriteSpaceLineHeight");
	}
	if (localStorage.WriteSpaceDisplayFooter) {
		document.querySelector("#displayFooter").checked = 0;
	}
	else {
		document.querySelector("#displayFooter").checked = 1;
	}
	document.querySelector("#save-button").disabled = true;
};
