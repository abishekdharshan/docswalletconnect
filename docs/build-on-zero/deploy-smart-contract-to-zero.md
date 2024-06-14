# How to deploy a smart-contract to Zero

Deploying a smart contract to Zero is a straightforward process that is similar to deploying contracts in the zkSync Era. The only difference lies in the network settings, which can be set differently depending on the tooling.

Below we describe the process for both **Hardhat** and **Foundry**.

## Hardhat

Hardhat is the most popular tool for development, testing, deploying and verifying contracts. 

### Set up plugins

To make Hardhat compatible with the Zero Network, add zkSync's plugins to Hardhat's configuration file.

The main plugin you will need is [@matterlabs/hardhat-zksync](https://docs.zksync.io/build/tooling/hardhat/hardhat-zksync). It incapsulates all the necessary plugins and provides convenient methods to access them.

For compiling smart contracts written in Solidity or Vyper, you'll use `@matterlabs/hardhat-zksync-solc` or `@matterlabs/hardhat-zksync-vyper` respectively.

You will also need `hardhat-zksync-deploy` for deploying regular smart contracts and `hardhat-zksync-upgradable` for upgradable smart contracts.

Click [here](https://docs.zksync.io/build/tooling/hardhat/getting-started) to learn more about these plugins and their configurations.

### Configure networks

The following is an additional network setting required to work with Zero Network.

```tsx
networks: {
  zeroTestnet: {
    url: 'https://rpc.zksync.caldera.dev',
    zksync: true,
    ethNetwork: 'sepolia',
    verifyURL: 'https://explorer.zksync.caldera.dev/contract_verification',
  }
}
```

## Foundry

### Install forked version of Foundry

Instead of the official version of foundry, `foundry-zksync` should be used. It is a specialized fork of [**Foundry**](https://github.com/foundry-rs/foundry), tailored for zkSync Stack networks. Note, that `foundry-zksync` is currently in its **alpha stage.**

The full instructions for installation and initial setup can be found [here](https://docs.zksync.io/build/tooling/foundry/getting-started).

### Network parameters

All foundry commands have additional `--rpc-url` , `--chain` , and `--zksync` parameters.

The following is the example use of these parameters in Zero Network case.

```tsx
--rpc-url https://rpc.zksync.caldera.dev --chain 111222333 --zksync
```
