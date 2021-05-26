// Web3
import Web3 from 'web3';

// React Types
import { FC } from 'react';

const KanuiVote: FC = () => {
  const loadWeb3 = async () => {
    //  @ts-ignore
    if (window.ethereum) {
      //  @ts-ignore
      window.web3 = new Web3(window.ethereum);
      //  @ts-ignore
      await window.ethereum.enable();
      //  @ts-ignore
    } else if (window.web3) {
      //  @ts-ignore
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        'Non-Ethereum browser detected. You should consider MetaMask'
      );
    }
    // @ts-ignore
    console.log(window.ethereum.selectedAddress);
  };
  return (
    <div>
      <button onClick={loadWeb3}> Connect to Metamask </button>
    </div>
  );
};

export default KanuiVote;
