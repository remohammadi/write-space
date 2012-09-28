function initialDataLoad() {
	if (localStorage.WriteSpaceData) {
		document.querySelector("#editor").value = localStorage.WriteSpaceData;
	};
};

function dataSave() {
	window.localStorage.setItem("WriteSpaceData", document.querySelector("#editor").value);
};

function dataLoad(files) {
	// TODO: undoable instead of warning
	var r = confirm(chrome.i18n.getMessage("importwarning"));
	if (r != true)
		return;

	var editor = document.querySelector("#editor");
	editor.value = "";

	for (i = 0; i < files.length; i++) {
		file = files[i];
		console.log(file);
		var reader = new FileReader();
		ret = [];
		reader.onload = function (e) {
			editor.value += e.target.result;
			window.localStorage.setItem("WriteSpaceData", editor.value);
		};
		reader.onerror = function (stuff) {
			console.log("error", stuff);
			console.log (stuff.getMessage());
		};
		reader.readAsText(file);
	};
};

function dataExport() {
	var content = new Array(1);
	content[0] = localStorage.WriteSpaceData
	var bb = new Blob(content);
	// TODO: filename
	window.saveAs(bb, "untitled.txt");
};
