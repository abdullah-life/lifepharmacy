import Divider from "./Divider";
import AppColors from "./AppColors";
import { useWindowSize } from "./WindowSize";

const PeriodOfferTag = (props) => {
  return (
    <div
      class="shadow space-x-1 hover:shadow-none transition-transform flex justify-between flex-nowrap items-center rounded text-blue-100 bg-yellow-100 am:px-0.2 md:px-0.5 lg:px-2 md:py-0.5 md:mx-0.5 md:my-0.5 cursor-pointer"
      style={{ backgroundColor: props.bgColor }}
    >
      <div>
        <img src="/announce.png" class="h-2.5" />
      </div>
      <p className="text-xs text-blue-900" style={{ fontSize: 9 }}>
        LIMITED PERIOD OFFER
      </p>
    </div>
  );
};
const DropdownTag = (props) => {
  return (
    <div class="shadow space-x-0.5 hover:shadow-none transition-transform flex justify-between flex-nowrap items-center rounded am:px-0.2 md:px-0.5 lg:px-2 md:py-0.5 md:mx-0.5 md:my-0.5  cursor-pointer">
      {props.showFlag ? (
        <div>
          <img src="/flag.png" class="w-5" />
        </div>
      ) : null}
      <p className="text-xs text-blue-900 font-bold" style={{ fontSize: 9 }}>
        {props.text}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};
const HeaderDropdownTag = (props) => {
  return (
    <div class=" space-x-0.5 hover:shadow-none transition-transform flex justify-between flex-nowrap items-center rounded am:px-0.2 md:px-0.5 lg:px-2 md:py-0.5 md:mr-0.5 md:my-0.5  cursor-pointer">
      {props.text == "Categories" ? (
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ) : props.text == "Brand" ? (
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
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : props.text == "Offers" ? (
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
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
      ) : props.text == "Best Sellers" ? (
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ) : (
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      )}
      <p
        className="text-sm text-blue-900 font-bold"
        style={{ color: AppColors.appBlue }}
      >
        {props.text}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
};

const NavBar = () => {
  const windowsSize = useWindowSize()[0];

  return (
    <nav class="flex flex-col justify-between flex-wrap md:w-auto sm:auto-cols-auto w-full ">
      {windowsSize < 640 ? (
        <div
          className={
            "flex flex-row flex-grow rounded-md shadow-sm items-center mx-5 my-4 bg-gray-100"
          }
        >
          <div class="flex items-center w-full h-9 relative mx-auto pl-3">
            <div>
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              class="flex-grow bg-gray-100 px-2 text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search Medicine & Healthcare Products"
              // style={{ backgroundColor: AppColors.appGrey }}
            />
          </div>
        </div>
      ) : (
        <>
          <div class="flex flex-col w-full justify-between flex-wrap md:px-32 sm:px-16 px-4">
            <div className="flex flex-row items-center justify-between">
              <div className={"flex align-middle container mt-2"}>
                <div className={"mr-3"}>
                  <PeriodOfferTag
                    text={"LIMITED PERIOD OFFER"}
                    bgColor={"#FFFBCE"}
                  />
                </div>
                <div className={"mr-3"}>
                  <PeriodOfferTag
                    text={"LIMITED PERIOD OFFER"}
                    bgColor={"#F6FFCE"}
                  />
                </div>
                <div className={"mr-3"}>
                  <PeriodOfferTag
                    text={"LIMITED PERIOD OFFER"}
                    bgColor={"#E5FFCE"}
                  />
                </div>
                <div className={"mr-3"}>
                  <PeriodOfferTag
                    text={"LIMITED PERIOD OFFER"}
                    bgColor={"#CEFFD7"}
                  />
                </div>
              </div>
              <DropdownTag text={"AR"} bgColor={"bg-blue-500"} />
              <DropdownTag text={"Bahrain"} bgColor={"bg-blue-500"} showFlag />
            </div>
          </div>
          <Divider />
          <div class="flex flex-col justify-between flex-wrap mb-2 md:px-32 sm:px-16 px-4">
            <div className="flex mt-4">
              {/*Search Bar*/}
              <div
                className={"flex flex-row flex-grow items-center "}
                //   style={{ backgroundColor: "red" }}
              >
                <img src="/Logo.svg" />
                <div className={"flex flex-row items-center ml-2"}>
                  <p
                    className="text-4xl text-blue-900"
                    style={{ color: AppColors.appBlue }}
                  >
                    lifepharmacy
                    <span className="text-lg text-blue-900">.com</span>
                  </p>
                </div>
                <div
                  className={
                    "flex flex-row flex-grow rounded-md shadow-sm items-center mx-5 bg-gray-100"
                  }
                >
                  <div class="flex items-center  w-full h-9 relative mx-auto pl-3">
                    <div>
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
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      class="flex-grow bg-gray-100 px-2 text-sm focus:outline-none"
                      type="search"
                      name="search"
                      placeholder="What are you looking for?"
                      // style={{ backgroundColor: AppColors.appGrey }}
                    />
                  </div>
                </div>
                <div className={"mx-2.5"}>
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className={"mx-2.5"}>
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
                <div className={"mx-2.5"}>
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div class="flex flex-col  justify-between flex-wrap bg-teal mt-1 px-32">
            <div class="flex flex-row  justify-between flex-wrap bg-teal">
              <div className={"flex flex-row items-center"}>
                <HeaderDropdownTag text={"Categories"} />
                <HeaderDropdownTag text={"Brand"} />
                <HeaderDropdownTag text={"Offers"} />
                <HeaderDropdownTag text={"Best Sellers"} />
                <HeaderDropdownTag text={"Health Tips"} />
              </div>
              <div class="shadow space-x-1 hover:shadow-none transition-transform flex justify-between flex-nowrap items-center rounded bg-blue-500 am:px-0.2 md:px-0.5 lg:px-2 md:mx-0.5 h-5 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p
                  className="text-xs text-white font-bold mr-1"
                  style={{ fontSize: 9 }}
                >
                  Prescription
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
