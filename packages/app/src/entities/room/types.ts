export interface IParticipant {
  addr: string;
  username: string;
}

export interface IRoom {
  id: string;
  name: string;
  owner: IParticipant;
  participants: Array<IParticipant>;
}
