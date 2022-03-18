import { useState,useEffect } from 'react';
import { ethers } from 'ethers';
//import {abi } from './artifacts/contracts/Token.sol/Token.json';
import Token  from './artifacts/contracts/Token.sol/Token.json';
import './App.css';

const tokenAddress ="0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {

  const [balance, setBalance] = useState();

  useEffect(()=>{
  getBalance();
  },[])

  async function getBalance()
  {
    if(typeof window.ethereum !=="undefined")
    {
      const account = await window.ethereum.request({method:'eth_requestAccounts'});
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress,Token.abi,provider);
      const balance = await contract.balanceOf(account[0]);
      console.log(account[0]);
      setBalance(balance/10**18);
    }
  }
  return (
    <div className="App">
<p>vous avez {balance} Todjom</p>
    </div>
  );
}

export default App;
