import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { Web3Provider } from "@ethersproject/providers";
import { parseEther } from "@ethersproject/units";

let connector;

export const connectWallet = async () => {
  if (!connector) {
    connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org",
    });
  }

  if (!connector.connected) {
    connector.createSession();
  }

  connector.on("connect", (error, payload) => {
    if (error) {
      throw error;
    }

    const { accounts, chainId } = payload.params[0];
    console.log(accounts, chainId);

    // Prevent re-defining the ethereum property
    if (!window.ethereum) {
      Object.defineProperty(window, 'ethereum', {
        value: connector,
        writable: false,
      });
    }
  });

  connector.on("session_update", (error, payload) => {
    if (error) {
      throw error;
    }

    const { accounts, chainId } = payload.params[0];
    console.log(accounts, chainId);
  });

  connector.on("disconnect", (error, payload) => {
    if (error) {
      throw error;
    }

    connector = null;
  });

  QRCodeModal.open(connector.uri, () => {
    console.log("QR Code Modal closed");
  });
};

export const getProvider = () => {
  if (!connector) throw new Error("Wallet not connected");

  return new Web3Provider(connector);
};

export const claimZero = async () => {
  const provider = getProvider();
  const signer = provider.getSigner();
  const contractAddress = '0xC6d745dd5Fb34A5d4A8F87105cb4b9E9A0A28795';

  const zeroNetwork = {
    chainId: '0x440575', // Replace with Zero Network Testnet Chain ID in hex
    chainName: 'Zero Network Testnet',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.zerion.io/v1/zero-sepolia'], // Replace with the actual RPC URL
    blockExplorerUrls: ['https://zerion.calderaexplorer.xyz/contract_verification']
  };

  try {
    await provider.send('wallet_addEthereumChain', [zeroNetwork]);

    const tx = await signer.sendTransaction({
      to: contractAddress,
      value: parseEther('0')
    });

    await tx.wait();
    alert('Transaction successful! ZERO claimed.');
  } catch (error) {
    console.error(error);
    alert('Transaction failed');
  }
};
