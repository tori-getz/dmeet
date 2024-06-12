import { useUnit } from 'effector-react';
import { useEffect, useRef } from 'react';
import { $selectedVideoInput } from '~/entities/devices';
import useMediaStream from 'use-media-stream';

export const VideoPreview: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const deviceId = useUnit($selectedVideoInput);

  const { stream, updateMediaDeviceConstraints } = useMediaStream({
    mediaDeviceConstraints: { video: { deviceId }, audio: false },
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    updateMediaDeviceConstraints({
      constraints: { video: { deviceId }, audio: false },
      resetStream: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceId]);

  return (
    <video autoPlay playsInline ref={videoRef} className="w-full h-full" />
  );
};
