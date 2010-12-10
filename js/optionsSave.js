function optionsSave() {
	localStorage.setItem("WriteSpaceEditorWidth", document.querySelector("#editorWidth").value);
	localStorage.setItem("WriteSpaceVerticalPadding", document.querySelector("#verticalPadding").value);
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
	};
	document.querySelector("#savebutton").disabled = true;
	var views = chrome.extension.getViews();
	for (var i in views) {
		var location = views[i].location;
		if (location.pathname == "/html/application.html") {
			location.reload();
		};
	};
};
