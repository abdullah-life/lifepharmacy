const CustomButton = (props) => {
  return (
    <div
      className={`flex cursor-pointer items-center justify-center bg-blue-500 rounded-lg py-1 ${props.buttonStyle}`}
    >
      <p
        className={`md:text-sm sm:text-sm text-xs font-light text-white ${props.textStyle}`}
      >
        {props.text}
      </p>
    </div>
  );
};

export default CustomButton;
