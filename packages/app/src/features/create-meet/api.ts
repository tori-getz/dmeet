import type { IRoom } from '~/entities/room/types';
import type { ICreateRoomDto } from './types';
import { $contract } from '~/shared/blockchain';
import { v4 as uuid } from 'uuid';

export const createRoom = async (dto: ICreateRoomDto): Promise<IRoom> => {
  return await $contract
    .getState()!
    .createRoom(uuid(), dto.username, dto.meetName);
};
