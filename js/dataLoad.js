function dataLoad() {
	if (localStorage.WriteSpaceData) {
		document.querySelector("#editor").value = localStorage.WriteSpaceData;
	}
};
