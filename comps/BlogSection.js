import AppColors from "./AppColors";
import CustomButton from "./CustomButton";
import BlogCard from "./BlogCard";

const Data = [
  {
    image: "/Blog1.svg",
    title: "Therapy And Treatment No Longer",
    date: "April 11, 2021",
    comments: "10 Comments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: "/Blog2.svg",
    title: "We Make It Awesome",
    date: "April 11, 2021",
    comments: "10 Comments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: "/Blog3.svg",
    title: "The Best Pharmacy In The Region",
    date: "April 11, 2021",
    comments: "10 Comments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const BlogSection = (props) => {
  return (
    <div class="flex flex-grow md:px-32 sm:px-8 px-4">
      <div class="flex w-full flex-col flex-wrap py-5">
        <div class="flex flex-grow justify-between">
          <p
            className={"md:text-2xl sm:text-xl text-lg"}
            style={{ color: AppColors.appBlue }}
          >
            {props.title}
          </p>
          <CustomButton
            text={"View All"}
            buttonStyle={"md:w-32 sm:w-24 w-20 py-0"}
          />
        </div>
        <div class="flex w-full overflow-x-scroll mt-4 space-x-4">
          {Data.map((item, index) => {
            return <BlogCard key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
