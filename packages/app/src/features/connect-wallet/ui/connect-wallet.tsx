import { Button } from '@nextui-org/react';
import { METAMASK_CONNECTED } from '~/shared/constants';
import { connectWalletFx } from '../model';
import { useNavigate } from '@tanstack/react-router';
import MetamaskLogo from '~/shared/assets/metamask-logo.svg?react';
import { addAccountToContractFx } from '~/shared/blockchain';
import { useState } from 'react';

export const ConnectWallet: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const onClick = async () => {
    try {
      setLoading(true);
      if (!METAMASK_CONNECTED) return alert('Metamask is not installed!');
      const [account] = await connectWalletFx();
      await addAccountToContractFx(account);
      navigate({ to: '/create-room' });
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      color="secondary"
      isLoading={isLoading}
      onClick={onClick}
      startContent={<MetamaskLogo />}
    >
      Connect wallet
    </Button>
  );
};
