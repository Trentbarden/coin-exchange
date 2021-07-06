import React from 'react';
import styled from 'styled-components';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import Exchangeheader from './components/ExchangeHeader/ExchangeHeader';

const Div = styled.div`
    text-align: center;
    background-color: rgb(4, 6, 85);
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 1000,
      coinData: [
        
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 9999.99
        },

        {
          name: 'Ethereum',
          ticker: 'Eth',
          price: 299.99
        },

        {          name: 'Tether',
          ticker: 'USDT',
          price: 1
        },

        {
          name: 'Ripple',
          ticker: 'XRP',
          price: .4
        },

        {
          name: 'Bitcoin Cash',
          ticker: 'XBCH',
          price: 289.00
        },

      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map( function({ticker, name, price}) {
      let newPrice = price;
      if( valueChangeTicker === ticker ){
        const randomPercentage = .995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage
      }
      return{
        ticker,
        name,
        price: newPrice
      }
    });
    this.setState({coinData: newCoinData })
  }
  render() {  
    return (
      <Div className="App">
         <Exchangeheader />
         <AccountBalance amount= {this.state.balance}/>
         <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh}/>
         
        
      </Div>
    );
  }
  
}

export default App;
