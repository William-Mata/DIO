public class Out
{

    static void Dividir(int x, int y, out int resultado, out int resto)
    {
        resultado = x / y;
        resto = x % y;
    }


    public void Dividir(){
        Dividir(10, 3, out int resultado, out int resto);
        System.Console.WriteLine($"{resultado} - {resto}");
    }
}