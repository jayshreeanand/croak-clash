import Web3 from 'web3';
import AIApocalypseChainContract from './contracts/AIApocalypseChainContract.json';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
const contractAddress = '0xa6ad89728a5965d6f14de1cd513198159249dd6b89379d4e472c31a99d6e54b8';
const contract = new web3.eth.Contract(AIApocalypseChainContract.abi, contractAddress);

export { web3, contract }; 