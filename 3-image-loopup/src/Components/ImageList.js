import React from "react";
import "./ImageList.css";

const ImageList = props => {
  // console.log(props.images);
  // const images = props.images.map((image) => {
  //     return <img key = {image.id} src = {image.urls.regular} alt={image.description}/>
  // });

  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div className="container">
      <div className="image-grid">
            {images}
          </div>
        </div>
};

export default ImageList;

/*
maps

const maps = [ 2,1,3,4,5,6];
let newNumbers = []
for (let i = 0; i<numbers.length; i++){
    newNumbers.push(numbers[i] * 10);
}
newNumbers;

--------------

numbers.map((num) => {
    return num * 10;
})
console.log(numbers);

*/
