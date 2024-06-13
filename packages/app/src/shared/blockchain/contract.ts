import { createStore, createEffect } from 'effector';
import { Contract, ethers } from 'ethers';
import VideoConferenceContract from '@dmeet/contract/artifacts/contracts/DmeetVideoConference.sol/DmeetVideoConference.json';

export const $contract = createStore<Contract | null>(null, {
  name: 'contract',
});

export const addAccountToContractFx = createEffect({
  name: 'add account to contract fx',
  handler: async (account: string) => {
    const provider = new ethers.BrowserProvider(window.ethereum!);
    const signer = await provider.getSigner(account);
    const contract = new ethers.Contract(
      '0x10c0EEa582271F91B6a8A71cDA46b6Ea2780AF50',
      VideoConferenceContract.abi,
      signer
    );

    return contract;
  },
});

$contract.on(addAccountToContractFx.doneData, (_, contract) => contract);
