import React, { useEffect, useState } from "react";
import AppColors from "./AppColors";
import CustomButton from "./CustomButton";
import LookingForCard from "./LookingForCard";

const LookingForSection = (props) => {
  const [ApiData, SetApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    console.log("Here it is using effect");
    await fetch("https://api.mocki.io/v1/e850cf67")
      .then((response) => response.json())
      .then((data) => {
        SetApiData(data);
      });
  }, []);

  return (
    <div class="flex flex-grow md:px-32 sm:px-8 px-4">
      <div class="flex flex-grow flex-col flex-wrap bg-white md:p-5 sm:p-4 p-3 rounded-xl border">
        <div class="flex flex-grow justify-between pl-4">
          <p
            className={"md:text-2xl sm:text-base text-base"}
            style={{ color: AppColors.appBlue }}
          >
            {props.title}
          </p>
        </div>
        <div class="grid md:grid-cols-4 sm:grid-cols-4 grid-cols-2 bg-white rounded py-4">
          {ApiData != undefined && ApiData.length
            ? ApiData.map((item, index) => {
                return (
                  <LookingForCard
                    key={index}
                    image={item.image}
                    title={item.title}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default LookingForSection;
