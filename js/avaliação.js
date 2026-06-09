const avaliacoes = [];

function avaliarEquipamento() {

    const nome =
        document.getElementById("nomeEquipamento").value;

    const nota =
        parseInt(
            document.getElementById("nota").value
        );

    const comentario =
        document.getElementById("comentario").value;

    if (!nome || !nota || !comentario) {

        alert(
            "Preencha todos os campos."
        );

        return;
    }

    if (nota < 1 || nota > 5) {

        alert(
            "A nota deve ser entre 1 e 5."
        );

        return;
    }

    avaliacoes.push({
        nome,
        nota,
        comentario
    });

    atualizarAvaliacoes();

    document.getElementById("nomeEquipamento").value = "";
    document.getElementById("nota").value = "";
    document.getElementById("comentario").value = "";
}

function atualizarAvaliacoes() {

    const lista =
        document.getElementById("listaAvaliacoes");

    if (!lista) return;

    lista.innerHTML = "";

    avaliacoes.forEach(a => {

        lista.innerHTML += `
        <div class="card">

            <h4>${a.nome}</h4>

            <p>
                Nota:
                ${"⭐".repeat(a.nota)}
            </p>

            <p>
                ${a.comentario}
            </p>

        </div>
        `;
    });
}