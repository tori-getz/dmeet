// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract DmeetVideoConference {
  struct Participant {
    address addr;
    string username;
  }

  struct Room {
    string id;
    string name;
    Participant owner;
    Participant[] participants;
  }

  event RoomCreated(string id, string name, address owner);

  mapping(string => Room) private rooms;

  function createRoom(string memory _id, string memory _username, string memory _meetName) public {
    require(bytes(_id).length > 0, 'Room ID cannot be empty');
    require(bytes(rooms[_id].id).length == 0, 'Room with this ID already exists');

    Room storage room = rooms[_id];
    room.id = _id;
    room.name = _meetName;
    room.owner = Participant(msg.sender, _username);

    emit RoomCreated(_id, _meetName, msg.sender);
  }
}





