function optionsSave() {
	localStorage.setItem("WriteSpaceEditorWidth", document.querySelector("#editorWidth").value);
	localStorage.setItem("WriteSpaceBackgroundColor", document.querySelector("#backgroundColor").value);
	localStorage.setItem("WriteSpaceFontColor", document.querySelector("#fontColor").value);
	localStorage.setItem("WriteSpaceFontFamily", document.querySelector("#fontFamily").value);
	localStorage.setItem("WriteSpaceFontSize", document.querySelector("#fontSize").value);
	localStorage.setItem("WriteSpaceLineHeight", document.querySelector("#lineHeight").value);
	if (document.querySelector("#displayFooter").checked){
		localStorage.removeItem("WriteSpaceDisplayFooter");
	}
	else {
		localStorage.setItem("WriteSpaceDisplayFooter", document.querySelector("#displayFooter").checked);
	}
	document.querySelector("#save-button").disabled = true;
	document.querySelector("#save-notice").style.visibility = "visible";
};
