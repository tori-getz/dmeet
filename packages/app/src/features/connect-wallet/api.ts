import { Account } from '~/shared/blockchain';

export const connectWallet = async (): Promise<Account[]> => {
  const accounts = await window.ethereum!.request({
    method: 'eth_requestAccounts',
  });

  return accounts as Account[];
};
