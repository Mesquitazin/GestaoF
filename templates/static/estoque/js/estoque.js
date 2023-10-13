document.addEventListener("DOMContentLoaded", function () {
    const adicionarBtn = document.getElementById("adicionar");
    const nomeInput = document.getElementById("nome");
    const quantidadeInput = document.getElementById("quantidade");
    const valorInput = document.getElementById("valor");
    const estoqueTable = document.getElementById("estoque");

    let nextRowId = 1; // ID inicial para as linhas

    adicionarBtn.addEventListener("click", function () {
        const nome = nomeInput.value;
        const quantidade = quantidadeInput.value;
        const valor = valorInput.value;

        if (nome && quantidade && valor) {
            const dataAdicao = new Date().toLocaleString();
            const newRow = estoqueTable.insertRow();
            newRow.id = `row-${nextRowId}`; // Definindo um ID único para a linha
            nextRowId++;

            const cellNome = newRow.insertCell(0);
            const cellQuantidade = newRow.insertCell(1);
            const cellValor = newRow.insertCell(2);
            const cellData = newRow.insertCell(3);
            const cellAcao = newRow.insertCell(4);

            cellNome.innerHTML = nome;
            cellQuantidade.innerHTML = quantidade;
            cellValor.innerHTML = valor;
            cellData.innerHTML = dataAdicao;

            const removerBtn = document.createElement("button");
            removerBtn.textContent = "Remover";
            removerBtn.addEventListener("click", function () {
                // Obtenha o ID da linha a partir do botão de remover
                const rowIndex = newRow.id;
                const rowToRemove = document.getElementById(rowIndex);
                estoqueTable.deleteRow(rowToRemove.rowIndex);
            });

            cellAcao.appendChild(removerBtn);

            nomeInput.value = "";
            quantidadeInput.value = "";
            valorInput.value = "";
        } else {
            alert("Preencha todos os campos para adicionar um item.");
        }
    });
});
