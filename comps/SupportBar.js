const ItemContainer = (props) => {
  return (
    <div
      class={`flex flex-grow justify-center items-center md:py-4 sm:py-3 py-2 ${props.containerStyle}`}
    >
      <div
        className={
          "flex md:flex-row sm:flex-row flex-col items-center justify-center"
        }
      >
        {props.text == "Free Delivery" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="md:h-10 md:w-10 sm:h-8 sm:w-8 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            />
          </svg>
        ) : props.text == "Express Shipping" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="md:h-10 md:w-10 sm:h-8 sm:w-8 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
        ) : props.text == "Secure Payments" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="md:h-10 md:w-10 sm:h-8 sm:w-8 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="md:h-10 md:w-10 sm:h-8 sm:w-8 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
            />
          </svg>
        )}

        <div className={"flex flex-col ml-3"}>
          <p className={"md:text-base sm:text-base text-xs font-bold"}>
            {props.text}
          </p>
          <p className={"text-xs text-gray-400"}>{props.subTitle}</p>
        </div>
      </div>
    </div>
  );
};

const SupportBar = () => {
  return (
    <div class="flex flex-grow  justify-between flex-wrap md:px-32 sm:px-16 px-4 ">
      <div class="flex flex-grow bg-white border rounded-xl py-1">
        <ItemContainer
          containerStyle={"border border-l-0 border-t-0 border-b-0"}
          text={"Free Delivery"}
          subTitle={"For all order over AED 100"}
        />
        <ItemContainer
          containerStyle={"border border-l-0 border-t-0 border-b-0"}
          text={"Express Shipping"}
          subTitle={"Express Shipping"}
        />
        <ItemContainer
          containerStyle={"border border-l-0 border-t-0 border-b-0"}
          text={"Secure Payments"}
          subTitle={"For all order over AED 100"}
        />
        <ItemContainer text={"24/7 Support"} subTitle={"Dedicated Support"} />
      </div>
    </div>
  );
};

export default SupportBar;
