const immagini = Array.from(document.querySelectorAll(".card-galleria img"));

let indiceCorrente = 0;

const popup = document.getElementById("popupNatale");
const foto = document.getElementById("fotoGrande");
const titolo = document.getElementById("titoloBox");
const descrizione = document.getElementById("descrizioneBox");
const prezzo = document.getElementById("prezzoBox");

function mostra(indice) {
    indiceCorrente = indice;

    const img = immagini[indice];

    foto.src = img.src;
    foto.alt = img.alt;
    titolo.textContent = img.dataset.nome;
    descrizione.textContent = img.dataset.descrizione;
    prezzo.textContent = img.dataset.prezzo;

    popup.classList.add("attivo");
}

function apriPopup(img) {
    const indice = immagini.indexOf(img);
    mostra(indice);
}

function chiudiPopup() {
    popup.classList.remove("attivo");
}

function successiva() {
    indiceCorrente++;

    if (indiceCorrente >= immagini.length) {
        indiceCorrente = 0;
    }

    mostra(indiceCorrente);
}

function precedente() {
    indiceCorrente--;

    if (indiceCorrente < 0) {
        indiceCorrente = immagini.length - 1;
    }

    mostra(indiceCorrente);
}

popup.addEventListener("click", function(e) {
    if (e.target === popup) {
        chiudiPopup();
    }
});