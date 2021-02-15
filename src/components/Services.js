import React, { Component } from "react";
import Title from "../components/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Enjoy your vaccation with complementry cocktails",
      },
      {
        icon: <FaHiking />,
        title: "Free Hiking",
        info: "You are also given with free Hiking offers",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Van service",
        info: "Free Van services",
      },
      {
        icon: <FaBeer />,
        title: "Free Beer",
        info: "Free Beer with Delux Rooms",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, pos) => {
            return (
              <article key={pos} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
