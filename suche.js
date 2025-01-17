function searchText(){
  const eingabe = document.getElementById("suche").value.trim();
  const bodyText = document.body.innerHTML;
  const highlightedText = bodyText.replace(new RegExp(`(${eingabe})`, "gi"),'<span class="highlight">$1</span>');

  document.body.innerHTML = highlightedText;

  if (!eingabe){
    alert("Bitte geben sie etwas ein!");
    return;
  }
}
function removeHighlight(){
  const highlighted = document.querySelectorAll(".highlight");
  highlighted.forEach((el) => {el.outerHTML = el.innerHTML;});
}

setInterval(removeHighlight, 20000);
