// React
import { useEffect, useState } from 'react';

// Contract ABIs
import ElectionAbi from '../contract-json-abi/Election.json';

// Web3
import Web3 from 'web3';

// React Types
import { FC } from 'react';

const KanuiVote: FC = () => {
  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  const [currentAccount, setCurrentAccount] = useState('');

  const loadWeb3 = async () => {
    //  @ts-ignore
    if (window.ethereum) {
      //  @ts-ignore
      window.web3 = new Web3(window.ethereum);
      //  @ts-ignore
      await window.ethereum.enable();
      window.alert('Web3 Connected');
      //  @ts-ignore
    } else if (window.web3) {
      //  @ts-ignore
      window.web3 = new Web3(window.web3.currentProvider);
      window.alert('Web3 Connected');
    } else {
      window.alert(
        'Non-Ethereum browser detected. You should consider MetaMask'
      );
    }
  };

  const loadBlockchainData = async () => {
    // @ts-ignore
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentAccount(account);
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

  return <div>hey</div>;
};

export default KanuiVote;
