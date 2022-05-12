import './App.css';

const btn1 = <button>Exibir Histórico</button>;
const btn2 = <button>Cadastrar Cliente</button>;
const hasCustomer = false;

const showHistory = (
   <div>
    <p>Clique no botão para visualizar o histórico dos clientes</p>
    {btn1}
  </div>
)

const addCustomer = (
    <div>
    <p>Clique no botão para cadastrar cliente</p>
    {btn2}
  </div>
)

const showCostumer = () => {
  if(hasCustomer){
    return <h1>William Mata</h1>;
  } 
}


function App() {

  return (
    <div className="App">
      {showCostumer()}
      {hasCustomer ? ( showHistory ) : (  addCustomer )}
    </div >
  );
}

export default App;
