import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Td = styled.td `
margin: 25rem;
border: solid white;
`;   

/*.coin-row td {
    margin-top: auto ;
    color:white;
    font-size: 30px;
    font-weight: 300;
    border: 2px solid white;
    width: 25vh;
}*/

export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    /*componentDidMount(){
        const callback = () => {
            const randomPercentage = .995 + Math.random() * 0.01;

            this.setState( function(oldState) {
                return{
                    price: oldState.price * randomPercentage
                };
            })

        }
        setInterval(callback, 1000); 
    } */

    handleClick(event) {
        //Prevent the default action of submitting the form
        event.preventDefault();
        
        const randomPercentage = .995 + Math.random() * 0.01;
        this.setState( function(oldState) {
            return{
                price: oldState.price * randomPercentage
            };
        });
    }
    render() {
        return ( 
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.state.price}</Td>
                <Td>
                    <form action="#" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>
                    </form>
                </Td>
            </tr>
        )
    }
}

Coin.propTypes= {
name: PropTypes.string.isRequired,
ticker: PropTypes.string.isRequired,
price: PropTypes.number.isRequired, 
}