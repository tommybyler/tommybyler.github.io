function highlightButton() {
  var tinyButton = document.getElementById("button1");
  tinyButton.classList.remove("buttons");
  tinyButton.classList.add("highlightstyle");
}

function unHighlight() {
  var tinyButton = document.getElementById("button1");
  tinyButton.classList.remove("highlightstyle");
  tinyButton.classList.add("buttons");
}
