import styled from 'styled-components';
import React from 'react';


export function Button(props) {
    const Botao = styled.button`
    color: ${props => props.color};
    border: ${props.border};
    border-radius: 10px;
    font-size: 30px;
    background: ${props.background};
    `;


    return(
        <Botao color={props.color} onClick={props.onClick}>{props.children} </Botao>
    )
}