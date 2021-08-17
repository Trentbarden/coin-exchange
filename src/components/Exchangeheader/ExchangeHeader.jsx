import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Img = styled.img`
height: 6rem;
    pointer-events: none;
`;

const H1 = styled.h1`
color:rgb(244, 248, 240);
`;

const Header = styled.header`
background-color: rgb(2, 1, 53);
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
`;


  
  
  
  
  
  

export default function ExchangeHeader(props) {
    
    return (
        <Header>
        <Img src={logo} alt="React Logo" />
        <H1>
            The Greatest Coin Exchange of All Time
        </H1>
        </Header>
    )
    
}

