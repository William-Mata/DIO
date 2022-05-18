class Program
{

    public static void Main(string[] args)
    {
        Ponto p1 = new Ponto(10, 20);

        Ponto p2 = new Ponto3D(10, 20, 30);

        p1.CalcularDistancia3();

        ///-------------------///

        Out out1 = new Out();

        out1.Dividir();

        ///-------------------///

        Refs ref1 = new Refs();

        ref1.Inverter();

    }
}