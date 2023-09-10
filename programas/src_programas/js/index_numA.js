let quantidade = 1
let segundos = 0
let gEntre = 11
let gEntreTexto = 10
let valorGerado = ""
let contarSeg = 0
let desligarCronometro = true

const numeros = [0,
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
]

function quant1() {
    limparQuantidade()
    quantidade = 1
    document.getElementById("somente1").style = "background-color: slateblue; color: white;"
    gerarBase()
    document.getElementById("persQuant").value = ""
}

function quant3() {
    limparQuantidade()
    document.getElementById("quant3").style = "background-color: slateblue; color: white;"
    quantidade = 3
    gerarBase()
    document.getElementById("persQuant").value = ""
}

function quant5() {
    limparQuantidade()
    quantidade = 5
    document.getElementById("quant5").style = "background-color: slateblue; color: white;"
    gerarBase()
    document.getElementById("persQuant").value = ""
}

function quant10() {
    limparQuantidade()
    quantidade = 10
    document.getElementById("quant10").style = "background-color: slateblue; color: white;"
    gerarBase()
    document.getElementById("persQuant").value = ""
}
//
function segundos0() {
    desligarCronometro = true
    limparSegundos()
    document.getElementById("padraoS").style = "background-color: slateblue; color: white;"

    setTimeout(function () {
        document.getElementById("cronometro").textContent = ""
    }, 1200)
    document.getElementById("persSeg").value = ""
}

function segundos5() {
    desligarCronometro = true
    segundos = 5
    contarSeg = 5
    document.getElementById("cronometro").textContent = "5"
    limparSegundos()
    document.getElementById("gerar5s").style = "background-color: slateblue; color: white;"
    setTimeout(function () {
        desligarCronometro = false
        cronometro()
    }, 1100)
    document.getElementById("persSeg").value = ""
}

function segundos30() {
    desligarCronometro = true
    segundos = 30
    contarSeg = 30
    document.getElementById("cronometro").textContent = "30"
    limparSegundos()
    document.getElementById("gerar30s").style = "background-color: slateblue; color: white;"
    setTimeout(function () {
        desligarCronometro = false
        cronometro()
    }, 1100)
    document.getElementById("persSeg").value = ""
}

function segundos60() {
    desligarCronometro = true
    segundos = 60
    contarSeg = 60
    document.getElementById("cronometro").textContent = "60"
    limparSegundos()
    document.getElementById("gerar60s").style = "background-color: slateblue; color: white;"
    setTimeout(function () {
        desligarCronometro = false
        cronometro()
    }, 1100)
    document.getElementById("persSeg").value = ""
}
//
function entre10() {
    gEntre = 11
    gEntreTexto = 10
    limpargEntre()
    document.getElementById("gerarE10").style = "background-color: slateblue; color: white;"
    gerarBase()
    document.getElementById("persEnt").value = ""
}

function entre100() {
    gEntre = 101
    gEntreTexto = 100
    limpargEntre()
    document.getElementById("gerarE100").style = "background-color: slateblue; color: white;"
    gerarBase()
    document.getElementById("persEnt").value = ""
}

function entre500() {
    gEntre = 501
    gEntreTexto = 500
    limpargEntre()
    document.getElementById("gerarE500").style = "background-color: slateblue; color: white;"
    gerarBase()
    document.getElementById("persEnt").value = ""
}

function entre999() {
    gEntre = 1000
    gEntreTexto = 999
    limpargEntre()
    document.getElementById("gerarE999").style = "background-color: slateblue; color: white;"
    gerarBase()
    document.getElementById("persEnt").value = ""
}
//

function limparQuantidade() {
    document.getElementById("somente1").style = "background-color: aliceblue; color: black"
    document.getElementById("quant3").style = "background-color: aliceblue; color: black"
    document.getElementById("quant5").style = "background-color: aliceblue; color: black"
    document.getElementById("quant10").style = "background-color: aliceblue; color: black"
    document.getElementById("persQuant").style = "background-color: black; color: white"
}

function limparSegundos() {
    document.getElementById("padraoS").style = "background-color: aliceblue; color: black"
    document.getElementById("gerar5s").style = "background-color: aliceblue; color: black"
    document.getElementById("gerar30s").style = "background-color: aliceblue; color: black"
    document.getElementById("gerar60s").style = "background-color: aliceblue; color: black"
    document.getElementById("persSeg").style = "background-color: black; color: white"

    document.getElementById("padraoS").classList.add("bloquear")
    document.getElementById("gerar5s").classList.add("bloquear")
    document.getElementById("gerar30s").classList.add("bloquear")
    document.getElementById("gerar60s").classList.add("bloquear")
    document.getElementById("persSeg").classList.add("bloquear")
    setTimeout(function () {
        document.getElementById("padraoS").classList.remove("bloquear")
        document.getElementById("gerar5s").classList.remove("bloquear")
        document.getElementById("gerar30s").classList.remove("bloquear")
        document.getElementById("gerar60s").classList.remove("bloquear")
        document.getElementById("persSeg").classList.remove("bloquear")
    }, 1100)
}

function limpargEntre() {
    document.getElementById("gerarE10").style = "background-color: aliceblue; color: black"
    document.getElementById("gerarE100").style = "background-color: aliceblue; color: black"
    document.getElementById("gerarE500").style = "background-color: aliceblue; color: black"
    document.getElementById("gerarE999").style = "background-color: aliceblue; color: black"
    document.getElementById("persEnt").style = "background-color: black; color: white"
}

function cronometro() {
    switch (desligarCronometro) {
        case true:
            return;
    }

    if (contarSeg > 0) {
        setTimeout(function () {
            contarSeg--
            document.getElementById("cronometro").textContent = contarSeg
            cronometro()
        }, 1000)
    } else {
        document.getElementById("cronometro").textContent = segundos
        contarSeg = segundos
        cronometro()
        gerarBase()
    }
}

function quantidadeP() {
    limparQuantidade()
    document.getElementById("persQuant").style = "background-color: slateblue; color: white;"
    quantidade = document.getElementById("persQuant").value
    gerarBase()
    switch ( quantidade = document.getElementById("persQuant").value) {
        case "":
            quant1()
    }
}

function segundosP() {
    limparSegundos()
    document.getElementById("persSeg").style = "background-color: slateblue; color: white;"
    desligarCronometro = true
    segundos = document.getElementById("persSeg").value
    contarSeg = segundos
    document.getElementById("cronometro").textContent = contarSeg
    setTimeout(function () {
        desligarCronometro = false
        cronometro()
    }, 1100)

    switch (document.getElementById("persSeg").value) {
        case "":
            segundos0()
    }
}

function gEntreP() {
    limpargEntre()
    document.getElementById("persEnt").style = "background-color: slateblue; color: white;"
    gEntre = parseInt(document.getElementById("persEnt").value) + 1
    gEntreTexto = document.getElementById("persEnt").value

    switch (document.getElementById("persEnt").value) {
        case "":
            entre10()
    }
    gerarBase()
}

function gerarBase() {
    valorGerado = ""
    for (contar = 0; contar < quantidade; contar++) {
        valorGerado += "<" + (Math.floor(Math.random() * gEntre)) + "> "
    }

    document.getElementById("gerandoAtualmente").textContent = quantidade + " núm entre 0 e " + gEntreTexto

    document.getElementById("conteudoGerado").textContent = valorGerado
}

gerarBase()
document.getElementById("somente1").style = "background-color: slateblue; color: white;"
document.getElementById("padraoS").style = "background-color: slateblue; color: white;"
document.getElementById("gerarE10").style = "background-color: slateblue; color: white;"
