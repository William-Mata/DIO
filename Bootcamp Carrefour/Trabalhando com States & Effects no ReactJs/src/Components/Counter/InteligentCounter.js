import { useState } from "react"


export function InteligentCounter(){

    const [idade, setIdade] = useState(15);

    return(
        <>
            <h2>{idade}</h2>
            <button onClick={() => setIdade(idade+1)}>Aniversario</button>
        </>
    )
}