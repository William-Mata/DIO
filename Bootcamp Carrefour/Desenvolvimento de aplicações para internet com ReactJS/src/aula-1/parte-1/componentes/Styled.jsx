import React from 'react';
import styled from 'styled-components';

// 3. Como estilizar uma lista usando styled-components.

const BlocoLista = styled.div`
	display: flex; 
	flex-direction: column; 
	justify-content: space-around;
	margin-left: 20px;
`;

const List = styled.ul`
	background: black;
	margin-top: 10px;
	border: 1px solid ${props => props.color || 'blue'};
  	padding: 25px;
`;

const ListItem = styled.li`
	color: red;
`;

const Styled = () => (
	<BlocoLista>
		<h2>Minha lista Styled Component</h2>
		<List color="black">
			<ListItem>Java</ListItem>
			<ListItem>C#</ListItem>
			<ListItem>SQL - MySQL</ListItem>
			<ListItem>MongoDB</ListItem>
			<ListItem>HTML</ListItem>
			<ListItem>CSS</ListItem>
			<ListItem>JS</ListItem>
			<ListItem>BootStrap</ListItem>
			<ListItem>React</ListItem>
		</List>
	</BlocoLista>
);

export default Styled;
