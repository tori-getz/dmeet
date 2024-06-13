import { createEffect } from 'effector';
import { ICreateRoomDto } from './types';
import { createRoom } from './api';

export const createRoomFx = createEffect({
  name: 'create room fx',
  handler: async (dto: ICreateRoomDto) => {
    return createRoom(dto);
  },
});
