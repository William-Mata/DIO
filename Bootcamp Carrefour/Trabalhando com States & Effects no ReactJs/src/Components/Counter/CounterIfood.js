import styled from 'styled-components';
import React from 'react';
import { Button } from '../Button/Button';
import { useState, useEffect } from 'react';

export function CounterIfood() {
    const [qtd, setQtd] = useState(0);
    const [valorTot, setValorTot] = useState(0);
    const [color, setColor] = useState('#4f4f4f');

    const Bloco = styled.div`
        width: 5%;
        padding: 0 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        margin: auto;
        border: 1px solid black;
        border-radius: 10px;
        margin-bottom: 20px;
    `;


    useEffect(() => {
        setValorTot(qtd * 4.50);
    }, [qtd]);

    function addItem() {
        setQtd(qtd + 1);
        if (color === '#4f4f4f') {
            setColor('red');
        }
    }

    function removeItem() {
        if (qtd > 0) {
            setQtd(qtd - 1);
            setColor('red');
        } else {
            setColor('#4f4f4f');
        }
    }


    return (
        <>
            <Bloco>
                <Button color={color} onClick={removeItem} border='none' background='none'> - </Button>
                <h2>{qtd}</h2>
                <Button color="red" onClick={addItem} border='none' background='none'> + </Button>
            </Bloco>
            <Button color="black" onClick='' border='4px solid black' background='red'> R$: {valorTot.toFixed(2)} </Button>
        </>
    )
}