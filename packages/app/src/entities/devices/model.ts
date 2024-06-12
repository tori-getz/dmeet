import { createEffect, createEvent, createStore } from 'effector';
import { getMediaSources } from './api';

export const $microphoneEnabled = createStore<boolean>(false, {
  name: 'microphone enabled',
});
export const $cameraEnabled = createStore<boolean>(false, {
  name: 'camera enabled',
});

export const toggleMicrophone = createEvent<void>('toggle microphone');
export const toggleCamera = createEvent<void>('toggle camera');

$microphoneEnabled.on(toggleMicrophone, (prev) => !prev);
$cameraEnabled.on(toggleCamera, (prev) => !prev);

export const $availableAudioInputs = createStore<MediaDeviceInfo[]>([], {
  name: 'available audio inputs',
});
export const $availableVideoInputs = createStore<MediaDeviceInfo[]>([], {
  name: 'available video inputs',
});

export const getMediaSourcesFx = createEffect({
  name: 'get media sources fx',
  handler: async () => {
    return getMediaSources();
  },
});

$availableAudioInputs.on(getMediaSourcesFx.doneData, (_, devices) => {
  return devices.filter((device) => device.kind === 'audioinput');
});

$availableVideoInputs.on(getMediaSourcesFx.doneData, (_, devices) => {
  return devices.filter((device) => device.kind === 'videoinput');
});

export const $selectedAudioInput = createStore<string>('', {
  name: 'selected audio input',
});
export const $selectedVideoInput = createStore<string>('', {
  name: 'selected video input',
});

export const selectAudioInput = createEvent<string>('select audio input');
export const selectVideoInput = createEvent<string>('select video input');

$selectedAudioInput.on(selectAudioInput, (_, deviceId) => deviceId);
$selectedVideoInput.on(selectVideoInput, (_, deviceId) => deviceId);

getMediaSourcesFx();
