let acaoConfirmada = null;

function abrirPopupAluguel(id) {
    const equipamento = equipamentos.find(e => e.id === id);

    document.getElementById("popupTitulo").innerText = "Confirmar aluguel";
    document.getElementById("popupTexto").innerText =
        `Deseja alugar "${equipamento.nome}"? O depósito de R$ ${equipamento.deposito} será bloqueado.`;

    document.getElementById("popup").classList.remove("oculto");

    acaoConfirmada = function() {
        alugarEquipamento(id);
    };
}

function abrirPopupDevolucao(id) {
    const equipamento = equipamentos.find(e => e.id === id);

    document.getElementById("popupTitulo").innerText = "Confirmar devolução";
    document.getElementById("popupTexto").innerText =
        `Deseja devolver "${equipamento.nome}"? O depósito será liberado.`;

    document.getElementById("popup").classList.remove("oculto");

    acaoConfirmada = function() {
        devolverEquipamento(id);
    };
}

document.getElementById("btnConfirmar").onclick = function() {
    if (acaoConfirmada) {
        acaoConfirmada();
    }

    fecharPopup();
};

function fecharPopup() {
    document.getElementById("popup").classList.add("oculto");
    acaoConfirmada = null;
}

function alugarEquipamento(id) {
    const equipamento = equipamentos.find(e => e.id === id);

    if (!equipamento || !equipamento.disponivel) {
        alert("Equipamento indisponível.");
        return;
    }

    equipamento.disponivel = false;
    alugueis.push(equipamento);

    mostrarGuia("alugamentos");
}

function devolverEquipamento(id) {
    const equipamento = equipamentos.find(e => e.id === id);

    if (!equipamento) return;

    equipamento.disponivel = true;
    alugueis = alugueis.filter(e => e.id !== id);

    mostrarAlugueis();
}

function mostrarAlugueis() {
    const area = document.getElementById("listaAlugueis");
    area.innerHTML = "";

    if (alugueis.length === 0) {
        area.innerHTML = "<p>Você ainda não alugou nenhum equipamento.</p>";
        return;
    }

    alugueis.forEach(e => {
        area.innerHTML += `
            <div class="card">
                <h3>${e.nome}</h3>
                <p><strong>Depósito bloqueado:</strong> R$ ${e.deposito}</p>
                <p class="indisponivel">Alugado por você</p>

                <button onclick="abrirPopupDevolucao(${e.id})">
                    Devolver
                </button>
            </div>
        `;
    });
    window.addEventListener("load", function() {
    document.getElementById("btnConfirmar").onclick = function() {
        if (acaoConfirmada) {
            acaoConfirmada();
        }

        fecharPopup();
    };
});
}

