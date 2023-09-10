let R = (Math.floor(Math.random() * 256));
let G = (Math.floor(Math.random() * 256));
let B = (Math.floor(Math.random() * 256));
let cor = R + "," + G + "," + B;
let diminuir = 0;
let corOvo = "#FFFFFF";
let idOvo = "branco";
let Qovo = 0;
let totalO = 0;

//🥚

let gerados = [
    0, 0, 0, 0, 0, 0
];

document.getElementById("aleatorio").style = "background-color: rgb(" + cor + ");";

function trocarOvo() {
    document.getElementById("ovo").textContent = "CLIQUE"
    diminuir = -1
    criarOVO()
};

function criarOVO() {
    switch (diminuir) {
        case 50:
            totalO++
            document.getElementById("totalOvos").textContent = "🥚 " + totalO
            document.getElementById("ovo").textContent = "OVO"
            gerados[Qovo] += 1
            document.getElementById(idOvo).textContent = gerados[Qovo]
        case 51:
            diminuir = 51
            return;
    };
    diminuir++
    console.log(diminuir)
    document.getElementById("ovo").style = "border-radius:" + diminuir + "%; background-color:" + corOvo

    document.getElementById(idOvo).style = "border-radius:" + diminuir + "%; background-color:" + corOvo
};