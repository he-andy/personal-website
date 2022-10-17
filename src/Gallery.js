import React from "react";
import Gallerys from "react-photo-gallery";

// const photos = [
//   {
//     src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
//     width: 1,
//     height: 1
//   },
//   {
//     src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
//     width: 4927,
//     height: 1000
//   },

// ];


const num_img = 8;

const Content = {
  // height: "700px",
  display: "inline-flex",
  float: "left",
  width: "auto",
  overflowX: "scroll",
  whiteSpace: "nowrap",
};
class Picture extends React.Component {
  map_photo(i) {
    const path = `/static/images/${i + 1}.jpg`;
    var img = new Image();
    img.src = path
    const ret =
    {
      src: path,
      width: img.width,
      height: img.height,
    };
    console.log(ret)
    return ret
  }

  constructor() {
    super();
    const photos = [...Array(num_img).keys()].map(x => this.map_photo(x));
    this.state = {
      photos: photos
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    };
  }

  render() {
    console.log(this.state.photos)
    return (
      <main>
        <h3>Gear</h3>
        <p>Currenty shooting on a Nikon Z6 with a 50mm or 35mm f/1.8. </p>
        <div className="hr"></div>
        <h3>Photos</h3>
        <div style={Content}>
          <Gallerys direction={"row"} margin={5} photos={this.state.photos} />
        </div>
      </main >

    );
  }
}

export default Picture;
