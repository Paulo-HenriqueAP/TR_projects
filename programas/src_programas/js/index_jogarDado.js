let Pre_escolhido = document.getElementById("texto")

const dadosPossiveis = [
    { idado: "src_programas/img/dado/1.png", escolha: 1 },
    { idado: "src_programas/img/dado/2.png", escolha: 2 },
    { idado: "src_programas/img/dado/3.png", escolha: 3 },
    { idado: "src_programas/img/dado/4.png", escolha: 4 },
    { idado: "src_programas/img/dado/5.png", escolha: 5 },
    { idado: "src_programas/img/dado/6.png", escolha: 6 },
]

let acertos = 0
let escolhi = 0
let erros = 0

const tentarNovamente = document.getElementById("reiniciar")

function D1() {
    escolhi = 1
    Pre_escolhido.textContent = "ESCOLHO <1>"
}

function D2() {
    escolhi = 2
    Pre_escolhido.textContent = " ESCOLHO <2>"
}

function D3() {
    escolhi = 3
    Pre_escolhido.textContent = " ESCOLHO <3>"
}

function D4() {
    escolhi = 4
    Pre_escolhido.textContent = " ESCOLHO <4>"
}

function D5() {
    escolhi = 5
    Pre_escolhido.textContent = "ESCOLHO <5>"
}

function D6() {
    escolhi = 6
    Pre_escolhido.textContent = "ESCOLHO <6>"
}

function joguei() {
    if (escolhi === 0) {
        Pre_escolhido.textContent = "ESCOLHA UM"
        return;
    }
    document.getElementById("centro").classList.add("hidden")
    qualDado = (dadosPossiveis[(Math.floor(Math.random() * dadosPossiveis.length))])
    correto = qualDado.escolha
    document.getElementById("dado").setAttribute("src", qualDado.idado)


    console.log(correto)
    console.log(escolhi)

    if (escolhi === correto) {
        acertos++
        document.body.style = "background-color: green;"
    } else {
        erros++
        document.body.style = "background-color: red;"
    }
    tentarNovamente.classList.remove("hidden")
    document.getElementById("resultado").textContent = "✔️ " + acertos + " || ❌ " + erros
}

tentarNovamente.addEventListener("click", () => {
    tentarNovamente.classList.add("hidden")
    escolhi = 0
    document.body.style = "background-color: cornsilk;"
    Pre_escolhido.textContent = "ESCOLHO"
    document.getElementById("dado").setAttribute("src", "src_programas/img/dado/inicial.png")
    document.getElementById("centro").classList.remove("hidden")
})

