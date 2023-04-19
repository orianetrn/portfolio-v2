/* afficher / masquer div arbre */
let afficher = document.getElementById("afficher");
let div_cacher_arbre = document.getElementById("div_cacher_arbre");

afficher.addEventListener("click", () => {
  if(getComputedStyle(div_cacher_arbre).display != "none"){
    div_cacher_arbre.style.display = "none";
  } else {
    div_cacher_arbre.style.display = "block";
  }
})

/*
let afficher_halloween = document.getElementById("afficher_halloween");
let div_cacher_halloween = document.getElementById("div_cacher_halloween");

afficher_halloween.addEventListener("click", () => {
  if(getComputedStyle(div_cacher_halloween).display != "none"){
    div_cacher_halloween.style.display = "none";
  } else {
    div_cacher_halloween.style.display = "block";
  }
})


let afficher_mdf = document.getElementById("afficher_mdf");
let div_cacher_mdf = document.getElementById("div_cacher_mdf");

afficher_mdf.addEventListener("click", () => {
  if(getComputedStyle(div_cacher_mdf).display != "none"){
    div_cacher_mdf.style.display = "none";
  } else {
    div_cacher_mdf.style.display = "block";
  }
})


let afficher_streetart = document.getElementById("afficher_streetart");
let div_cacher_streetart = document.getElementById("div_cacher_streetart");

afficher_streetart.addEventListener("click", () => {
  if(getComputedStyle(div_cacher_streetart).display != "none"){
    div_cacher_streetart.style.display = "none";
  } else {
    div_cacher_streetart.style.display = "block";
  }
})
*/

var divs = ["div_cacher_halloween", "div_cacher_mdf", "div_cacher_streetart"];
var visibleId = null;

function show(id) {
  if(visibleId !== id) {
    visibleId = id;
  } 
  hide();
}

function hide() {
  var div, i, id;
  for(i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if(visibleId === id) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}  
