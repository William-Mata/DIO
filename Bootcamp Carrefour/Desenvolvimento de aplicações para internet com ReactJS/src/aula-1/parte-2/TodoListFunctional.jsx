import React, { useState } from 'react';

const TodoListFunctional = () => {

  const [stacks, setStacks] = useState(['Java', 'C#', 'SQL - MySQL', 'MongoDB', 'HTML', 'CSS', 'JS', 'BootStrap']);

  const addSkill = (skill) => {
    setStacks([...stacks, skill])
  }

  const removerSkill = () => {
    setStacks([...stacks.slice(1)])
  }

  return (
    <div className="bloco-lista">
      <p>Minha lista</p>
      <ul className="lista-estilizada">
        {stacks.map(item => <li className='item-cor'>{item}</li>)}
      </ul>
      <button onClick={() => addSkill('React')}>Add Item</button>
      <button onClick={() => removerSkill()}>Remove Item</button>
    </div>
  );
}

export default TodoListFunctional;
