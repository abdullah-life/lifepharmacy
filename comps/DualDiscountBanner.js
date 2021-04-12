import AppColors from "./AppColors";
import CustomButton from "./CustomButton";

const DualDiscountBanner = (props) => {
  return (
    <div
      class="flex flex-grow md:px-32 sm:px-16 px-4 py-5"
      style={{
        backgroundImage: "url(/MainCard2.svg)",
        backgroundSize: "cover",
      }}
    >
      <div class="flex flex-grow flex-row items-center">
        <div class="flex items-center">
          <img class="flex flex-grow justify-between" src={props.imageLeft} />
        </div>
        <div class="flex flex-grow w-3/4 flex-col items-center md:pr-6 sm:pr-3">
          <p
            className={
              "md:text-3xl sm:text-2xl text-base font-extrabold self-end"
            }
            style={{ color: AppColors.appBlue }}
          >
            {props.titleLeft}
          </p>
          <p
            className={
              "md:text-xl sm:text-lg text-base font-bold mt-4 self-end"
            }
            style={{ color: AppColors.appBlue }}
          >
            {props.discountTitleLeft1}
          </p>
          <p
            className={
              "md:text-xl sm:text-lg text-base font-bold mt-1 self-end"
            }
            style={{ color: AppColors.appBlue }}
          >
            {props.discountTitleLeft2}
          </p>
          <CustomButton
            text={"Shop Now"}
            buttonStyle={"md:w-32 sm:w-24 w-20 self-end mt-4"}
          />
        </div>
      </div>
      <div
        className={"flex mx-5"}
        style={{ width: 1, backgroundColor: AppColors.appBlue }}
      />
      <div class="flex flex-grow flex-row items-center">
        <div class="flex flex-grow w-3/4 flex-col items-center md:pl-6 sm:pl-3">
          <p
            className={
              "md:text-3xl sm:text-2xl text-base font-extrabold self-start"
            }
            style={{ color: AppColors.appBlue }}
          >
            {props.titleRight}
          </p>
          <p
            className={
              "md:text-xl sm:text-lg text-base font-bold mt-4 self-start"
            }
            style={{ color: AppColors.appBlue }}
          >
            {props.discountTitleRight1}
          </p>
          <p
            className={
              "md:text-xl sm:text-lg text-base font-bold mt-1 self-start"
            }
            style={{ color: AppColors.appBlue }}
          >
            {props.discountTitleRight2}
          </p>
          <CustomButton
            text={"Shop Now"}
            buttonStyle={"md:w-32 sm:w-24 w-20 self-start mt-4"}
          />
        </div>
        <div class="flex items-center">
          <img
            class="flex flex-grow justify-between"
            src={props.imageRight}
            // style={{
            //   //   height: "18rem",
            //   objectFit: "cover",
            // }}
          />
        </div>
      </div>
    </div>
  );
};

export default DualDiscountBanner;
