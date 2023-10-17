document.addEventListener("DOMContentLoaded", function () {
    const estoqueTable = document.querySelector("#estoque tbody");

    const itemForm = document.querySelectorAll(".adicionar");
    itemForm.forEach(function (add_button) {
    add_button.addEventListener("click", function () {
        const nome = document.getElementById("nome").value;
        const quantidade = document.getElementById("quantidade").value;
        const valor = document.getElementById("valor").value;
        
        if (nome && quantidade && valor) {
            adicionarItem(nome, quantidade, valor);
            limparCampos();
        }

        });
    });
    
    function adicionarItem(nome, quantidade, valor) {
        const newRow = estoqueTable.insertRow();
        newRow.innerHTML = `
            <td>${nome}</td>
            <td>${quantidade}</td>
            <td>${valor}</td>
            <td>
                <button class="editar">Editar</button>
                <button class="excluir">Excluir</button>
            </td>
        `;

        const editarButtons = document.querySelectorAll(".editar");
        editarButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                editarItem(button);
            });
        });

        const excluirButtons = document.querySelectorAll(".excluir");
        excluirButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                excluirItem(button);
            });
        });
    }
    
    function editarItem(button) {
        const row = button.parentNode.parentNode;
        const nome = row.cells[0].textContent;
        const quantidade = row.cells[1].textContent;
        const valor = row.cells[2].textContent;
        
        document.getElementById("nome").value = nome;
        document.getElementById("quantidade").value = quantidade;
        document.getElementById("valor").value = valor;
        
        row.parentNode.removeChild(row);
    }
    
    function excluirItem(button) {
        const row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
    
    function limparCampos() {
        document.getElementById("nome").value = "";
        document.getElementById("quantidade").value = "";
        document.getElementById("valor").value = "";
    }
});