import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MyCard from "./MyCard";

export default function MyCarousel(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const imagesArray = ["school.jpg", "image.jpg", "school.jpg"];
  const testimonialsArray = [
    {
      name: "John Doe",
      desc: "orem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
    },
    {
      name: "Alice Doe",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
    },
    {
      name: "Alice Doe",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit doloremque.",
    },
  ];
//   console.log(mappedArray);
//   console.log(mappedCard);
  const mappedArray = imagesArray.map((imag, idx) => {
    return <img key={idx} src={imag} />;
  });

  const mappedCard = testimonialsArray.map((test, idx) => {
    return <MyCard key={idx} name={test.name} desc={test.desc} />;
  });
  console.log(mappedArray);
  console.log(mappedCard);
  return (
    <div>
      <section className="">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="transform 100ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {props.type === "image" ? { mappedArray } : <p>TEXT</p>}
        </Carousel>
      </section>
    </div>
  );
}
