import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from "react-icons/fa";
export default class Service extends Component {
  state = {
    Service: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info: "fe h,aefbheay vvaejn var,hbamnbwefhb yawfbbanfbhrahurf a,ehjyfvhae",
      },
      {
        icon: <FaHiking />,
        title: "unlimited hiking",
        info: "fe h,aefbheay nbwefhbyawfbban fbhrahurf a,ehjyfvhae",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info: "fe h,aefbwefhbyawfbbanfbhrahurf a,ehjyfvhae",
      },
      {
        icon: <FaBeer />,
        title: "strong beer",
        info: "fe h,aefbheayvvaejn vanfbhrahurf a,ehjyfvhae",
      },
    ],
  };
  render() {
    return (
      <div className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.Service.map((item, index) => {
              return <article key={index} className="service" >
                     <span>{item.icon}</span>
                     <h6>{item.title}</h6>
                     <p>{item.info}</p>
              </article>
        
        })}
        </div>
      </div>
    );
  }
}
