import './App.css';

const customers = [
    {
        id: 1,
        name: 'william',
        skills: ['Java', 'C#', 'JavaScript', 'HTML', 'CSS', 'BOOTSTRAP', 'SQL', 'MONGODB', 'MYSQL']
    },
    {
        id: 2,
        name: 'nina',
        skills: ['Lógica', 'HTML', 'WORD', 'EXCELL']
    },
    {
        id: 3,
        name: 'walace',
        skills: ['WHATSAPP', 'INSTAGRAM', 'FACEBOOK']
    },
    {
        id: 4,
        name: 'alex',
        skills: ['WHATSAPP', 'INSTAGRAM', 'FACEBOOK']
    },

]



function App2() {

    return (
        <div className="App">
            <ul >
                {customers.map((costumer) =>
                    <li key={'costumer'+costumer.id}>
                        {costumer.name}
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
    );
}

export default App2;
