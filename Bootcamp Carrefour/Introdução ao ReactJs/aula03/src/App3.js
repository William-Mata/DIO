import './App.css';

let clicked = true;

const showEvent = (e) => {


    if (!clicked) {
        clicked= true;
        console.log(e)
    } else {
        clicked = false;
    }
}


const btn = <button onClick={showEvent}>Mostrar Evento</button>

function App3() {

    return (
        <div className="App">
            <h1>WILLIAM MATA</h1>

            {btn}
        </div >
    );
}

export default App3;
