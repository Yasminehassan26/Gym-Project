import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

export default () => {
  // Create array with 1000 slides
  const slides = [
    {
      title: "First item",
      description: "Lorem ipsum",
      img: "https://source.unsplash.com/featured/?gym",
    },
    {
      title: "Second item",
      description: "Lorem ipsum",
      img: "https://source.unsplash.com/featured/?healty",
    },
  ];

  return (
    <Slider>
      {slides.map((slide, index) => (
        <div key={index}>
          <h2>{slide.title}</h2>
          <div>{slide.description}</div>
          <img src={slide.img} alt={"not found"} width="200" height="200" />
        </div>
      ))}
    </Slider>
  );
};
