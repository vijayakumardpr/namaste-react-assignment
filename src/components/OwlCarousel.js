import { useEffect, useState } from "react";
import Carousel from "react-simply-carousel";
import { API_URL } from "../constant";
import {IMGS_URL } from "../constant";


const OwlCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselImgURL, setCarouselImgURL] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  async function getData() {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data.data.cards[0].data.data.cards);
    setCarouselImgURL(data.data.cards[0].data.data.cards)
  }

  return (
    <div > Carousel
      {/* <Carousel
        containerProps={{
          style: {
            width: "80%",
            justifyContent: "space-between",
            userSelect: "none",
          },
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 40,
            height: 40,
            borderRadius:100,
            minWidth: 40,
            alignSelf: "center",
          },
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 40,
            height: 40,
            borderRadius:100,
            minWidth: 40,
            alignSelf: "center",
          },
        }}
        itemsToShow={4}
        speed={400}
      >
        {carouselImgURL.map((item, index) => (
          
            <img className="newCarousel" src={IMGS_URL + item.data.creativeId} key={index} alt="a" />
         
        ))}
      </Carousel> */}
    </div>
  );
};

export default OwlCarousel;
