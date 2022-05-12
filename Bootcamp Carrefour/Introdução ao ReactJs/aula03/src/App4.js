import './App.css';
import Button from './components/Button';
import mock from './mock'



const removeCostumer = (e, id) => {
    console.log(e);
    alert("ID do cliente: " + id)
} 

export function App4(){
    return(
        <div className="App">
           <div className="App">
            <ul >
                {mock.map((costumer) =>
                    <li key={'costumer'+costumer.id}>
                        {costumer.name} <Button onClick={(e) => removeCostumer(e, costumer.id) }>Delete</Button>
                        {/* <ol>
                            {costumer.skills.map((skill) => 
                                <li key={costumer.id+'skill'+skill}>
                                    {skill}
                                </li>
                            )}
                        </ol> */}
                    </li>
                )}
            </ul>
        </div >

        </div>
    )

}