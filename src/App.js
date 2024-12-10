import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [data, setData] = useState(null);
  const [trans, setTrans] = useState(null);

  useEffect(() => {
    axios.get('https://alchemist-xko7.onrender.com/users/1/transactions')
    .then(response => {
      console.log('EZ_transactions', response);
      setTrans(response.data);
    })
    .catch(error => {
      console.error(error);
    });
    axios.get('https://alchemist-xko7.onrender.com/portfolio/1')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      {trans?.map((item, index) => (
        <div className="Transaction-List">
          <h3>{item?.transactionType == 'SELL' ? 'SOLD' : 'Bought'} </h3>
          <h3>{item?.totalAmount} </h3>
          <h3>{item?.transactionDate}</h3>
          
        </div>
      ))}
    </div>
  );
}

export default App;
