const SimpleCard = (props) => {
  return (
    <div
      class={`flex items-centerjustify-center flex-col p-3 ${props.containerStyle}`}
      // style={{ backgroundColor: "red" }}
    >
      <div
        class={`flex cursor-pointer ${props.containerStyle}`}
        style={{ borderRightWidth: props.showBorder ? 1 : 0 }}
      >
        <img
          src={props.image}
          // className={"w-28"}
        />
      </div>
      <div
        className={
          "flex mt-1 md:w-auto sm:w-44 w-36 items-center justify-center"
        }
      >
        <p className={"md:text-base sm:text-sm text-xs  bold"}>{props.title}</p>
      </div>
    </div>
  );
};

export default SimpleCard;
