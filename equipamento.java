public class Equipamento {

    private int id;
    private String nome;
    private String categoria;
    private boolean disponivel;
    private double deposito;

    public Equipamento(
        int id,
        String nome,
        String categoria,
        boolean disponivel,
        double deposito
    ){
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.disponivel = disponivel;
        this.deposito = deposito;
    }

    public String getNome() {
        return nome;
    }

    public boolean isDisponivel() {
        return disponivel;
    }

    public void alugar() {
        disponivel = false;
    }

    public void devolver() {
        disponivel = true;
    }
}