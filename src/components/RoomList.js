import React from "react";
import Room from "../components/Room";

function RoomList({ rooms }) {
  if (rooms.lenght === 0) {
    return (
      <div className="empty-search">
        <h3>No rooms match</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item, pos) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}

export default RoomList;
