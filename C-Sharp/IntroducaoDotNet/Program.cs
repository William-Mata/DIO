class Program
{
    static void Main(string[] args)
    {
        Pilha p = new Pilha();

        p.Empilhar("william");
        p.Empilhar("Solange");
        p.Empilhar("Amor");

        Console.WriteLine(p.Desempilhar());
    }
}