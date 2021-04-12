import AppColors from "./AppColors";
import CustomButton from "./CustomButton";
import RegularCard from "./RegularCard";

const BestSeller = (props) => {
  return (
    <div class="flex flex-grow md:px-32 sm:px-16 px-4">
      <div class="flex flex-grow w-full flex-col align-cente flex-wrap bg-white p-5 rounded-xl border">
        <div class="flex flex-grow align-cente  justify-between">
          <p
            className={"md:text-2xl sm:text-xl text-base"}
            style={{ color: AppColors.appBlue }}
          >
            {props.title}
          </p>
          <CustomButton
            text={"View All"}
            buttonStyle={"md:w-32 sm:w-24 w-20"}
          />
        </div>
        <div class="flex md:gap-2 sm:gap-4 gap-4 flex-grow w-full overflow-x-scroll bg-white rounded py-4 justify-between">
          <RegularCard
            image={"/Winter.svg"}
            qualityTag1={"Triple Immunity"}
            qualityTag2={"Zinc, Selinium"}
            title1={"Sunshine Nutrition Thirst"}
            title2={"Quencher Drink Ocean Blue"}
            review={"4.8"}
            totalReview={"100 Reviews"}
            showInstant
            new
            offerText={"Buy 2 Get 1"}
            price={"231.00"}
            oldPrice={"AED 500.00"}
            quantitySelected={"2"}
          />
          <RegularCard
            image={"/Winter1.svg"}
            qualityTag1={"Triple Immunity"}
            qualityTag2={"Zinc, Selinium"}
            title1={"Sunshine Nutrition Thirst"}
            title2={"Quencher Drink Ocean Blue"}
            review={"4.8"}
            totalReview={"100 Reviews"}
            showInstant
            bestSeller
            offerText={"Buy 2 Get 1"}
            price={"231.00"}
            oldPrice={"AED 500.00"}
            quantitySelected={"2"}
          />
          <RegularCard
            image={"/Winter2.svg"}
            qualityTag1={"Triple Immunity"}
            qualityTag2={"Zinc, Selinium"}
            title1={"Sunshine Nutrition Thirst"}
            title2={"Quencher Drink Ocean Blue"}
            review={"4.8"}
            totalReview={"100 Reviews"}
            showInstant
            new
            offerText={"Buy 2 Get 1"}
            price={"231.00"}
            oldPrice={"AED 500.00"}
            quantitySelected={"2"}
          />
          <RegularCard
            image={"/Winter3.svg"}
            qualityTag1={"Triple Immunity"}
            qualityTag2={"Zinc, Selinium"}
            title1={"Sunshine Nutrition Thirst"}
            title2={"Quencher Drink Ocean Blue"}
            review={"4.8"}
            totalReview={"100 Reviews"}
            showInstant
            bestSeller
            offerText={"Buy 2 Get 1"}
            price={"231.00"}
            oldPrice={"AED 500.00"}
            quantitySelected={"2"}
          />
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
