function drawWindow() {
	document.querySelector("#main").style.height = window.innerHeight - document.querySelector("#footer").offsetHeight + "px";
	if (window.localStorage.getItem("WriteSpaceEditorWidth")) {
		document.querySelector("#editor").style.paddingLeft = window.innerWidth / 2 - window.localStorage.getItem("WriteSpaceEditorWidth") / 2 + "px";
		document.querySelector("#editor").style.paddingRight = window.innerWidth / 2 - window.localStorage.getItem("WriteSpaceEditorWidth") / 2 + "px";
	}
	else {
		document.querySelector("#editor").style.paddingLeft = window.innerWidth / 2 - 660 / 2 + "px";
		document.querySelector("#editor").style.paddingRight = window.innerWidth / 2 - 660 / 2 + "px";
	};
};
