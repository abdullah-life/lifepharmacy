import AppColors from "./AppColors";
import CustomButton from "./CustomButton";

const DiscountBanner = (props) => {
  return (
    <div
      class="flex flex-grow md:px-32 sm:px-16 px-4 py-4"
      style={{
        backgroundImage: "url(/YellowCard.svg)",
        backgroundSize: "cover",
      }}
    >
      <div class="flex flex-grow flex-row items-center">
        <div class="flex items-center">
          <img
            className={"object-scale-down md:w-auto sm:w-auto w-64"}
            src={"/Hair.svg"}
          />
        </div>
        <div class="flex flex-grow flex-col items-center">
          <p
            className={"md:text-6xl sm:text-4xl text-base font-bold"}
            style={{ color: AppColors.appBlue }}
          >
            {props.title}
          </p>
          <p
            className={"md:text-5xl sm:text-2xl text-base font-bold my-5"}
            style={{ color: AppColors.appBlue }}
          >
            {props.discountTitle}
          </p>
          <CustomButton text={"Buy Now"} buttonStyle={"md:w-32 sm:w-24 w-20"} />
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
