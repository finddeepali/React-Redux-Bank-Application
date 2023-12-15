import React, { Component } from "react";
import formatNumber from "format-number";
import store from "./store";
import { withdrawMoney } from "./actions";
//import photographer from "./images/girl.png";
import logo from './images/test.jpg';
import "./App.css";

class App extends Component {
  render() {
    const { totalAmount, username } = store.getState();

    const handleWithdrawMoney = e => {
      const amount = e.target.dataset.amount;
      store.dispatch(withdrawMoney(amount));
    };

    return (
      <div className="App">
        <img className="App__userpic" src={logo} alt="photographer" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button data-amount="10000" onClick={handleWithdrawMoney}>
            WITHDRAW $10,000
          </button>
          <button data-amount="5000" onClick={handleWithdrawMoney}>
            WITHDRAW $5,000
          </button>
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;