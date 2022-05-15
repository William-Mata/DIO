public class Posicao
{
    public Posicao proximo;
    public object item;


    public Posicao(Posicao proximo, object item)
    {

        this.proximo = proximo;
        this.item = item;
    }

}