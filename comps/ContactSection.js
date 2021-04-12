import AppColors from "./AppColors";

const DataContainer = (props) => {
  return (
    <div className={"flex flex-col flex-grow items-center justify-center"}>
      <p
        className={"text-2xl font-extrabold"}
        style={{ color: AppColors.appBlue }}
      >
        {props.ordersText}
      </p>
      <p
        className={"text-2xl font-light mt-1"}
        style={{ color: AppColors.appBlue }}
      >
        {props.placeHolderText}
      </p>
    </div>
  );
};

const ContactSection = (props) => {
  return (
    <div class="flex flex-grow flex-wrap md:px-32 sm:px-16 px-4 md:visible sm:visible invisible">
      <div class="flex flex-row flex-grow items-center py-10">
        <div className={"flex flex-col flex-grow justify-center"}>
          <p
            className={"text-sm font-bold"}
            style={{ color: AppColors.appBlue }}
          >
            We are always here to help you
          </p>
          <p
            className={"text-xs font-extralight mt-1"}
            style={{ color: AppColors.appGrey }}
          >
            Reach out to us through any of these support channels
          </p>
        </div>
        <div className={"flex flex-row items-center"}>
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
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className={"flex flex-col justify-center ml-2"}>
            <p
              className={"text-xs font-extralight "}
              style={{ color: AppColors.appGrey }}
            >
              Help Center
            </p>
            <p className={"text-xs"} style={{ color: AppColors.appBlue }}>
              help.lifepharmacy.com
            </p>
          </div>
        </div>
        <div className={"flex flex-row items-center ml-8"}>
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
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <div className={"flex flex-col justify-center ml-2"}>
            <p
              className={"text-xs font-extralight "}
              style={{ color: AppColors.appGrey }}
            >
              Email Support
            </p>
            <p className={"text-xs"} style={{ color: AppColors.appBlue }}>
              care@lifepharmacy.com
            </p>
          </div>
        </div>
        <div className={"flex flex-row items-center ml-8"}>
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <div className={"flex flex-col justify-center ml-2"}>
            <p
              className={"text-xs font-extralight "}
              style={{ color: AppColors.appGrey }}
            >
              Phone
            </p>
            <p className={"text-xs"} style={{ color: AppColors.appBlue }}>
              +971 571 8000
            </p>
          </div>
        </div>
        <div className={"flex flex-row items-center ml-8"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#191F4D"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <div className={"flex flex-col justify-center ml-2"}>
            <p className={"text-xs"} style={{ color: AppColors.appBlue }}>
              WhatsApp Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
