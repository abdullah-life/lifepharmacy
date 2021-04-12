import AppColors from "./AppColors";

const Divider = (props) => {
  return (
    <div
      className={`flex flex-grow h-0.5 w-full bg-gray-100 my-1 self-center`}
      style={{
        height: props.height ? props.height : 1,
        backgroundColor: AppColors.appGrey,
        opacity: 0.1,
        width: props.width ? props.width : "100%",
      }}
    />
  );
};

export default Divider;
