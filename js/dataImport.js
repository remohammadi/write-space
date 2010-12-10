function dataImport(files) {
	var r = confirm(chrome.i18n.getMessage("importwarning"));
	if (r == true) {
		for (i = 0; i < files.length; i++) {
			file = files[i];
			console.log(file);
			var reader = new FileReader();
			ret = [];
			reader.onload = function (e) {
				window.localStorage.setItem("WriteSpaceData", e.target.result);
			};
			reader.onerror = function (stuff) {
				console.log("error", stuff);
				console.log (stuff.getMessage());
			};
			reader.readAsText(file);
		};
		var views = chrome.extension.getViews();
		for (var i in views) {
			var location = views[i].location;
			if (location.pathname == "/html/application.html") {
				location.reload();
			};
		};
	};
	document.querySelector("#importbutton").value="";
};
