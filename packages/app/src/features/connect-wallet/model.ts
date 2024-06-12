import { createEffect } from 'effector';
import { connectWallet } from './api';

export const connectWalletFx = createEffect({
  name: 'connect wallet',
  handler: async () => {
    return connectWallet();
  },
});
