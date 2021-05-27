// Web3
import Web3 from 'web3';

export const loadWeb3 = async () => {
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
      'Non-Ethereum browser detected. You should consider Downloading MetaMask'
    );
  }
};
