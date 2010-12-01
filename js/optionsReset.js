function optionsReset() {
	localStorage.removeItem("WriteSpaceEditorWidth");
	localStorage.removeItem("WriteSpaceBackgroundColor");
	localStorage.removeItem("WriteSpaceFontColor");
	localStorage.removeItem("WriteSpaceFontFamily");
	localStorage.removeItem("WriteSpaceFontSize");
	localStorage.removeItem("WriteSpaceLineHeight");
	localStorage.removeItem("WriteSpaceDisplayFooter");
	document.querySelector("#editorWidth").value = "660";
	document.querySelector("#backgroundColor").value = "#000000";
	document.querySelector("#fontColor").value = "#B9B9B9";
	document.querySelector("#fontFamily").value = "Monospace";
	document.querySelector("#fontSize").value = "12pt";
	document.querySelector("#lineHeight").value = "1.47em";
	document.querySelector("#displayFooter").checked = 1;
	document.querySelector("#save-notice").style.visibility = "visible";
};
