// Contract ABIs
import ElectionAbi from '../contract-json-abi/Election.json';

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

  const loadBlockchainData = async () => {
    // @ts-ignore
    const web3 = window.web3;
    const accounts = web3.eth.getAccounts();
    const account = accounts[0];
    const networkId = await web3.eth.net.getId();
    // @ts-ignore
    const networkData = ElectionAbi.networks[networkId];
    if (networkData) {
      const election = new web3.eth.Contract(
        ElectionAbi.abi,
        networkData.address
      );
      console.log(election);
    } else {
      window.alert('The Smart Contract is not deployed to the current network');
    }
  };

  return (
    <div>
      <button className="" onClick={loadWeb3}>
        {' '}
        Connect to Metamask{' '}
      </button>
    </div>
  );
};

export default KanuiVote;
