import java.time.LocalDate;

public class Contrato {
    private int id;
    private Usuario locador;
    private Usuario locatario;
    private Equipamento equipamento;
    private double deposito;
    private boolean depositoPreso;
    private boolean ativo;
    private LocalDate dataInicio;
    private LocalDate dataDevolucao;

    public Contrato(
        int id,
        Usuario locador,
        Usuario locatario,
        Equipamento equipamento,
        double deposito
    ) {
        this.id = id;
        this.locador = locador;
        this.locatario = locatario;
        this.equipamento = equipamento;
        this.deposito = deposito;
        this.depositoPreso = true;
        this.ativo = true;
        this.dataInicio = LocalDate.now();

        equipamento.alugar();
    }

    public void devolverItem() {
        this.ativo = false;
        this.depositoPreso = false;
        this.dataDevolucao = LocalDate.now();

        equipamento.devolver();
    }

    public String statusContrato() {
        if (ativo) {
            return "Contrato ativo. Depósito preso.";
        } else {
            return "Contrato finalizado. Depósito liberado.";
        }
    }

    public int getId() {
        return id;
    }

    public Usuario getLocador() {
        return locador;
    }

    public Usuario getLocatario() {
        return locatario;
    }

    public Equipamento getEquipamento() {
        return equipamento;
    }

    public double getDeposito() {
        return deposito;
    }

    public boolean isDepositoPreso() {
        return depositoPreso;
    }

    public boolean isAtivo() {
        return ativo;
    }

    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public LocalDate getDataDevolucao() {
        return dataDevolucao;
    }
}