import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className= "App-title">
          The Greatest Coin Exchange of All Time
        </h1>
         <table className= "coin-table">
            <thead>
             <tr>
               <th>Name</th>
               <th>Ticker</th>
               <th>Price</th>
             </tr>
            </thead>
           <tbody> 
             <Coin name= "Bitcoin" ticker= "BTC" price= {9999.99}/>
             <Coin name= "Etherum" ticker= "Eth" price= {299.99}/>
             <Coin name= "Tether" ticker= "USDT" price= {1}/>
             <Coin name= "Ripple" ticker= "XRP" price= {.4}/>
           </tbody>
         </table>
        
      </header>
    </div>
  );
}

export default App;
