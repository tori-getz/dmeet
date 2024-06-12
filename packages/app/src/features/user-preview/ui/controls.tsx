import { Button } from '@nextui-org/react';
import { useUnit } from 'effector-react';
import React from 'react';
import {
  BiMicrophone,
  BiCamera,
  BiMicrophoneOff,
  BiCameraOff,
} from 'react-icons/bi';
import {
  $cameraEnabled,
  $microphoneEnabled,
  toggleCamera,
  toggleMicrophone,
} from '~/entities/devices';

export const Controls: React.FC = () => {
  const [microphoneEnabled, cameraEnabled] = useUnit([
    $microphoneEnabled,
    $cameraEnabled,
  ]);

  return (
    <div className="absolute bottom-0 w-full flex items-center justify-center p-2 gap-4">
      <Button
        onClick={() => toggleMicrophone()}
        isIconOnly
        color={microphoneEnabled ? 'secondary' : 'default'}
      >
        {microphoneEnabled ? (
          <BiMicrophone size={20} />
        ) : (
          <BiMicrophoneOff size={20} />
        )}
      </Button>
      <Button
        isIconOnly
        onClick={() => toggleCamera()}
        color={cameraEnabled ? 'secondary' : 'default'}
      >
        {cameraEnabled ? <BiCamera size={20} /> : <BiCameraOff size={20} />}
      </Button>
    </div>
  );
};
