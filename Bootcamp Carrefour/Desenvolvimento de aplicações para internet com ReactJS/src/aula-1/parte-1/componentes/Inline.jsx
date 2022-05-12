import React from 'react';

// 1. Como estilizar uma lista usando estilos inline.

const listaEstilizada = {
  background: 'black',
  marginTop: '10px',
  border: '1px solid blue',
  padding: '25px'
};

const itemCor = {
  color: '#4f4f'
};

const Inline = () => (
  <div style={{
    display: 'flex', flexDirection: 'column',
    justifyContent: 'space-around', marginRight: '20px'
  }}>

    <h2>Minha lista Style</h2>
    <ul style={listaEstilizada}>
      <li style={itemCor}>Java</li>
      <li style={itemCor}>C#</li>
      <li style={itemCor}>SQL - MySQL</li>
      <li style={itemCor}>MongoDB</li>
      <li style={itemCor}>HTML</li>
      <li style={itemCor}>CSS</li>
      <li style={itemCor}>JS</li>
      <li style={itemCor}>BootStrap</li>
      <li style={itemCor}>React</li>
    </ul>
  </div >
);

export default Inline;