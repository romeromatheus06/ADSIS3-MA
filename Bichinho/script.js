const cria = document.getElementById("mainImage");
const btn = document.getElementById("btnImage");

const estados = {
    normal: "cria_norm.png",
    puto: "b_p.png",
    morto: "b_d.png",
    comendo: "b_c.png",
    feliz: "cria_feliz.png"
};

let contador = 0;
let intervalo = null;
let timeoutClique = null;
let timeoutBack = null;

function controlador() {
    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        contador++;

        console.log("tempo:", contador);

        if (contador == 10) {
            cria.src = estados.puto;
        }

        if (contador == 20) {
            cria.src = estados.morto;
        }

    }, 1000);
}

controlador();

function alimentar() {
    console.log("Comendo");

    contador = 0;

    cria.src = estados.comendo;

    if (timeoutClique) clearTimeout(timeoutClique);

    timeoutClique = setTimeout(() => {
        cria.src = estados.feliz;

        timeoutBack = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);
}