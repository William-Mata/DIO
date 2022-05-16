using System.Diagnostics;
class Program
{
    static void Declaracoes()
    {
        byte by;
        int i;
        long l;
        const byte cby = 8;
        const int ci = 12;
        const long cl = 1997L;

        double d;
        float f;
        const double cd = 9.0D;
        const float cf = 30.0F;

        char c;
        String s;
        const char cc = 'W';
        const String cs = "WILLIAM";

        Boolean bo;
        const Boolean cbo = true;

    }

    static void IstrucaoIf()
    {

        Boolean condicao = true;

        if (condicao)
        {
            Console.WriteLine("IF ELSE - A condição é verdadeira.");

        }
        else if (!condicao)
        {
            Console.WriteLine("IF ELSE - A condição é falsa.");

        }
        else
        {
            Console.WriteLine("IF ELSE - A condição não é verdadeira e nem falsa.");

        }
    }

    static void IntrucaoSwitch()
    {

        int caso = 1;

        switch (caso)
        {

            case 1:
                Console.WriteLine($"Switch - {caso}");
                break;

            case 2:
            case 3:
                Console.WriteLine($"Switch - {caso}");
                break;

            default:
                Console.WriteLine($"Switch - {caso}");
                break;
        }
    }

    static void InstrucaoWhile()
    {
        int condicao = 1;

        while (condicao <= 5)
        {
            condicao++;
            Console.WriteLine($"While - {condicao}");
        }
    }

    static void InstrucaoDoWhile()
    {

        int condicao = 5;

        do
        {
            Console.WriteLine($"Do While - {condicao}");
            ++condicao;
        } while (condicao >= 1);
    }

    static void InstrucaoFor()
    {

        int[] arri = { 8, 30, 12, 9, 25, 8, 16, 4, 17, 30, 21, 3 };

        for (int aux = 0; aux <= arri.Length; aux++)
        {
            Console.WriteLine($"For - {arri[aux]}");
        }
    }

    static void InstrucaoForeach()
    {
        int[] arri = { 8, 30, 12, 9, 25, 8, 16, 4, 17, 30, 21, 3 };

        foreach (int valor in arri)
        {
            Console.WriteLine($"Foreach - {valor}");
        }
    }

    static void InstrucaoBreak()
    {
        int i = 1;

        while (true)
        {
            i++;
            if (i == 3)
            {
                Console.WriteLine("Break");
                break;
            }

        }
    }

    static void InstrucaoContinue()
    {
        int i = 1;

        while (true)
        {
            i++;
            if (i <= 3)
            {
                Console.WriteLine("Continue");
                continue;
            }

            break;
        }
    }

    static string InstrucaoReturn()
    {
        return "William Mata";
    }

    static void InstrucaoTryCatchFinallyThrow()
    {
        int y = 10;
        char c = 'w';

        if (y == 0)
        {
            throw new DivideByZeroException("Try, Catch, Finally Throw - Não é possivel divir por 0.");
        }

        try
        {
            if (y <= c)
            {
                throw new InvalidOperationException($"Try, Catch, Finally Throw - c contém uma letra {c}");
            }
        }
        catch (InvalidOperationException e)
        {
            Console.WriteLine(e.Message);
        }
        catch (Exception e)
        {
            Console.WriteLine("Try, Catch, Finally Throw - Erro generico: " + e.Message);
        }
        finally
        {
            Console.WriteLine("Try, Catch, Finally Throw - Fim do Programa.");
        }

    }

    static void InstrucaoUsing()
    {
        using (System.IO.TextWriter w = System.IO.File.CreateText("teste.txt"))
        {

            w.WriteLine("Linha 1");
            w.WriteLine("Linha 2");
            w.WriteLine("Linha 3");
        }
    }
}