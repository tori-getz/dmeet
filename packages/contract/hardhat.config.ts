import type { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox-viem';
import dotenv from 'dotenv';
import * as path from 'node:path';

dotenv.config({
  path: path.resolve(__dirname, '..', '..', '.env'),
});

const config: HardhatUserConfig = {
  solidity: '0.8.24',
  networks: {
    hardhat: {
      // accounts: {
      //   mnemonic: process.env.SEED_PHRASE,
      // },
      chainId: 1337,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY!],
    },
  },
};

export default config;
