import styled from 'styled-components';
import { Typography, CardContent } from '../../../components/index';


export const LabelStyled = styled(Typography)`
    font-weigth: 500;
    font-size: 1.5rem;

`

export const ValueStyled = styled(Typography)`
    font-weigth: 400;
    font-size: 2.5rem;
`

export const CardContentStyled = styled(CardContent)`
    border-left: 9px solid ${({color}) => color || '#5d78ff'}
`

export const CardPanelContentStyled = styled(CardContent)`
    display: flex;
    justify-content: space-between;
    padding: 25px;
`

export const ItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 150px;
`