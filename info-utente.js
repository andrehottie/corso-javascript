var info = {
    nome : "Mauro",
    cognome : "Buscemi",
    eta : 22,
    altezza : 182,
    sport:["Niente", "Nulla", "Assolutamente nulla"]
}

// CREAZIONE TESTI E LISTA
var div = document.createElement("div");
var h1 = document.createElement("h1");
var altezza = document.createElement("h3");
var eta = document.createElement("h3");
var sport = document.createElement("h3");
var ul = document.createElement("ul");

// INSERIMENTO TESTI E LISTA
document.body.appendChild(div);
document.querySelector("div").style.border = "5px dotted red";
document.querySelector("div").style.padding = "3px";
document.querySelector("div").appendChild(h1);
document.querySelector("div").appendChild(altezza);
document.querySelector("div").appendChild(eta);
document.querySelector("div").appendChild(sport);
document.querySelector("div").appendChild(ul);


// RIEMPIMENTO TESTI E LISTA
h1.textContent = info.nome + " " + info.cognome;
eta.textContent = "Eta': " + info.eta;
altezza.textContent = "Altezza: " + info.altezza;
sport.textContent = "Sports: ";

info.sport.forEach(e => {
    var creazioneli = document.createElement("li")
    creazioneli.textContent = e;
    document.querySelectorAll("ul")[0].appendChild(creazioneli);

});






