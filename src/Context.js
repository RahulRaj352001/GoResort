import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 600,
    minPrice: 0,
    maxPrice: 0,
    maxSize: 0, 
    minSize: 0,
    breakfast: false,
    pets: false,
  };
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      maxPrice,
      maxSize,
    });
  }
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  getRoom = (slug) => {
    let temproom = [...this.state.rooms];
    const room = temproom.find((room) => room.slug === slug);
    return room;
  };
  handleChange = (event) => {
    const target = event.target;
    const name = event.target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
      this.state;
    ///alll the roooms
    let temprooms = [...rooms];
    //transform values
    capacity = parseInt(capacity);
    price =parseInt(price);
    //filter by type;
    if (type !== "all") {
      temprooms = temprooms.filter((room) => room.type === type);
    }
    //filter by capacity
    if (capacity !== 1) {
      temprooms = temprooms.filter((room) => room.capacity >= capacity);
    }
    
      temprooms = temprooms.filter((room) => room.price <= price);
      temprooms = temprooms.filter((room) => room.size >= minSize && room.size<=maxSize);
    
   if (breakfast) {
    temprooms = temprooms.filter((room) => room.breakfast === true);

   }
   if (pets) {
    temprooms = temprooms.filter((room) => room.pets === true);

   }
    this.setState({ sortedRooms: temprooms });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
export { RoomConsumer, RoomProvider, RoomContext };
