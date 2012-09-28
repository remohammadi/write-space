function optionsReset() {
	localStorage.removeItem("WriteSpaceEditorWidth");
	localStorage.removeItem("WriteSpaceBackgroundColor");
	localStorage.removeItem("WriteSpaceFontColor");
	localStorage.removeItem("WriteSpaceFontFamily");
	localStorage.removeItem("WriteSpaceFontSize");
	localStorage.removeItem("WriteSpaceLineHeight");
	localStorage.removeItem("WriteSpaceDisplayFooter");
	document.querySelector("#editorWidth").value = "60em";
	document.querySelector("#verticalPadding").value = "0";
	document.querySelector("#backgroundColor").value = "#000000";
	document.querySelector("#fontColor").value = "#B9B9B9";
	document.querySelector("#fontFamily").value = "Monospace";
	document.querySelector("#fontSize").value = "12pt";
	document.querySelector("#lineHeight").value = "1.47em";
	document.querySelector("#displayFooter").checked = 1;
	var views = chrome.extension.getViews();
	for (var i in views) {
		var location = views[i].location;
		if (location.pathname == "/html/application.html") {
			location.reload();
		};
	};
};

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
	};
	var views = chrome.extension.getViews();
	for (var i in views) {
		var location = views[i].location;
		if (location.pathname == "/html/application.html") {
			location.reload();
		};
	};
};

function optionsLoad() {
	if (localStorage.WriteSpaceEditorWidth) {
		document.querySelector("#editorWidth").value = window.localStorage.getItem("WriteSpaceEditorWidth");
	};
	if (localStorage.WriteSpaceBackgroundColor) {
		document.querySelector("#backgroundColor").value = window.localStorage.getItem("WriteSpaceBackgroundColor");
	};
	if (localStorage.WriteSpaceFontColor) {
		document.querySelector("#fontColor").value = window.localStorage.getItem("WriteSpaceFontColor");
	};
	if (localStorage.WriteSpaceFontFamily) {
		document.querySelector("#fontFamily").value = window.localStorage.getItem("WriteSpaceFontFamily");
	};
	if (localStorage.WriteSpaceFontSize) {
		document.querySelector("#fontSize").value = window.localStorage.getItem("WriteSpaceFontSize");
	};
	if (localStorage.WriteSpaceLineHeight) {
		document.querySelector("#lineHeight").value = window.localStorage.getItem("WriteSpaceLineHeight");
	};
	if (localStorage.WriteSpaceDisplayFooter) {
		document.querySelector("#displayFooter").checked = 0;
	}
	else {
		document.querySelector("#displayFooter").checked = 1;
	};
};

document.addEventListener('DOMContentLoaded', function () {
	localizeOptions();
	optionsLoad();
	document.querySelector('#savebutton').addEventListener('click', optionsSave);
	document.querySelector('#resetbutton').addEventListener('click', optionsReset);
});

