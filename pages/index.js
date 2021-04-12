import NavBar from "../comps/Navbar";
import BannerSliderTop from "../comps/BannerSliderTop";
import SupportBar from "../comps/SupportBar";
import Deals from "../comps/Deals";
import BestSeller from "../comps/BestSeller";
import HorizontalDealCards from "../comps/HorizontalDealCards";
import Essentials from "../comps/Essentials";
import LookingForSection from "../comps/LookingForSection";
import DiscountBanner from "../comps/DiscountBanner";
import DualDiscountBanner from "../comps/DualDiscountBanner";
import BlogSection from "../comps/BlogSection";
import MoreSection from "../comps/MoreSection";
import StatSection from "../comps/StatSection";
import ContactSection from "../comps/ContactSection";
import BottomTabBar from "../comps/BottomTabBar";
import Spacer from "../comps/Spacer";
import Divider from "../comps/Divider";
import { useWindowSize } from "../comps/WindowSize";

export default function Home() {
  const windowsSize = useWindowSize()[0];
  return (
    <>
      <NavBar />
      <BannerSliderTop />
      <div class="flex flex-col" style={{ backgroundColor: "#FCFCFC" }}>
        <Spacer spaceStyle={"mt-10"} />
        <SupportBar />
        <Spacer spaceStyle={"mt-10"} />
        <Deals />
        <Spacer spaceStyle={"mt-10"} />
        <BestSeller title={"Best Seller"} />
        <Spacer spaceStyle={"mt-10"} />
        <HorizontalDealCards />
        <Spacer spaceStyle={"mt-10"} />
        <Essentials title={"Winter Essentials"} winter />
        <Spacer spaceStyle={"mt-10"} />
        <LookingForSection title={"What are you looking for?"} />
        <Spacer spaceStyle={"mt-10"} />
        <DiscountBanner title={"Daily Essentials"} discountTitle={"75% OFF"} />
        <Spacer spaceStyle={"mt-10"} />
        <BestSeller title={"Recommended for you"} />
        <Spacer spaceStyle={"mt-10"} />
        <Essentials title={"Popular in Sports Nutrition"} />
        <Spacer spaceStyle={"mt-10"} />
        <DualDiscountBanner
          titleLeft={"Hair Care"}
          discountTitleLeft1={"Up to"}
          discountTitleLeft2={"75% OFF"}
          imageLeft={"/Protein.svg"}
          titleRight={"Hair Care"}
          discountTitleRight1={"Up to"}
          discountTitleRight2={"50% OFF"}
          imageRight={"/Protein.svg"}
        />
        <Spacer spaceStyle={"mt-5"} />
        <Divider width={"84%"} />
        <Spacer spaceStyle={"mt-10"} />
        <BlogSection title={"From our blog"} />
        <Divider width={"84%"} />
        <Spacer spaceStyle={"mt-10"} />
        <MoreSection
          title={
            "More Details about Health, Nutrition & Body Building Supplements"
          }
        />
        <Spacer spaceStyle={"mt-10"} />
      </div>
      <StatSection trustText={"25+"} storesText={"250+"} ordersText={"25M+"} />
      {windowsSize > 1000 ? <ContactSection /> : <BottomTabBar />}
      <Spacer spaceStyle={"mt-5"} />
    </>
  );
}
