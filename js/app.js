const equipamentos = [
    {
        id: 1,
        nome: "Notebook Dell Inspiron",
        categoria: "eletronicos",
        deposito: 100,
        disponivel: true
    },
    {
        id: 2,
        nome: "Roteador TP-Link",
        categoria: "eletronicos",
        deposito: 40,
        disponivel: true
    },
    {
        id: 3,
        nome: "Cabo HDMI",
        categoria: "eletronicos",
        deposito: 10,
        disponivel: true
    },
    {
        id: 4,
        nome: "Livro de Circuitos Elétricos",
        categoria: "livros",
        deposito: 20,
        disponivel: true
    },
    {
        id: 5,
        nome: "Livro de Programação em C",
        categoria: "livros",
        deposito: 15,
        disponivel: true
    },
    {
        id: 6,
        nome: "Multímetro Digital",
        categoria: "ferramentas",
        deposito: 30,
        disponivel: true
    },
    {
        id: 7,
        nome: "Protoboard",
        categoria: "ferramentas",
        deposito: 12,
        disponivel: true
    }
];

let alugueis = [];

function mostrarGuia(guia) {
    const areaEquipamentos = document.getElementById("equipamentos");
    const areaAlugueis = document.getElementById("meusAlugueis");

    if (guia === "alugamentos") {
        areaEquipamentos.classList.add("oculto");
        areaAlugueis.classList.remove("oculto");
        mostrarAlugueis();
        return;
    }

    areaEquipamentos.classList.remove("oculto");
    areaAlugueis.classList.add("oculto");

    if (guia === "todos") {
        carregarEquipamentos(equipamentos);
    } else {
        const filtrados = equipamentos.filter(e => e.categoria === guia);
        carregarEquipamentos(filtrados);
    }
}

function carregarEquipamentos(lista) {
    const area = document.getElementById("equipamentos");
    area.innerHTML = "";

    lista.forEach(e => {
        area.innerHTML += `
            <div class="card">
                <h3>${e.nome}</h3>
                <p><strong>Categoria:</strong> ${nomeCategoria(e.categoria)}</p>
                <p><strong>Depósito:</strong> R$ ${e.deposito}</p>

                <p class="${e.disponivel ? 'disponivel' : 'indisponivel'}">
                    ${e.disponivel ? 'Disponível' : 'Indisponível'}
                </p>

                <button onclick="abrirPopupAluguel(${e.id})" ${!e.disponivel ? "disabled" : ""}>
                    Alugar
                </button>
            </div>
        `;
    });
}

function nomeCategoria(categoria) {
    if (categoria === "eletronicos") return "Equipamentos Eletrônicos";
    if (categoria === "livros") return "Livros";
    if (categoria === "ferramentas") return "Ferramentas";
    return categoria;
}

window.onload = () => {
    mostrarGuia("todos");
};