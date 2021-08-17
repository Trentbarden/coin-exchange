import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Td = styled.td `
margin: 25rem;
border: 1px solid white;`;   


export default function Coin(props)  {
    
   const handleClick = (event) =>{
        //Prevent the default action of submitting the form
        event.preventDefault();


        props.handleRefresh(props.tickerId);
    }
     return ( 
            <tr>
                <Td>{props.name}</Td>
                <Td>{props.ticker}</Td>
                <Td>${props.price}</Td>
                {props.showBalance ? <Td>{props.balance}</Td> : null}
                <Td>
                    <form action="#" method="POST">
                    <button onClick={handleClick}>Refresh</button>
                    </form>
                </Td>
            </tr>
        )
    
}

Coin.propTypes= {
name: PropTypes.string.isRequired,
ticker: PropTypes.string.isRequired,
price: PropTypes.number.isRequired, 
}