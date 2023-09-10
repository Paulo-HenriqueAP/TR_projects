let msg = "";
let logo = 1;

function enviar() {
    msg = document.getElementById("msgWPP").value
    console.log(new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString() + " | " + msg) //backup
    document.getElementById("enviarMSG").href = "https://wa.me/?text=" + msg
};

function trocarTema() {
    document.body.classList.toggle("temaClaro")
    switch (logo) {
        case 1:
            document.getElementById("botaoFoto").setAttribute("src", "src_programas/img/wpp/WhatsAppButtonGreenSmall.svg")//claro
            document.getElementById("tema").textContent = "☀️"
            logo = 0
            break;
        default:
            document.getElementById("botaoFoto").setAttribute("src", "src_programas/img/wpp/WhatsAppButtonWhiteSmall.svg")//escuro
            document.getElementById("tema").textContent = "🌑"
            logo = 1
    };
};





