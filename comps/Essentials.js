import AppColors from "./AppColors";
import CustomButton from "./CustomButton";
import SimpleCard from "./SimpleCard";

const winterData = [
  {
    image: "/Winter.svg",
    title: "Manuka Honey",
  },
  {
    image: "/Winter1.svg",
    title: "Nasal Stick",
  },
  {
    image: "/Winter2.svg",
    title: "Lip Balm",
  },
  {
    image: "/Winter3.svg",
    title: "Compressor Nebulizer",
  },
  {
    image: "/Winter4.svg",
    title: "Nasal Spray",
  },
];
const SportsData = [
  {
    image: "/C4.svg",
    title: "Whey Proteins",
  },
  {
    image: "/C4.svg",
    title: "Whey Protein Isolate",
  },
  {
    image: "/C4.svg",
    title: "Mass Gainers",
  },
  {
    image: "/C4.svg",
    title: "Amino Acid / BCAAs",
  },
  {
    image: "/C4.svg",
    title: "Pre-workout",
  },
];

const Essentials = (props) => {
  return (
    <div class="flex flex-grow md:px-32 sm:px-16 px-4">
      <div class="flex flex-grow w-full flex-col flex-wrap bg-white md:p-5 sm:p-4 p-2 rounded-xl border">
        <div class="flex justify-between md:ml-4 sm:ml-3 ml-2">
          <p
            className={"md:text-2xl sm:text-xl text-base"}
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
          {props.winter
            ? winterData.map((item, index) => {
                return (
                  <SimpleCard
                    key={index}
                    image={item.image}
                    title={item.title}
                    showBorder={index != winterData.length - 1 ? true : false}
                  />
                );
              })
            : SportsData.map((item, index) => {
                return (
                  <SimpleCard
                    key={index}
                    image={item.image}
                    title={item.title}
                    showBorder={index != SportsData.length - 1 ? true : false}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Essentials;
