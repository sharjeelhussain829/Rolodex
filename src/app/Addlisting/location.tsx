import { GrLocation } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import React, { useEffect, useState } from "react";


function Location({ setValue, errors, Values, clearErrors }: any) {

  const [areaLocation, setLocationArea] = useState<string>("");
  const [inputLocations, setInputLocations] = useState([""]); // Initial input field
  const [inputErrors, setInputErrors] = useState<boolean[]>([false]); // Tracks if each input has error

  // Function to handle adding a new input field
  const handleAddLocation = () => {
    // Check if the last input field is empty
    if (inputLocations[inputLocations.length - 1].trim() === "") {
      // If empty, set error for the last input field
      setInputErrors([...inputErrors.slice(0, inputErrors.length - 1), true]);
      return;
    }

    // Add a new input field
    setInputLocations([...inputLocations, ""]);
    setInputErrors([...inputErrors, false]); // Reset error for the newly added input field
  };

  // Function to handle removing an input field
  const handleRemoveLocation = (indexToRemove: number) => {
    const updatedLocations = inputLocations.filter((_, index) => index !== indexToRemove);
    setInputLocations(updatedLocations);
    const updatedErrors = inputErrors.filter((_, index) => index !== indexToRemove);
    setInputErrors(updatedErrors);
  };

  // Function to handle input change
  const handleInputChange = (index: number, value: string) => {
    const updatedLocations = [...inputLocations];
    updatedLocations[index] = value;
    setInputLocations(updatedLocations);

    const updatedErrors = [...inputErrors];
    updatedErrors[index] = value.trim() === ""; // Check if input is empty
    setInputErrors(updatedErrors);
  };

  // Triggering handlechange whenever inputLocations changes
  useEffect(() => {
    setValue("input_Location", inputLocations);
    clearErrors("input_Location")
  }, [inputLocations]);

  const handlechange = (name: any, value: any) => {
    setValue(name, value);
  };
  const handleOnClick = (v: any) => {
    setLocationArea(v);
    handlechange("location_type", v);
  };

  return (
    <div className="flex flex-col space-y-6 rounded-lg shadow-md p-6 mt-12">
      <div className="flex flex-row gap-2">
        <GrLocation className="text-[#25AAE1] text-4xl pt-1" />
        <h1 className="md:text-[27px] font-bold pt-1 text-2xl">Location</h1>
      </div>
      <div>
        <div className="flex flex-wrap items-start pt-5">
          <button
            onClick={() => handleOnClick("remote")}
            type="button"
            style={{
              boxShadow: "0px 0px 15px #00000070",
              ...(areaLocation === "remote" ? { boxShadow: "0px 0px 10px #444444 inset" } : {})
            }}
            
            className={`h-9 w-48 rounded-lg font-bold  active:bg-[#25AAE1] focus:text-white active:text-white hover:bg-[#25AAE1] transition duration-200 transform hover:scale-110 ease-in-out text-black hover:text-white ${
              areaLocation === "remote"
                ? "bg-[#25AAE1] text-white hover:scale-[100%] "
                : "bg-white text-black"
            }`}
          >
            Remote
          </button>
          <p className="text-sm text-gray-400 mt-3 ms-5">
            (Choose this option : No visitors, we handle everything remotely)
          </p>
        </div>
        <div className="flex flex-wrap items-start pt-3">
          <button
            onClick={() => handleOnClick("Mobile")}
            type="button"
            style={{
              boxShadow: "0px 0px 15px #00000070",
              ...(areaLocation === "Mobile" ? { boxShadow: "0px 0px 10px #444444 inset" } : {})
            }}
            
            className={`mt-2 h-9 w-48 rounded-lg font-bold  active:bg-[#25AAE1] active:text-white hover:bg-[#25AAE1] transition duration-200 transform hover:scale-110 ease-in-out text-black hover:text-white ${
              areaLocation === "Mobile"
                ? "bg-[#25AAE1] text-white hover:scale-[100%]"
                : "bg-white text-black"
            }`}
          >
            Mobile
          </button>
          <p className="text-sm text-gray-400 mt-3 ms-5">
            (Choose this option : We'll come to you, wherever you are)
          </p>
        </div>
        <div className="flex flex-wrap items-start pt-3">
          <button
            onClick={() => handleOnClick("Location")}
            type="button"
            style={{
              boxShadow: "0px 0px 15px #00000070",
              ...(areaLocation === "Location" ? { boxShadow: "0px 0px 10px #444444 inset" } : {})
            }}
            
            className={`mt-2 h-9 w-48 rounded-lg font-bold active:bg-[#25AAE1] active:text-white hover:bg-[#25AAE1] transition duration-200 transform hover:scale-110 ease-in-out text-black hover:text-white ${
              areaLocation === "Location"
                ? "bg-[#25AAE1] text-white hover:scale-[100%]"
                : "bg-white text-black"
            }`}
          >
            Location
          </button>
          <p className="text-sm text-gray-400 mt-3 ms-5">
            (Choose this option : Feel free to visit us, our doors are always
            open)
          </p>
        </div>

        <h1 className="mt-10">Location*</h1>
        {inputLocations.map((location, index) => (
          <div key={index} className="relative">
            <input
              type="text"
              value={location}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder="Please input your location"
              className="md:w-[96%] w-[87%] outline-none focus:border-[#25AEE1] mt-2 rounded-lg"
            />
              {inputErrors[index] && ( // Display error message if input is empty
                <p className="text-[red] pt-2 text-[14px]">Please input your location</p>
              )}
            {index === inputLocations.length - 1 && (
              <button
                type="button"
                onClick={handleAddLocation}
                className="flex mt-7 h-8 rounded-md text-[#25AAE1] align-middle"
              >
                <FaPlus className="text-white p-1 text-3xl bg-[#25AAE1] rounded-md me-2" />
                Add Another Location
              </button>
            )}
            {index !== inputLocations.length - 1 && (
              <button
                type="button"
                onClick={() => handleRemoveLocation(index)}
                className="pt-3 pb-3 ms-2 text-xl"
              >
                <FaTrash className="text-[#25AAE1]" />
              </button>
            )}
          </div>
        ))}
      </div>
      <span className="text-red-400 block text-[12px] mt-1  font-poppin font-normal">{errors?.input_Location?.message}</span>
    </div>
  );
}

export default Location;