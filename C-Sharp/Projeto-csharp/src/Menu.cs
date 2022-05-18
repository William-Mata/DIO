namespace Projeto_csharp
{
    public class Menu
    {
        public string opcaoUsuario = "";

        public void chamarMenu()
        {
            Console.WriteLine("\n Informe a opção desejada:" +
           "\n 1 - Inserir Novo Aluno \n 2 - Listar Alunos" +
           " \n 3 - Calcular média geral \n 4 - Sair \n");

            this.opcaoUsuario = Console.ReadLine();


        }
    }
}