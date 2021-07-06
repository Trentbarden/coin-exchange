import React, { Component } from 'react'
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
color: white;
    margin: 25px auto 25px auto ;
    display: inlineblock;
    font-size: 1.4rem;
`;

export default class CoinList extends Component {
    render() {
        return (
            <Table>
              <thead>
               <tr>
                 <th>Name</th>
                 <th>Ticker</th>
                 <th>Price</th>
               </tr>
              </thead>
             <tbody > 
               {
                 this.props.coinData.map(({name, ticker, price}) =>
                  <Coin key= {ticker} 
                        handleRefresh={this.props.handleRefresh} 
                        name={name} 
                        ticker={ticker} 
                        price={price}/> 
                )
               }
             </tbody>
           </Table>
        )
    }
}

