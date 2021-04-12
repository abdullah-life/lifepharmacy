import AppColors from "./AppColors";

const DataContainer = (props) => {
  return (
    <div className={"flex flex-col flex-grow items-center justify-center"}>
      <p
        className={"md:text-2xl sm:text-xl lg font-extrabold"}
        style={{ color: AppColors.appBlue }}
      >
        {props.ordersText}
      </p>
      <p
        className={"md:text-2xl sm:text-xl lg font-light mt-1"}
        style={{ color: AppColors.appBlue }}
      >
        {props.placeHolderText}
      </p>
    </div>
  );
};

const StatSection = (props) => {
  return (
    <div
      class="flex flex-grow  justify-between flex-wrap md:px-32 sm:px-16 px-4"
      style={{ backgroundColor: "#E5EBF1" }}
    >
      <div class="flex flex-row flex-grow items-center py-8">
        <DataContainer
          ordersText={props.trustText}
          placeHolderText={"Years Of Trust"}
        />
        <DataContainer
          ordersText={props.storesText}
          placeHolderText={"Stores"}
        />
        <DataContainer
          ordersText={props.ordersText}
          placeHolderText={"Orders Delivered"}
        />
        {/* <div className={"flex flex-grow flex-col items-center justify-center"}>
          <p className={"text-lg font-bold"} >{props.trustText}</p>
          <p className={"text-lg mt-3"} style={{color: AppColors.appBlue}}>Years Of Trust</p>
        </div> */}
        {/* <div className={"flex flex-col flex-grow items-center justify-center"}>
          <p className={"text-lg font-bold"}>{props.storesText}</p>
          <p className={"text-lg mt-3"}>Stores</p>
        </div>
        <div className={"flex flex-col flex-grow items-center justify-center"}>
          <p className={"text-lg font-bold"}>{props.ordersText}</p>
          <p className={"text-lg mt-3"}>Orders Delivered</p>
        </div> */}
      </div>
    </div>
  );
};

export default StatSection;
