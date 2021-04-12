import CustomButton from "./CustomButton";
import AppColors from "./AppColors";

const CardObject = (props) => {
  return (
    <div
      class={`flex flex-grow flex-row p-5 my-2 items-center rounded-xl md:${props.cardStyle}`}
      style={{
        backgroundImage: props.bgCard,
        backgroundSize: "cover",
      }}
    >
      <div class="flex flex-grow items-center">
        <div
          className={
            "flex p-2.5 justify-center items-center bg-white rounded-xl"
          }
        >
          <img
            className={"md:w-44 sm:w-32 w-54"}
            src={props.logo}
            // style={{ width: "12rem", objectFit: "contain" }}
          />
        </div>
        <div className={"flex flex-grow flex-col px-8"}>
          <img
            className={"md:w-32 sm:w-44 w-32"}
            src={props.offerLogo}
            // style={{ width: "8rem", objectFit: "contain" }}
          />
          <p
            className={"text-xs text-blue-900 mt-3"}
            style={{ color: AppColors.appBlue }}
          >
            {props.statement2}
          </p>
          <p
            className={"text-xs text-blue-900 mt-3"}
            style={{ color: AppColors.appBlue }}
          >
            {props.statement1}
          </p>
          <p
            className={"text-xs text-blue-900 mt-3"}
            style={{ color: AppColors.appBlue }}
          >
            {props.statement3}
          </p>

          <div
            className={
              "flex flex-grow flex-row items-center justify-between mt-2"
            }
          >
            <div className={"flex flex-col"}>
              <div className={"flex flex-row items-center"}>
                <p
                  className={"md:text-lg sm:text-base text-sm font-light"}
                  style={{
                    color: AppColors.appBlue,
                  }}
                >
                  AED
                </p>
                <p
                  className={"md:text-lg sm:text-base text-sm font-bold ml-1"}
                  style={{ color: AppColors.appBlue }}
                >
                  {props.price}
                </p>
              </div>
              <p
                style={{
                  fontSize: 10,
                  color: AppColors.appGrey,
                  textDecorationLine: "line-through",
                }}
              >
                {props.oldPrice}
              </p>
            </div>
            <div className={"flex flex-row items-end"}>
              <CustomButton
                text={"Buy Now"}
                buttonStyle={"md:w-32 sm:w-24 w-20 py-1 ml-4"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HorizontalDealCards = (props) => {
  return (
    <>
      <div class="flex flex-grow items-center justify-between md:flex-row sm:flex-col flex-col md:px-32 sm:px-16 px-4">
        <CardObject
          logo={"/Benecheck.svg"}
          offerLogo={"/3in1Logo.svg"}
          cardStyle={"mr-4"}
          statement1={"Benecheck Meter Without Strips"}
          statement2={"Glucose 50`s Strip"}
          statement3={"Geratherm Thermometer"}
          price={"156.45"}
          oldPrice={"AED 236.25"}
          bgCard={"url(/LightBlueCard.svg)"}
        />
        <CardObject
          logo={"/Manuka.svg"}
          offerLogo={"/3in1Logo.svg"}
          cardStyle={"ml-4"}
          statement1={"Benecheck Meter Without Strips"}
          statement2={"Glucose 50`s Strip"}
          statement3={"Geratherm Thermometer"}
          price={"200.00"}
          oldPrice={"AED 310.00"}
          bgCard={"url(/YellowCard.svg)"}
        />
      </div>
    </>
  );
};

export default HorizontalDealCards;
