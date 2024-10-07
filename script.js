function showTableResult(lista) {
    const table = document.getElementById('table');
    for (let i = 0; i < lista.length; i++) {
        for(let j = 0; j < lista[i].length; j++) {
            table.rows[i + 1].cells[j].innerHTML = lista[i][j];
        }
    }
}

document.getElementById('generate-button').addEventListener('click', function () {
    
    const number = document.getElementById('number-input').value.trim();
    const warning = document.querySelector('.warning');
    if (!/^\d+$/.test(number)) {
        warning.innerText = "Digite um número inteiro!";
        return;
    }

    const numberLimit = 100000;
    if (number > numberLimit) {
        warning.innerText = "Digite um número menor que " + numberLimit;
        return;
    }

    const numeroInt = parseInt(number);
    let numberList = []
    for (i = 1; i <= 10; i++) {
        let result = i * numeroInt;
        numberList.push([i, numeroInt, result]);
    }

    warning.innerText = "";

    showTableResult(numberList);
    
});
