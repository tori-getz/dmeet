import hre from 'hardhat';
import { loadFixture } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers';
import { v4 as uuid } from 'uuid';
import { expect } from 'chai';

describe('Video Conference contract', () => {
  async function deployContractFixture() {
    const [owner, otherAccount] = await hre.viem.getWalletClients();
    const videoConference = await hre.viem.deployContract(
      'DmeetVideoConference'
    );
    const publicClient = await hre.viem.getPublicClient();

    return {
      owner,
      otherAccount,
      videoConference,
      publicClient,
    };
  }

  describe('Should to be create room', async () => {
    const { videoConference } = await loadFixture(deployContractFixture);

    const roomId = uuid();

    videoConference.write.createRoom([roomId, 'user', 'Hello']);

    await videoConference.watchEvent.RoomCreated({
      onLogs: ([result]) => {
        expect(result.args.id).to.be.equal(roomId);
      },
    });
  });
});
