import React, { useState, useEffect } from "react";

const RandomImage = () => {
  const[imageOne, setState] = useState();
  const[imageTwo, setNewState] = useState();
  const[buttonClick, clickState] = useState();




  useEffect( async () => {
  getImage()
  },[]);

const getImage = async () => {
  const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=100"
  );
  const data = await response.json();
  const image = data[Math.floor(Math.random() * data.length)];
  setState(image.thumbnailUrl);
  setNewState(image.url);
}

    return (
        <div>
        <p>This is my image</p>
          <img src={imageOne} />
          <p>Hello</p>
          <img src={imageTwo} />
          <button onClick={() => {clickState('HI')}}>Click ME</button>
          <p>{buttonClick}</p>
        </div>
)
  }

// class RandomImage extends React.Component {
//   state = {
//     imageUrl: undefined
//   };
//
//   componentDidMount = () => {
//     this.fetchRandomImage();
//   };
//
//   fetchRandomImage = async () => {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/photos?_limit=100"
//     );
//     const data = await response.json();
//     const image = data[Math.floor(Math.random() * data.length)];
//     this.setState({ imageUrl: image.thumbnailUrl });
//   };
//
//   render() {
//     const { imageUrl } = this.state;
//
//     return <img src={imageUrl} />;
//   }
// }

export default RandomImage;
