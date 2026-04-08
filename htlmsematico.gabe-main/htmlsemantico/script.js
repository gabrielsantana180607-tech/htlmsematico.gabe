function alterarNome() {
    let trocarNome = document.getElementById("inputNome").value;

if (trocarNome === "") {
    alert("Seu Nome BB!")
} else{
    document.getElementById("nomeUsuario").innerHTML = trocarNome
}
}

function alterarCurso() {
    let trocarCurso = document.getElementById("inputCurso").value;

    if (trocarCurso === "") {
        alert("Seu curso moh")
    } else{
        document.getElementById("nomeCurso").innerHTML= trocarCurso
    }
}

function alterarStatus() {
    let trocarStatus = document.getElementById("inputStatus").value;

    if (trocarStatus === "") {
        alert("Seu status moh")
    } else{
        document.getElementById("nomesStatus").innerHTML= trocarStatus
    }
}