export const getMediaSources = async (): Promise<MediaDeviceInfo[]> => {
  return navigator.mediaDevices.enumerateDevices();
};
