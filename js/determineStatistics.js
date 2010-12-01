function determineStatistics() {
	document.getElementById("wordcount").innerHTML = editor.value.split(/\b\w+\b/).length -1;
	document.getElementById("linecount").innerHTML = editor.value.split(/\n/).length;
	document.getElementById("charactercount").innerHTML = editor.value.length;
};
