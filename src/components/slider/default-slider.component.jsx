import { Carousel } from "flowbite-react";
import React from "react";
function DefaultSlider(){
return(
    <React.Fragment>
    <div id="default-carousel" className="relative w-full" data-carousel="slide">

        <div className="relative h-[400px] overflow-hidden p-4">

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
          

        
      </div>
      </div>
      </React.Fragment>
)
};
export default DefaultSlider;