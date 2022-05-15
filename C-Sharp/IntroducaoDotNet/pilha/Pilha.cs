public class Pilha{
    Posicao primeiro;

    public void Empilhar(object item){
        primeiro = new Posicao(primeiro, item);
    }

    public object Desempilhar(){

        if(primeiro == null){
            throw new InvalidOperationException("A pilha já está vazia.");
        }

        Posicao removido = primeiro;
        primeiro = primeiro.proximo;
        return removido.item;
    }

}

