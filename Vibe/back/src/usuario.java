public class Usuario {
    private int id;
    private String nome;
    private String email;
    private double reputacao;

    public Usuario(int id, String nome, String email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.reputacao = 5.0;
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public double getReputacao() {
        return reputacao;
    }

    public void atualizarReputacao(double novaNota) {
        reputacao = (reputacao + novaNota) / 2;
    }
}