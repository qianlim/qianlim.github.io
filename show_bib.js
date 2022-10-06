function showBib(bib){
    document.getElementById(bib).hidden = document.getElementById(bib).hidden? false : true;
    let btext = document.getElementById("bib_button").innerText;
    document.getElementById("bib_button").innerText = (btext[0] == 'H')? btext.replace("Hide","Show") : btext.replace("Show","Hide");
    }