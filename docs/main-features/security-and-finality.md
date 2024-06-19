### **Finality on Zero**

As with other L2 rollup systems, finality and security on Zero is tied to the finality and security of the underlying L1 Ethereum chain. Finality on Zero is the time taken from sending a transaction to when the L1 smart contract updates the L2 state. The process has a few steps:

- Fill a batch with transactions (usually takes a few minutes).
- Commit the batch to Ethereum.
- Generate a proof for the whole batch (usually takes around an hour).
- Submit the proof for verification by the Ethereum smart contract.
- Finalize the batch on Ethereum (delayed by ~21 hours as a security measure during the alpha phase).

<aside>
⏱️ When this process is complete, around ~24 hours in total, the batch is as final as any Ethereum transaction included in the same Ethereum block.

</aside>

### **Instant confirmations**

Even though Zero finality is usually around 24 hours, users may consider transactions submitted to Zero as having instant confirmation. Transaction details are instantly displayed in the UI and API (although they are marked as unconfirmed), and the transferred assets can be used immediately to make further transfers.

### Open Source[](https://docs.base.org/docs/#open-source)

Zero is built on the fully permissive MIT/Apache licensed ZK Stack, created by Matter Labs. The Zerion Wallet’s core code base is open-sourced. Zero also uses zkSync's contracts and sequencer which are already audited.

### Built by Zerion

Developers can tap into Zerion’s infrastructure and applications to distribute their dapps to hundreds of thousands of active users. Built by the core team at Zerion, we’re committed to helping you build the best onchain experience on Zero.

### **Bug Bounty Program**

To ensure that Zero is the most secure onchain network available, we offer a bug bounty program open to everyone! Our active bug bounty program has rewards of up to $25,000 (paid in USDC, DAI, or ETH).

<aside>
🔒 To get a rundown on how our bounty works, please visit our Immunefi Bug Bounty Portal: [https://immunefi.com/bounty/zerion/](https://help.zerion.io/en/articles/5351224-does-zerion-have-a-bug-bounty)

</aside>