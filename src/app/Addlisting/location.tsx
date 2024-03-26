import { FaLocationDot } from "react-icons/fa6";
import React, { useState } from "react";

function Location({
  register,
  errors,
  watch,
  updateDropdownValue,
  Values,
}: any) {
  const [location, setLocation] = useState("");
  const [areaLocation, setLocationArea] = useState<string>("");

  const handleRemoteClick = () => {
    setLocationArea("remote");
  };

  const handleOnSiteClick = () => {
    setLocationArea("on-site");
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleSubmit = () => {
    // Include the selected location type (remote or on-site) when submitting the form data
    const formData = {
      locationType: areaLocation,
      location: location,
    };
    // You can submit formData to your backend or perform further actions
    console.log(formData);
  };

  return (
    <div className="flex flex-col space-y-6 rounded-lg shadow-md p-6 mt-12">
      <div className="flex flex-row gap-2">
        <FaLocationDot className="text-[#25AAE1] text-3xl pt-1" />
        <h1 className="text-base md:text-[27px] font-bold pt-1">Location</h1>
      </div>
      <div>
        <div className="flex items-start pt-5">
          <button
            onClick={handleRemoteClick}
            type="button"
            className={`h-9 w-48 rounded-lg font-bold shadow-lg active:bg-[#25AAE1] focus:text-white active:text-white hover:bg-[#25AAE1] transition duration-200 transform hover:scale-110 ease-in-out text-black hover:text-white ${
              areaLocation === "remote"
                ? "bg-[#25AAE1] text-white"
                : "bg-white text-black"
            }`}
          >
            Remote
          </button>
          <p className="text-sm text-gray-400 mt-3.5 ms-5">
            (Hint: choose this option if you do not have a physical location)
          </p>
        </div>
        <button
          onClick={handleOnSiteClick}
          type="button"
          className={`mt-5 h-9 w-48 rounded-lg font-bold shadow-lg active:bg-[#25AAE1] active:text-white hover:bg-[#25AAE1] transition duration-200 transform hover:scale-110 ease-in-out text-black hover:text-white ${
            areaLocation === "on-site"
              ? "bg-[#25AAE1] text-white"
              : "bg-white text-black"
          }`}
        >
          OnSite
        </button>

        <h1 className="mt-10">Location*</h1>
        <input
          className="mt-2 h-9 w-full rounded-lg focus:ring-[#25AAE1]"
          type="text"
          value={location}
          onChange={handleLocationChange}
        />

        <h1 className="mt-10 font-bold">Map</h1>
        <div className="h-[200px] rounded-2xl mt-5">
          <iframe
            className="rounded-xl"
            width="100%"
            height="100%"
            title="map"
            src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=${encodeURIComponent(
              location
            )}&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
          ></iframe>
        </div>
        <button
          className="mt-5 h-9 w-48 rounded-lg font-bold shadow-lg active:bg-[#25AAE1] active:text-white hover:bg-[#25AAE1] transition duration-200 transform hover:scale-110 ease-in-out text-black hover:text-white bg-[#25AAE1]"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Location;
