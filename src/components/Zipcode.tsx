import React, { useEffect, useState } from "react";
import "../App.css";



const reg = RegExp(/^[0-9]{5}(?:[0-9]{4})?$/);

const Zipcode = () => {
  const [displayValidation, setDisplayValidation] = useState(false);
  const [zip, setZip] = useState("");

  const isValid = (val: string) =>  reg.test(val)
   
  useEffect(() => {
    (isValid(zip) )
      ? setDisplayValidation(true)
      : setDisplayValidation(false);
  }, [zip]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setZip("");
    setDisplayValidation(false);
  };

  return (
    <div className="">
        <div className="flex flex-col gap-8 justify-center items-center mx-auto w-full h-[100vh]">
      <div className="flex flex-col justify-center items-center  ">
        <h2 className="text-sm sm:text-[2.5rem] leading-2 md:leading-10 text-[#1967a9]">
          We just need your zip
        </h2>
        <p className="text-xs text-gray-600 ">
          In other to make sure our service is available in your area please
          enter your zip code below
        </p>
      </div>
      <form onSubmit={onSubmit} action="" className=" uppercase w-1/4 ">
        <div className="">
        <div className="flex justify-evenly">
          <input
            className=" bg-gray-300 text-gray-600 uppercase p-4 text-center focus:outline outline-offset-2 outline-2 outline-gray-300 rounded m-2"
            type="number"
            name="zip"
            value={zip}
            placeholder="enter your zip"
            onChange={(e) => setZip(e.target.value)}
          />
          <button
            className="not-allowed bg-[#1967a9] text-white uppercase p-4 text-center cursor-pointer rounded m-2 hover:bg-blue-400"
            type="submit"
            
            disabled={zip.length === 0}
          >
            Submit
          </button>
        </div>
        </div>
      </form>
      {!zip ? (
        ""
      ) : displayValidation === true ? (
        ""
      ) : (
        <ul className="text-red-600 text-xs">
          <li>{zip} is not a valid US zip code</li>
          <li>Zip code should be 5 or 9 digits</li>
          <li>Only numbers and allowed</li>
        </ul>
      )}
    </div>
    </div>
  );
};

export default Zipcode;
