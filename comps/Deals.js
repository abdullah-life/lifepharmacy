import AppColors from "./AppColors";

const WhiteButton = (props) => {
  return (
    <div className={"self-end cursor-pointer"}>
      <div className={"px-1.5 py-1 rounded-sm bg-white"}>
        <p style={{ fontSize: 9, color: props.buttonTextColor }}>
          {props.buttonText}
        </p>
      </div>
    </div>
  );
};

const ItemContainer = (props) => {
  return (
    <div
      class={`flex cursor-pointer flex-col md:flex-grow sm:flex-grow px-7 rounded py-5 ${props.containerStyle}`}
      style={{
        backgroundImage: `url(${props.bgImage})`,
        borderRadius: "1rem",
      }}
    >
      <div className={"flex flex-col w-48"}>
        <p className={"md:text-lg sm:text-base text-xs font-bold text-white"}>
          {props.headerText}
        </p>
        <p className={" text-white"} style={{ fontSize: 9 }}>
          {props.subTitle}
        </p>
      </div>
      <div className={"flex flex-row justify-between align-end"}>
        <WhiteButton
          buttonText={props.buttonText}
          buttonTextColor={props.buttonTextColor}
        />
        <img src={props.logoImage} style={{ height: "4rem" }} />
      </div>
    </div>
  );
};

const Deals = () => {
  return (
    <div class="flex flex-grow  justify-center items-center md:px-32 sm:px-16 px-4">
      {/* <div
        className={
          "flex md:gap-2 sm:gap-4 gap-4 flex-grow w-full overflow-x-scroll"
        }
      > */}
      <div class="flex w-full overflow-x-scroll space-x-1">
        <ItemContainer
          bgImage={"./OrangeCard.svg"}
          logoImage={"./motorbike.svg"}
          headerText={"Instant Delivery"}
          subTitle={"Medicine Delivered in 30 Minutes"}
          buttonText={"View Product"}
          buttonTextColor={"#F49505"}
        />
        <ItemContainer
          bgImage={"./BlueCard.svg"}
          logoImage={"./Deals.svg"}
          headerText={"DSF Deals"}
          subTitle={"Upto 90% Off on your favourite brands"}
          buttonText={"View Product"}
          buttonTextColor={"#227DC0"}
          imageStyle={"w-20"}
        />
        <ItemContainer
          bgImage={"./GreenCard.svg"}
          logoImage={"./Leaf.svg"}
          headerText={"Organic Store"}
          subTitle={"100 % Organic Products"}
          buttonText={"View Product"}
          buttonTextColor={"#9CC41C"}
        />
        <ItemContainer
          bgImage={"./PinkCard.svg"}
          logoImage={"./Girl.svg"}
          headerText={"Female Care"}
          subTitle={"We Provide Feminine Hygiene"}
          buttonText={"View Product"}
          buttonTextColor={"#EC7FCE"}
        />
      </div>
    </div>
  );
};

export default Deals;
