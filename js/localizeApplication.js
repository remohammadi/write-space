function localizeApplication() {
	document.title = chrome.i18n.getMessage("name");
	document.querySelector("#wordtag").innerHTML = chrome.i18n.getMessage("wordcount");
	document.querySelector("#linetag").innerHTML = chrome.i18n.getMessage("linecount");
	document.querySelector("#charactertag").innerHTML = chrome.i18n.getMessage("charactercount");
	document.querySelector("#load").title = chrome.i18n.getMessage("open");
	document.querySelector("#save").title = chrome.i18n.getMessage("savetocomp");
};
