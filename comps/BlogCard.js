import AppColors from "./AppColors";

const BlogCard = (props) => {
  return (
    <div
      class={`flex flex-col md:w-auto sm:w-auto w-96 cursor-pointer ${props.containerStyle}`}
    >
      <img src={props.item.image} className={"rounded w-auto"} />
      <div class={`flex flex-row mt-3`}>
        <div
          className={"flex flex-row pr-4 md:w-auto sm:w-32 w-32 items-center"}
        >
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p
            className={"md:text-sm sm:text-xs text-xs ml-1.5"}
            style={{ color: AppColors.appBlue }}
          >
            {props.item.date}
          </p>
        </div>
        <div
          className={"flex flex-row ml-4 md:w-auto sm:w-32 w-32 items-center"}
        >
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
          <p
            className={"md:text-sm sm:text-xs text-xs ml-1.5"}
            style={{ color: AppColors.appBlue }}
          >
            {props.item.comments}
          </p>
        </div>
      </div>
      <p
        className={"md:text-base sm:text-sm text-xs font-bold mt-2"}
        style={{ color: AppColors.appBlue }}
      >
        {props.item.title}
      </p>
      <p
        className={"text-xs font-thin mt-2"}
        style={{ color: AppColors.appGrey }}
      >
        {props.item.description}
      </p>
      <div className={"flex flex-row mt-2 items-center"}>
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
        <p className={"text-xs ml-1.5 text-blue-700"}>Read More</p>
      </div>
    </div>
  );
};

export default BlogCard;
