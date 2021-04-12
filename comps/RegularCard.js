import AppColors from "./AppColors";
import CustomButton from "./CustomButton";

const QualityTag = (props) => {
  return (
    <div
      className={"px-1 mr-1 py-0 border-red-600 border rounded-sm shadow-sm"}
      style={{ borderColor: props.themeColor ? AppColors.appBlue : "red" }}
    >
      <p
        className={"text-red-700"}
        style={{
          fontSize: 8,
          color: props.themeColor ? AppColors.appBlue : "red",
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

const SumBox = (props) => {
  return (
    <div className={"cursor-pointer mx-3"}>
      {props.plus ? (
        <div
          className={
            "w-8 h-8 flex items-center bg-blue-600 justify-center border rounded"
          }
        >
          <p className={"text-white"}>+</p>
        </div>
      ) : (
        <div
          className={
            "w-8 h-8 flex items-center border-blue-900 bg-white justify-center border rounded"
          }
        >
          <p>-</p>
        </div>
      )}
    </div>
  );
};

const RegularCard = (props) => {
  return (
    <div
      class={`flex flex-col border-gray-100 border rounded-lg ${props.containerStyle}`}
    >
      {props.new ? (
        <img
          src={"/NewLogo.svg"}
          className={"self-start"}
          style={{ height: "1.5rem" }}
        />
      ) : props.bestSeller ? (
        <img
          src={"/BestSeller.svg"}
          className={"self-start"}
          style={{ height: "1.5rem" }}
        />
      ) : null}
      <div class={`flex flex-col px-3 pb-2 ${props.containerStyle}`}>
        {props.discount ? (
          <img
            src={"/NewLogo.svg"}
            className={"absolute m-2"}
            style={{ height: "1.5rem", alignSelf: "flex-end" }}
          />
        ) : null}
        <div
          class={`flex flex-col border-gray-100 cursor-pointer rounded-lg border p-1 ${props.containerStyle}`}
        >
          <img
            src={props.image}
            className={"md:h-52 sm:h-36 h-32"}
            // style={{ height: "12rem" }}
          />
          <div className={"mt-1 flex flex-row items-center justify-between"}>
            <div className={"flex flex-row"}>
              {props.qualityTag1 && <QualityTag text={props.qualityTag1} />}
              {props.qualityTag2 && <QualityTag text={props.qualityTag2} />}
            </div>
            <div className={"self-end"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={"flex flex-col items-center mt-1"}>
          <p className={"text-sm"}>{props.title1}</p>
          <p className={"text-sm"}>{props.title2}</p>
        </div>
        {props.review && (
          <div className={"flex flex-row items-center mt-1"}>
            <img
              src={"/StarLogo.svg"}
              style={{ height: "0.7rem", objectFit: "contain" }}
            />
            <p
              className={"text-xs font-thin ml-0.5"}
              style={{ color: AppColors.appBlue }}
            >
              {props.review}
            </p>
            {props.totalReview && (
              <p
                className={"text-xs font-thin ml-0.5"}
                style={{ color: AppColors.appGrey }}
              >
                ({props.totalReview})
              </p>
            )}
          </div>
        )}
        <div className={"mt-1.5 flex flex-row items-center justify-between"}>
          <div className={"flex flex-row"}>
            {props.offerText && (
              <QualityTag text={props.offerText} themeColor />
            )}
          </div>
          {props.showInstant && (
            <div className={"self-end"}>
              <img src={"/Instantlogo.svg"} style={{ height: "1.2rem" }} />
            </div>
          )}
        </div>
      </div>
      <div
        className={"flex flex-row p-2"}
        style={{ backgroundColor: "#E5EBF1" }}
      >
        <div className={"flex flex-grow flex-row justify-between"}>
          <div className={"flex flex-col"}>
            <div className={"flex flex-row items-center"}>
              <p
                style={{
                  fontSize: 9,
                  color: AppColors.appBlue,
                }}
              >
                AED
              </p>
              <p
                className={"text-lg font-bold ml-1"}
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
          <div className={"flex flex-row items-center justify-evenly"}>
            <SumBox minus />
            <p>{props.quantitySelected}</p>
            <SumBox plus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegularCard;
