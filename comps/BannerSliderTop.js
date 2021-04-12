import CustomButton from "./CustomButton";
import AppColors from "./AppColors";

const ProgressBar = (props) => {
  return (
    <div
      className={`md:w-10 sm:w-8 w-6 h-0.5 bg-blue-900 mb-2 mx-0.5 ${props.barStyle}`}
      style={{
        backgroundColor: props.bgColor ? props.bgColor : AppColors.appBlue,
      }}
    ></div>
  );
};

const BannerSliderTop = () => {
  return (
    <>
      <div
        class="flex flex-grow flex-col"
        style={{
          backgroundImage: "url(/MainCard.svg)",
          backgroundSize: "cover",
        }}
      >
        <div class="flex flex-grow flex-row">
          <div className={"flex w-32 items-center justify-center"}>
            <div
              className={
                "cursor-pointer md:p-2.5 sm:p-2 p-1.5 bg-white rounded-full shadow-lg"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-grow items-center md:pt-0 sm:pt-1 pt-3">
            <div className={"flex flex-grow flex-col px-8 "}>
              <p
                className={
                  "md:text-8xl sm:text-6xl text-3xl text-blue-900 font-bold "
                }
                style={{ color: AppColors.appBlue }}
              >
                Keto
              </p>
              <p
                className={
                  "md:text-sm sm:text-xs text-xs text-blue-900 md:mt-3 sm:mt-2 mt-1"
                }
                style={{ color: AppColors.appBlue }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. {"\n"} Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
              </p>
              <CustomButton
                text={"Learn More"}
                buttonStyle={"md:w-32 sm:w-24 w-20 md:mt-16 sm:mt-10 mt-8"}
              />
            </div>
            <div className={"flex justify-center items-end"}>
              <img
                src={"/Protein.svg"}
                // style={{ height: "5rem" }}
                // className={"h-auto w-32 object-contain"}
              />
            </div>
          </div>
          <div className={"flex w-32 items-center justify-center "}>
            <div
              className={
                "cursor-pointer md:p-2.5 sm:p-2 p-1.5 bg-white rounded-full shadow-lg"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className={"flex flex-row justify-center items-center"}>
          <ProgressBar barStyle={"bg-blue-900"} bgColor={AppColors.appBlue} />
          <ProgressBar barStyle={"bg-gray-100"} bgColor={AppColors.appGrey} />
          <ProgressBar barStyle={"bg-blue-100"} bgColor={AppColors.appGrey} />
        </div>
      </div>
    </>
  );
};

export default BannerSliderTop;
