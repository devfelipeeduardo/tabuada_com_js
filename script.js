function mostrarResultadoTabela(lista) {
    const tabela = document.getElementById('table');
    for (let i = 0; i < lista.length; i++) {
        for(let j = 0; j < lista[i].length; j++) {
            tabela.rows[i + 1].cells[j].innerHTML = lista[i][j];
    }
}
    // alert(String(tabela.rows.length))

}

document.getElementById('meuBotao').addEventListener('click', function () {

    const numero = parseInt(document.getElementById('numero-input').value);

    if (isNaN(numero) || numero == "") {
        alert("Digite um número!")
        return;
    }

    let lista_numero = []

    for (i = 1; i <= 10; i++) {
        let resultado = i * numero;
        lista_numero.push([i, numero, resultado])
        // lista_numero.push(`${i} * ${numero} = ${resultado}`);
    }


    // alert(lista_numero.join('\n'))
    mostrarResultadoTabela(lista_numero);
    
});


