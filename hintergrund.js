function updateBackground() {
  const now = new Date();
  const hours = now.getHours();
  const body = document.body;
  const seitenleiste = document.querySelector('.seitenleiste');
  const titelleiste = document.querySelector(".titelleiste");
  const suchleiste = document.querySelector(".suchleiste");

  // Die Farben der website mithilfe der zeit
  if (hours >= 6 && hours < 12) {
    body.style.backgroundColor = "#7fff29";
    seitenleiste.style.backgroundColor = "#81B214";    //frühlingsfarben
    titelleiste.style.backgroundColor = "#206A5D";
    suchleiste.style.backgroundColor = "#206A5D";
  } else if (hours >= 12 && hours < 18) {
    body.style.backgroundColor = "#E7D283";
    seitenleiste.style.backgroundColor = "#DF9755";    //sommerfarben
    titelleiste.style.backgroundColor = "#EB5A3C";
    suchleiste.style.backgroundColor = "#EB5A3C";
  } else if (hours >= 18 && hours < 21) {
    body.style.backgroundColor = "#E16A54";
    seitenleiste.style.backgroundColor = "#9F5255";    //herbstfarben
    titelleiste.style.backgroundColor = "#7C444F";
    suchleiste.style.backgroundColor = "#7C444F"
  } else {
    body.style.backgroundColor = "#577BC1";
    seitenleiste.style.backgroundColor = "#344CB7";    //winterfarben
    titelleiste.style.backgroundColor = "#000957";
    suchleiste.style.backgroundColor = "#000957";
  }
}

// überprüft jede minute nach der zeit damit sich der hintergrund nicht nur bei einer aktualisierung der seite verändert
updateBackground();
setInterval(updateBackground, 60000);
