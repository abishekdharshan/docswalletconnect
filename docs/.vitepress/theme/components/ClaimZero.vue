<template>
    <div class="claim-zero">
      <h1>Claim ZERO</h1>
      <button @click="connectWallet">Connect Web3 Wallet</button>
      <button @click="claimZero" :disabled="!walletConnected">Claim ZERO</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { ThirdwebSDK } from '@thirdweb-dev/sdk';
  import { ethers } from 'ethers';
  
  export default {
    name: 'ClaimZero',
    setup() {
      const walletConnected = ref(false);
      const provider = ref(null);
      const signer = ref(null);
  
      const connectWallet = async () => {
        try {
          provider.value = new ethers.providers.Web3Provider(window.ethereum);
          await provider.value.send("eth_requestAccounts", []);
          signer.value = provider.value.getSigner();
          walletConnected.value = true;
        } catch (error) {
          console.error("Failed to connect wallet:", error);
        }
      };
  
      const claimZero = async () => {
        const sdk = new ThirdwebSDK(signer.value);
        const contractAddress = '0xC6d745dd5Fb34A5d4A8F87105cb4b9E9A0A28795';
  
        const zeroNetwork = {
          chainId: 5, // Goerli testnet chain ID for example
          rpcUrl: 'https://rpc.ankr.com/eth_goerli',
        };
  
        try {
          await sdk.wallet.switchNetwork(zeroNetwork.chainId);
          const tx = await signer.value.sendTransaction({
            to: contractAddress,
            value: ethers.utils.parseEther('0'),
          });
          await tx.wait();
          alert('Transaction successful! ZERO claimed.');
        } catch (error) {
          console.error(error);
          alert('Transaction failed');
        }
      };
  
      return {
        connectWallet,
        claimZero,
        walletConnected,
      };
    },
  };
  </script>
  
  <style scoped>
  .claim-zero {
    text-align: center;
  }
  button {
    margin: 10px;
    padding: 10px 20px;
    background-color: #2962ef;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  button:hover:not(:disabled) {
    background-color: #4375f1;
  }
  </style>
  