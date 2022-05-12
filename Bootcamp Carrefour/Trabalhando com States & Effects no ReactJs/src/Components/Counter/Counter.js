

export function Counter() {

    let idade = 15;

    function aniversario() {
        idade += 1;
        document.getElementById('counter').innerHTML = idade;
        console.log(idade);
    }

    return (
        <>
            <h2 id="counter">{idade}</h2>
            <button onClick={aniversario}>Aniversario</button>
        </>
    )
}