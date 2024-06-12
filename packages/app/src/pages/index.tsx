import React from 'react';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { ConnectWallet } from '~/features/connect-wallet';
import { METAMASK_CONNECTED } from '~/shared/constants';
import AppLogo from '~/shared/assets/app-logo.svg?react';

const WelcomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-[24px]">
      <div className="flex flex-col items-center justify-center">
        <AppLogo />
        <p className="w-[473px]">
          <b>dmeet</b>- is a decentralized video conferencing platform that uses
          blockchain technology to ensure secure, private, and tamper-proof
          meetings. Connect your wallet to start creating and joining rooms with
          unique, secure IDs and enjoy seamless, peer-to-peer video
          communication.
        </p>
      </div>
      <ConnectWallet />
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: WelcomePage,
  beforeLoad() {
    if (METAMASK_CONNECTED) {
      redirect({ to: '/create-room' });
    }
  },
});
