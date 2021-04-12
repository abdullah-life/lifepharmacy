const MoreSection = (props) => {
  return (
    <div class="flex flex-grow justify-between flex-wrap  md:px-32 sm:px-16 px-4">
      <div class="flex flex-grow bg-white border items-center rounded-xl py-5 md:px-4 sm:px-3 px-2">
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <p className={"md:text-sm sm:text-sm text-xs md:ml-3 sm:ml-2 ml-1"}>
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default MoreSection;
