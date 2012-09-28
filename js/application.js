var body__onkeyup = function(e) {
	dataSave();
	determineStatistics();
}

var load_input__change = function(e) {
	dataLoad(this.files);
}

var save__ckick = function(e) {
	dataExport();
}

document.addEventListener('DOMContentLoaded', function () {
	localizeApplication();
	optionsApply();
	initialDataLoad();

	document.querySelector("#main").style.width = window.localStorage.getItem("WriteSpaceEditorWidth") + "em";

	editor.focus();
	determineStatistics();
	document.querySelector('body').addEventListener('keyup', body__onkeyup);
	document.querySelector('#load_input').addEventListener('change', load_input__change);
	document.querySelector('#save').addEventListener('click', save__ckick);
});
