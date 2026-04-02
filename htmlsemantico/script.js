function alterarNome() {
    let trocarNome = document.getElementById("inputNome").value;

if (trocarNome === "") {
    alert("Seu Nome BB!")
} else{
    document.getElementById("nomeUsuario").innerHTML = trocarNome
}
}
