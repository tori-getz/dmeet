import { Select, SelectItem } from '@nextui-org/react';
import { useUnit } from 'effector-react';
import {
  $availableAudioInputs,
  $availableVideoInputs,
  $selectedAudioInput,
  $selectedVideoInput,
  selectAudioInput,
  selectVideoInput,
} from '../model';

export const DevicesSelect = () => {
  const [availableAudioInputs, availableVideoInputs] = useUnit([
    $availableAudioInputs,
    $availableVideoInputs,
  ]);

  const [selectedAudioInput, selectedVideoInput] = useUnit([
    $selectedAudioInput,
    $selectedVideoInput,
  ]);

  return (
    <div className="flex flex-row gap-4">
      <Select
        label="Microphone"
        value={selectedAudioInput}
        onChange={(e) => selectAudioInput(e.target.value)}
      >
        {availableAudioInputs.map((device) => (
          <SelectItem key={device.deviceId}>{device.label}</SelectItem>
        ))}
      </Select>

      <Select
        label="Camera"
        value={selectedVideoInput}
        onChange={(e) => selectVideoInput(e.target.value)}
      >
        {availableVideoInputs.map((device) => (
          <SelectItem key={device.deviceId}>{device.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};
