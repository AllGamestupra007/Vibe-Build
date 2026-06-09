public class Main {
    public static void main(String[] args) {

        Equipamento notebook =
            new Equipamento(
                1,
                "Notebook Dell",
                "Equipamentos Eletrônicos",
                true,
                100.0
            );

        System.out.println(notebook.getNome());
    }
}