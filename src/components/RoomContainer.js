import React, { useContext } from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "../components/Loading";
import { RoomContext } from "../Context";

function RoomContainer() {
  const value = useContext(RoomContext);
  const { loading, sortedRooms, rooms } = value;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <RoomFilter rooms={rooms} />
          <RoomList rooms={sortedRooms} />
        </div>
      )}
    </>
  );
}

export default RoomContainer;
