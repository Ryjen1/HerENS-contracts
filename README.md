# HerENS

A decentralized chat application built with Solidity and Foundry, featuring peer-to-peer messaging, group chats, and user registration with display names

## Contracts

- **WhisprChat**: Handles messaging, group creation, and Chainlink automation for posting price updates.
- **WhisprRegistry**: Manages user registration with ENS names and avatars.

## Deployed Contracts

- **WhisprChat**: [0x135Ddb25bf49cD5fDb10191E5fdE6bCa826ca784](https://sepolia.basescan.org/address/0x135Ddb25bf49cD5fDb10191E5fdE6bCa826ca784) (Base Sepolia)
- **WhisprRegistry**: [0xe60a2cF8c889f7637a54f789052B6011e5F21abe](https://sepolia.basescan.org/address/0xe60a2cF8c889f7637a54f789052B6011e5F21abe) (Base Sepolia)

## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

-   **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
-   **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
-   **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
-   **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

Deploy WhisprChat:

```shell
$ forge script script/DeployWhisprChat.s.sol --rpc-url <your_rpc_url> --private-key <your_private_key>
```

Deploy WhisprRegistry:

```shell
$ forge script script/DeployWhisprRegistry.s.sol --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
