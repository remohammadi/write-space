function localizeOptions() {
	document.title = chrome.i18n.getMessage("name") + ": " + chrome.i18n.getMessage("options");
	document.querySelector("#name").innerHTML = chrome.i18n.getMessage("name");
	document.querySelector("#optionslabel").innerHTML = chrome.i18n.getMessage("options");
	document.querySelector("#editorwidthlabel").innerHTML = chrome.i18n.getMessage("editorwidth");
	document.querySelector("#backgroundcolorlabel").innerHTML = chrome.i18n.getMessage("backgroundcolor");
	document.querySelector("#fontcolorlabel").innerHTML = chrome.i18n.getMessage("fontcolor");
	document.querySelector("#fontfamilylabel").innerHTML = chrome.i18n.getMessage("fontfamily");
	document.querySelector("#fontsizelabel").innerHTML = chrome.i18n.getMessage("fontsize");
	document.querySelector("#lineheightlabel").innerHTML = chrome.i18n.getMessage("lineheight");
	document.querySelector("#displayfooterlabel").innerHTML = chrome.i18n.getMessage("displayfooter");
	document.querySelector("#savebutton").innerHTML = chrome.i18n.getMessage("save");
	document.querySelector("#resetbutton").innerHTML = chrome.i18n.getMessage("resettodefault");
};
