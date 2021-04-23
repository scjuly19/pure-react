import React, { Component } from "react";

export default class Carousel extends Component {
  state = { photos: [], active: 0 };
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }
  handleIndexClick = (index) => {
    this.setState({ active: index });
  };
  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <button
              key={photo}
              onClick={() => this.handleIndexClick(index)}
              className={index === active ? "active" : "btn"}
            >
              <img src={photo} alt="animal-thumbnail" className="animal-img" />
            </button>
          ))}
        </div>
      </div>
    );
  }
}
