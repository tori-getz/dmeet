export const connectWallet = async () => {
  const accounts = await window.ethereum?.request({
    method: 'eth_requestAccounts',
  });

  return accounts;
};
