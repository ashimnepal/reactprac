import HomeHeader from "../components/headers/home-header.component";
import "flowbite";
import DefaultSlider from "../components/slider/default-slider.component";
import HomeProdCard from "../components/productlist/product-list.component";
import BigFooter from "../components/footer/big-footer.component";
function LandingPage() {
  return (
    <>
      <HomeHeader></HomeHeader>

      <DefaultSlider></DefaultSlider>

      <div className="flex items-center justify-center">
        <HomeProdCard></HomeProdCard>
        <HomeProdCard></HomeProdCard>
        <HomeProdCard></HomeProdCard>
      </div>

      <div className="flex items-center justify-center">
        <HomeProdCard></HomeProdCard>
        <HomeProdCard></HomeProdCard>
        <HomeProdCard></HomeProdCard>
      </div>

    <BigFooter></BigFooter>



    </>
  );
}

export default LandingPage;
