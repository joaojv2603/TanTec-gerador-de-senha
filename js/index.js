document.getElementById("gerar").addEventListener("click", function () {
    
    let tamanho = parseInt(document.getElementById("tamanho").value);
    let usarMaiusculas = document.getElementById("maiusculas").checked;
    let usarMinusculas = document.getElementById("minusculas").checked;
    let usarNumeros = document.getElementById("numeros").checked;
    let usarEspeciais = document.getElementById("especiais").checked;

    let maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let minusculas = "abcdefghijklmnopqrstuvwxyz";
    let numeros = "0123456789";
    let especiais = "!@#$%&*";

    let conjuntos = [];
    if (usarMaiusculas) conjuntos.push(maiusculas);
    if (usarMinusculas) conjuntos.push(minusculas);
    if (usarNumeros) conjuntos.push(numeros);
    if (usarEspeciais) conjuntos.push(especiais);
    if (conjuntos.length === 0) {
        alert("Selecione pelo menos um conjunto de caracteres!");
        return;
    }

    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        let sorteio = Math.floor(Math.random() * conjuntos.length);

        let conjuntoEscolhido = conjuntos[sorteio];
        let indexCaractere = Math.floor(Math.random() * conjuntoEscolhido.length);
        senha += conjuntoEscolhido[indexCaractere];
    }
    document.getElementById("resultado").value = senha;
});
