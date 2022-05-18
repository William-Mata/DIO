public class Refs
{

    static void Inverter(ref int x, ref int y)
    {
        int aux = x; 
        x = y;
        y = aux;
    }

    public void Inverter(){
        int i = 1, j = 2;
        Inverter(ref i, ref j);
        System.Console.WriteLine($"{i} - {j}");
    }

}