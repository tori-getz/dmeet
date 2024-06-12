import { Button } from '@nextui-org/react';
import { useUnit } from 'effector-react';
import { METAMASK_CONNECTED } from '~/shared/constants';
import { connectWalletFx } from '../model';
import { useNavigate } from '@tanstack/react-router';
import MetamaskLogo from '~/shared/assets/metamask-logo.svg?react';

export const ConnectWallet: React.FC = () => {
  const isLoading = useUnit(connectWalletFx.pending);

  const navigate = useNavigate();

  const onClick = async () => {
    try {
      if (!METAMASK_CONNECTED) return alert('Metamask is not installed!');
      connectWalletFx();
      navigate({ to: '/create-room' });
    } catch (e) {
      alert(e);
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
