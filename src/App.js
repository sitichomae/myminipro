import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [balance, setBalance] = useState(0);
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState(null);

  const handleDeposit = () => {
    if (transactionAmount > 0) {
      setBalance(balance + transactionAmount);
      setTransactionAmount(0);
      setTransactionType('deposit');
    }
  };

  const handleWithdraw = () => {
    if (transactionAmount > 0 && balance >= transactionAmount) {
      setBalance(balance - transactionAmount);
      setTransactionAmount(0);
      setTransactionType('withdraw');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Savings Account</h1>
      <p className="balance">Current Balance: ${balance}</p>
      <div className="transaction">
        <input
          type="number"
          className="form-control mb-2 mr-sm-2"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(parseInt(e.target.value))}
          placeholder="Enter amount"
        />
        <button className="btn btn-success mr-2" onClick={handleDeposit}>Deposit</button>
        <button className="btn btn-danger" onClick={handleWithdraw}>Withdraw</button>
      </div>
      {transactionType && (
        <p className={`transaction-msg alert alert-success mt-3`}>
          {transactionType === 'deposit' ? 'Deposit' : 'Withdrawal'} successful!
        </p>
      )}
    </div>
  );
}

export default App;
