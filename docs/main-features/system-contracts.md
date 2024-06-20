### Zero Network Contract Addresses

**Mainnet:** Coming soon

### Sepolia L1 Contract Addresses

- **DiamondInit:** [**0x457701fDC6CaBc7D2EfB9b85f7faB0EE4bBD3c36**](https://sepolia.etherscan.io/address/0x457701fDC6CaBc7D2EfB9b85f7faB0EE4bBD3c36#code)
- **DiamondProxy:** [**0x9a6de0f62Aa270A8bCB1e2610078650D539B1Ef9**](https://sepolia.etherscan.io/address/0x9a6de0f62Aa270A8bCB1e2610078650D539B1Ef9#code)
- **DiamondUpgrade:** [**0xA6b2731c08385782fBaCfCcD63D3c7fc7b798E47**](https://sepolia.etherscan.io/address/0xA6b2731c08385782fBaCfCcD63D3c7fc7b798E47#code)
- **ExecutorFacet:** [**0xe6cc1455217a8BBCF2c663607A0b8c200B8732F1**](https://sepolia.etherscan.io/address/0xe6cc1455217a8BBCF2c663607A0b8c200B8732F1#code)
- **GettersFacet:** [**0x10f328c20dD2469b7e88f374B9794471599c1c8D**](https://sepolia.etherscan.io/address/0x10f328c20dD2469b7e88f374B9794471599c1c8D#code)
- **Verifier:** [**0xf07ea72e071bc21612449570C365Ff3DC9176Ecb**](https://sepolia.etherscan.io/address/0xf07ea72e071bc21612449570C365Ff3DC9176Ecb#code)
- **MailboxFacet:** [**0x2ed8eF54a16bBF721a318bd5a5C0F39Be70eaa65**](https://sepolia.etherscan.io/address/0x2ed8eF54a16bBF721a318bd5a5C0F39Be70eaa65#code)
- **ValidatorTimelock:** [**0x8CaC0a609A314E4161b8070cdEe065060B2486A1**](https://sepolia.etherscan.io/address/0x8CaC0a609A314E4161b8070cdEe065060B2486A1#code)
- **AllowList:** [**0x7546a21cd4D74fc98Ef1A50145dfd8c043e2096F**](https://sepolia.etherscan.io/address/0x7546a21cd4D74fc98Ef1A50145dfd8c043e2096F#code)

### Zero Testnet Contracts

- **Zerion Paymaster:** 0x123…123

### Appendix: Definitions of Terms

- **DiamondInit:** Initializes the diamond proxy.
- **DiamondProxy:** Uses EIP-2535 diamond proxy pattern for upgradeable contracts.
- **DiamondUpgrade:** Manages upgrades for diamond facets.
- **ExecutorFacet:** Processes L2 blocks and checks the validity of zk-proofs.
- **GettersFacet:** Provides read-only *view* and *pure* methods.
- **Verifier:** Validates zk-proofs.
- **MailboxFacet:** Manages L1-L2 communication.
- **ValidatorTimelock:** Delays batch execution for security.
- **AllowList:** Controls the access permissions list.

For detailed information on contract functionalities, refer to the official [zkSync documentation](https://docs.zksync.io/build/developer-reference/era-contracts/system-contracts).