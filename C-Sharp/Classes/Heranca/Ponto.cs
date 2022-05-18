public class Ponto
{

    public int x, y;
    private int distancia;

    public Ponto(int x, int y)
    {
        this.x = x;
        this.y = y;
    }

    protected void CalcularDistancia()
    {
        this.distancia = this.x + this.y;
    }

    private void CalcularDistancia2()
    {
        this.distancia = this.x * this.y;
    }

    public virtual void CalcularDistancia3()
    {
         this.distancia = this.x - this.y;
    }

}