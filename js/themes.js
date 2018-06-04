function setTheme(name){
	var curr = document.getElementById("current-theme");
	if (curr) {
		curr.parentNode.removeChild(curr);
	}

	var link = document.createElement("link");
	link.href = "css/"+name+".css";
	link.type = "text/css";
	link.rel = "stylesheet";
	link.id = "current-theme";
	document.getElementsByTagName("head")[0].appendChild(link);

	var contents = document.getElementsByClassName("contents")[0];
	if(contents){
		var page_links = contents.getElementsByClassName("page-link");
		for (var i = 0; i < page_links.length; i++) {
			page_links[i].href += "?theme="+name;
		}
	}
}

function setParam(param, value){
	window.location.search = "?"+param+"="+value;
}

function main() {
	var url = new URL(window.location.href);
	var theme = url.searchParams.get("theme");
	if (theme) {
		setTheme(theme);
	}
}

document.addEventListener("DOMContentLoaded", main);
