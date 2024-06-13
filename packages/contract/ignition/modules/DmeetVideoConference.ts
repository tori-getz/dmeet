import { buildModule } from '@nomicfoundation/ignition-core';

const DmeetVideoConferenceModule = buildModule(
  'DmeetVideoConferenceModule',
  (m) => {
    const videoConference = m.contract('DmeetVideoConference');

    return { videoConference };
  }
);

export default DmeetVideoConferenceModule;
