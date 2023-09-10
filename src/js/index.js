const frutas_legumes = [
    "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🍅", "🍯",
    "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶️", "🥒", "🥬", "🥦", "🧄", "🧅", "🍄", "🥜", "🌰", "🧈",
    "🥐", "🥖", "🥨", "🥯", "🥞", "🧇", "🍔", "🍟", "🌭", "🥪", "🍿", "🧆", "🥙", "🍘", "🍙", "🍩",
    "🍠", "🍣", "🍤", "🍥", "🥮", "🥟", "🥠", "🍪", "🎂", "🍰", "🧁", "🍕"
];

const qualVaiCair = [
    { src: "programas/calculadora.html", nomePrograma: "Calculadora ", IDbotao: "fR0", repetido: "n" },
    { src: "programas/contador de cliques.html", nomePrograma: "Contar cliques ", IDbotao: "fR1", repetido: "n" },
    { src: "programas/cor aleatoria.html", nomePrograma: "Cor aleatória ", IDbotao: "fR2", repetido: "n" },
    { src: "programas/jogar o dado.html", nomePrograma: "Jogar o Dado ", IDbotao: "fR3", repetido: "n" },
    { src: "programas/lanterna.html", nomePrograma: "Lanterna ", IDbotao: "fR4", repetido: "n" },
    { src: "https://paulo-henriqueap.github.io/Projeto_O-Espro-que-eu-vejo/", nomePrograma: "Projeto Espro ", IDbotao: "fR5", repetido: "n" },
    { src: "programas/enviar msg WPP.html", nomePrograma: "Msg WPP ", IDbotao: "fR6", repetido: "n" },
    { src: "programas/numeros aleatorios.html", nomePrograma: "Gerar números aleatórios ", IDbotao: "fR7", repetido: "n" },
    { src: "programas/relogio.html", nomePrograma: "Relógio ", IDbotao: "fR8", repetido: "n" },
    { src: "https://paulo-henriqueap.github.io/gerarQR/", nomePrograma: "Gerar QRs ", IDbotao: "fR9", repetido: "n" },
    { src: "programas/faca o ovo.html", nomePrograma: "Faça o ovo ", IDbotao: "fR10", repetido: "n" },
    { src: "https://paulo-henriqueap.github.io/Layout-de-vendas-mobile/", nomePrograma: "Layout vendas ", IDbotao: "fR11", repetido: "n" },
    { src: "https://paulo-henriqueap.github.io/Project_Mario/", nomePrograma: "Project Mario ", IDbotao: "fR12", repetido: "n" },
    { src: "https://paulo-henriqueap.github.io/Gerar-Palavras-Mrw/", nomePrograma: "Gerar palvras Mrw ", IDbotao: "fR13", repetido: "n" },
    { src: "https://paulo-henriqueap.github.io/Dardo-Russo/", nomePrograma: "Dardo russo ", IDbotao: "fR14", repetido: "n" }
];

let vaiCair = "";
let caiu = "";

let frutaAtual = 0;

let tamanho = 60;

let largura = 0
let corte = document.getElementById("corteArvore");
let troncoDa_arvore = document.getElementById("tronco");

let animacaoCair = 0;

let colocarNo_galho = 0

let liberado = false;

function gerarEmojisFrutas() {
    for (let contarFd = 0; contarFd < 15; contarFd++) {

        let posicao = Math.floor(Math.random() * 98)

        document.getElementById("fR" + contarFd).textContent = (frutas_legumes[(Math.floor(Math.random() * frutas_legumes.length))])

        document.getElementById("fR" + contarFd).style = "left:" + posicao + "%;"
        document.getElementById("fR" + contarFd).classList.add("hidden")
    }
};

function gerarGalhosE() {
    for (let galho = 5; galho < 9; galho++) {
        tamanhoGalho = Math.floor(Math.random() * 24 + 15)
        rotacaoGalho = Math.floor(Math.random() * 30)
        topo = (Math.floor(Math.random() * 59 + 10))
        console.log(rotacaoGalho)
        document.getElementById("galho" + galho).style = "width:" + tamanhoGalho + "%; transform: rotate(" + rotacaoGalho + "deg); top:" + topo + "%;"
    }
}

function gerarGalhosD() {
    for (let galho = 0; galho < 5; galho++) {
        tamanhoGalho = Math.floor(Math.random() * 24 + 15)
        rotacaoGalho = Math.floor(Math.random() * -30)
        topo = Math.floor(Math.random() * 30 + 10)
        document.getElementById("galho" + galho).style = "width:" + tamanhoGalho + "%; transform: rotate(" + rotacaoGalho + "deg); top:" + topo + "%;"
    }
}

function cair() {
    vaiCair = (qualVaiCair[(Math.floor(Math.random() * qualVaiCair.length))])
    caiu = vaiCair.IDbotao
    document.getElementById(caiu).classList.remove("hidden")

    switch (vaiCair.repetido) {
        case "repetido":
            cair()
            return;
    };

    switch (colocarNo_galho) {
        case 0:
            nomeP0 = vaiCair.nomePrograma
            programa0 = vaiCair.src
            colocarNo_galho = 1
            break;
        case 1:
            nomeP1 = vaiCair.nomePrograma
            programa1 = vaiCair.src
            colocarNo_galho = 2
            break;
        case 2:
            nomeP2 = vaiCair.nomePrograma
            programa2 = vaiCair.src
            colocarNo_galho = 3
            break;
        case 3:
            nomeP3 = vaiCair.nomePrograma
            programa3 = vaiCair.src
            colocarNo_galho = 4
            break;
        case 4:
            nomeP4 = vaiCair.nomePrograma
            programa4 = vaiCair.src
            colocarNo_galho = 5
            break;
        case 5:
            nomeP5 = vaiCair.nomePrograma
            programa5 = vaiCair.src
            colocarNo_galho = 6
            break;
        case 6:
            nomeP6 = vaiCair.nomePrograma
            programa6 = vaiCair.src
            colocarNo_galho = 7
            break;
        case 7:
            nomeP7 = vaiCair.nomePrograma
            programa7 = vaiCair.src
            colocarNo_galho = 8
            break
        case 8:
            nomeP8 = vaiCair.nomePrograma
            programa8 = vaiCair.src
            colocarNo_galho = 9
            break;
    }

    if (tamanho <= 42) {
        animacaoCair += 1
        corte.classList.add("esconder")
        troncoDa_arvore.classList.add("espera")
        liberarGalhos()
        setTimeout(function () {
            troncoDa_arvore.style = "transform: rotate(" + animacaoCair + "deg); opacity: 1%;"
            animacaoCair = 3
        }, 800)

        setTimeout(function () {
            troncoDa_arvore.style = "transform: rotate(" + animacaoCair + "deg) ; opacity: 4%;"
            animacaoCair += 5
        }, 900)

        setTimeout(function () {
            troncoDa_arvore.style = "transform: rotate(" + animacaoCair + "deg) ; opacity: 7%;"
            animacaoCair += 8
        }, 1000)

        setTimeout(function () {
            troncoDa_arvore.style = "transform: rotate(" + animacaoCair + "deg) ; opacity: 10%;"
            animacaoCair += 10
        }, 1100)

        setTimeout(function () {
            troncoDa_arvore.style = "transform: rotate(" + animacaoCair + "deg) ; opacity: 15%;"
            animacaoCair += 12
        }, 1200)

        setTimeout(function () {
            troncoDa_arvore.style = "transform: rotate(" + animacaoCair + "deg) ; opacity: 20%;"
            animacaoCair += 13
        }, 1300)

        setTimeout(function () {
            troncoDa_arvore.style = "transform: rotate(" + animacaoCair + "deg) ; opacity: 25%;"
            animacaoCair += 15
        }, 1500)

        setTimeout(function () {
            troncoDa_arvore.style = "transform: rotate(" + animacaoCair + "deg) ; opacity: 30%;"
            animacaoCair += 17
        }, 1700)

        setTimeout(function () {
            troncoDa_arvore.style = "transform: rotate(" + animacaoCair + "deg) ; opacity: 35%;"
            animacaoCair += Math.floor(Math.random() * 20)
        }, 1900)

        setTimeout(function () {
            troncoDa_arvore.style = "transform: rotate(" + animacaoCair + "deg) ; opacity: 40%;"
        }, 2000)

        document.getElementById(caiu).classList.add("cairNo_rio")
        setTimeout(function () {
            document.getElementById("programaR").textContent = vaiCair.nomePrograma + document.getElementById(caiu).textContent
            document.getElementById(caiu).classList.remove("cairNo_rio")
            document.getElementById(vaiCair.IDbotao).classList.add("caido")
            document.getElementById(caiu).classList.add("esconder")
            janelaPrograma = vaiCair.src
            document.getElementById("galhos").classList.remove("hidden")
        }, 2000)
        return;
    };
    document.getElementById("tronco").classList.add("espera")
    tamanho -= 2
    largura += 2
    corte.style = "left:" + tamanho + "%; width:" + largura + "%"
    vaiCair.repetido = "repetido"
    document.getElementById(caiu).classList.add("cairNo_rio")
    setTimeout(function () {
        document.getElementById("programaR").textContent = vaiCair.nomePrograma + document.getElementById(caiu).textContent
        document.getElementById(caiu).classList.remove("cairNo_rio")
        document.getElementById(vaiCair.IDbotao).classList.add("caido")
        document.getElementById("tronco").classList.remove("espera")
        document.getElementById(caiu).classList.add("esconder")
        janelaPrograma = vaiCair.src
    }, 2000)
};

function abrirPrograma() {
    window.open(janelaPrograma, self)
};

gerarEmojisFrutas();
gerarGalhosE();
gerarGalhosD();

function abrirP0() {
    if (liberado === true) {
        window.open(programa0, self)
    }
}

function abrirP1() {
    if (liberado === true) {
        window.open(programa1, self)
    }
}

function abrirP2() {
    if (liberado === true) {
        window.open(programa2, self)
    }
}

function abrirP3() {
    if (liberado === true) {
        window.open(programa3, self)
    }
}

function abrirP4() {
    if (liberado === true) {
        window.open(programa4, self)
    }
}

function abrirP5() {
    if (liberado === true) {
        window.open(programa5, self)
    }
}

function abrirP6() {
    if (liberado === true) {
        window.open(programa6, self)
    }
}

function abrirP7() {
    if (liberado === true) {
        window.open(programa7, self)
    }
}

function abrirP8() {
    if (liberado === true) {
        window.open(programa8, self)
    }
}


function liberarGalhos() {
    document.getElementById("galho0").textContent = nomeP0
    document.getElementById("galho1").textContent = nomeP1
    document.getElementById("galho2").textContent = nomeP2
    document.getElementById("galho3").textContent = nomeP3
    document.getElementById("galho4").textContent = nomeP4
    document.getElementById("galho5").textContent = nomeP5
    document.getElementById("galho6").textContent = nomeP6
    document.getElementById("galho7").textContent = nomeP7
    document.getElementById("galho8").textContent = nomeP8
    liberado = true
}