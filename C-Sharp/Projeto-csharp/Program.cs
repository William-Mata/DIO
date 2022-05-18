namespace Projeto_csharp
{

    class Programa
    {

        public static void Main(string[] args)
        {

            Aluno[] alunos = new Aluno[5];
            Aluno aluno = new Aluno();
            Menu menu = new Menu();
            int indice = 0;

            menu.chamarMenu();


            while (menu.opcaoUsuario != "4")
            {

                switch (menu.opcaoUsuario)
                {
                    case "1":
                        Console.WriteLine("\nDigite o nome do aluno: ");
                        aluno.Nome = Console.ReadLine();

                        Console.WriteLine("\nDigite a nota do aluno: ");
                        if (decimal.TryParse(Console.ReadLine(), out decimal nota))
                        {
                            aluno.Nota = nota;

                        }
                        else
                        {
                            throw new ArgumentException("Valor da nota deve ser decimal.");
                        }

                        alunos[indice] = aluno;
                        indice++;
                        break;

                    case "2":
                        foreach (Aluno aluno2 in alunos)
                        {
                            if (aluno2.Nome != null)
                            {
                                Console.WriteLine($"\nNome: {aluno2.Nome}, Nota: {aluno2.Nota}");
                            }
                        }
                        break;

                    case "3":

                        decimal media = 0;

                        foreach (Aluno aluno2 in alunos)
                        {
                            if (aluno2.Nota != null)
                            {
                                media += aluno2.Nota;
                            }
                        }

                        media /= indice;

                        Conceito conceitoAlunos = new Conceito();

                        if (media <= 2)
                        {
                            conceitoAlunos = Conceito.E;
                        }
                        else if (media <= 4)
                        {
                            conceitoAlunos = Conceito.D;
                        }
                        else if (media <= 6)
                        {
                            conceitoAlunos = Conceito.C;
                        }
                        else if (media <= 8)
                        {
                            conceitoAlunos = Conceito.B;
                        }
                        else if (media < 10)
                        {
                            conceitoAlunos = Conceito.A;
                        }

                        Console.WriteLine($"Media dos alunos: {media} -- Conceito da turma é {conceitoAlunos}");
                        break;

                    case "4":
                        //Sair do Menu
                        break;

                    default:
                        Console.WriteLine(" Escolha uma das opções do menu.");
                        break;

                }
                menu.chamarMenu();
            }

            Console.WriteLine("Programa finalizado!");
        }
    }
}