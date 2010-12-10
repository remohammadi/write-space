function dataExport(writer) {
	function error(evt) {
		alert("Export failed:" + evt);
	};
	var bb = new BlobBuilder();
	bb.append(localStorage.WriteSpaceData);
	var fileSaver = window.saveAs(bb.getBlob(), "untitled.txt");
	fileSaver.onwriteend = myOnWriteEnd;
	writer.onerror = error;
};
