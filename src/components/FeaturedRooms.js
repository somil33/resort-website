import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms, loading } = this.context;
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? (
            <Loading />
          ) : (
            featuredRooms.map((room) => {
              return <Room key={room.id} room={room} />;
            })
          )}
        </div>
      </section>
    );
  }
}
