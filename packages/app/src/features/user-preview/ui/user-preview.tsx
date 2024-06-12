import React from 'react';
import { Controls } from './controls';
import { Avatar } from '@nextui-org/react';
import { useUnit } from 'effector-react';
import { $cameraEnabled } from '~/entities/devices';
import { VideoPreview } from './video-preview';

export const UserPreview: React.FC = () => {
  const [cameraEnabled] = useUnit([$cameraEnabled]);

  return (
    <div className="w-[700px] flex items-center justify-center relative h-[400px] bg-[#294345] rounded">
      {cameraEnabled && <VideoPreview />}
      {!cameraEnabled && <Avatar size="lg" />}
      <Controls />
    </div>
  );
};
