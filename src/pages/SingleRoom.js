import React, { Component } from "react";
import defaultbcg from "../images/room-1.jpeg";

// import banner from "../components/Banner"
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import Banner from "../components/Banner";
import StyledHero from "../components/styledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultbcg,
    };
  }
  static contextType = RoomContext;
  //  componentDidMount(){

  //  }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such rooms is found .....</h3>
          <Link className="btn-primary" to="/rooms">
            {" "}
            go to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      pets,
      size,
      extras,
      price,
      breakfast,
      images,
    } = room;
    const [mainimg, ...deafaultimage] = images;
    return (
      <>
        <StyledHero img={mainimg || this.state.defaultbcg}>
          <Banner title={`${name}room`}>
            <Link to="/rooms" className="btn-primary">
              go to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {deafaultimage.map((item, index) => {
              return <img src={item} alt={name} key={index} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: ${size} SQFT</h6>
              <h6>
                {" "}
                max capacity:
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pet allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
