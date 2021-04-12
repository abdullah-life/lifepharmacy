import AppColors from "./AppColors";

const LookingForCard = (props) => {
  return (
    <div
      class={`flex flex-col m-4 pl-3 pr-1.5 pt-2 border rounded-xl cursor-pointer ${props.containerStyle}`}
    >
      <div class={`flex flex-col  ${props.containerStyle}`}>
        <p className={"md:text-lg sm:text-base text-sm bold"}>{props.title}</p>
        <div className={"flex flex-grow flex-row justify-between"}>
          <div className={"flex flex-row items-center self-end mb-2"}>
            <p className={"md:text-sm sm:text-xs text-xs text-blue-600"}>
              View All
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="blue"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
          <img
            src={props.image}
            className={"md:w-32 sm:w-16 w-16"}
            // style={{ width: "8rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LookingForCard;
