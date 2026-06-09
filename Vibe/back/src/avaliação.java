public class Avaliacao {
    private int id;
    private Usuario autor;
    private Equipamento equipamento;
    private int nota;
    private String comentario;

    public Avaliacao(
        int id,
        Usuario autor,
        Equipamento equipamento,
        int nota,
        String comentario
    ) {
        this.id = id;
        this.autor = autor;
        this.equipamento = equipamento;
        setNota(nota);
        this.comentario = comentario;
    }

    public int getId() {
        return id;
    }

    public Usuario getAutor() {
        return autor;
    }

    public Equipamento getEquipamento() {
        return equipamento;
    }

    public int getNota() {
        return nota;
    }

    public String getComentario() {
        return comentario;
    }

    public void setNota(int nota) {
        if (nota < 1 || nota > 5) {
            throw new IllegalArgumentException("A nota deve ser entre 1 e 5.");
        }
        this.nota = nota;
    }
}