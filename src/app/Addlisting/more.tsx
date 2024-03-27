"use client";
import { styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

function More() {
  const [isSelected, setIsSelected] = useState<any>("");
  const [isAmenities, setIsAmenities] = useState<any>("");
  const [isPlanning, setIsPlanning] = useState<any>(""); 
  const [isServiceOptions, setIsServiceOptions] = useState<any>("");
  
  // console.log(isSelected)
  // console.log(isAmenities)
  // console.log(isPlanning)
  // console.log(isServiceOptions)

  const [allValues, setAllValues] = useState<any>({
    accessibility: "",
    amenties: "",
    planning: "",
    service_options: "",
  });

  // useEffect(() => {

  // }, [isSelected, isAmenities, isPlanning, isServiceOptions])

  return (
    <>
      <div className="flex flex-col space-y-6 rounded-lg shadow-md p-6 mt-12">
        <h1 className="text-4xl font-bold">More</h1>
        <div>
          <h1 className="font-bold text-2xl pt-5">Accessibility</h1>
          <p className="text-xs pt-2">
            Let customers know more about your business by showing attributes on
            your Business Profile. These may appear publicly on Search, Maps,
            and other Rolodex services
          </p>
          <h2 className="font-semibold pt-3">Has wheelchair-accessible</h2>
          <div className="pt-5">
            <button
            style={
              isSelected === "seating"
                ? { boxShadow: "2px 4px 5px #444444 inset" }
                : undefined
            }
              onClick={() => setIsSelected("seating")}
              type="button"
              className={`h-9 w-36 mr-5 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${
                isSelected === "seating"
                  ? "bg-[#25AAE1] text-white"
                  : "hover:scale-110"
              }`}
            >
              Seating
            </button>
            <button
             style={
              isSelected === "toilet"
                ? { boxShadow: "2px 4px 5px #444444 inset" }
                : undefined
            }
              onClick={() => setIsSelected("toilet")}
              type="button"
              className={`h-9 w-36 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${
                isSelected === "toilet"
                  ? "bg-[#25AAE1] text-white"
                  : "hover:scale-110"
              }`}
            >
              Toilet
            </button>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl pt-5">Amenties</h1>
          <p className="text-xs pt-2">
            Let customers know more about your business by showing attributes on
            your Business Profile. These may appear publicly on Search, Maps and
            other Rolodex services
          </p>
          <h2 className="font-semibold pt-3">Has gender-neutral</h2>
          <div className="pt-5">
            <button
            style={
              isPlanning === "yes"
                ? { boxShadow: "2px 4px 5px #444444 inset" }
                : undefined
            }
              onClick={() => {
                setIsPlanning("yes");
              }}
              type="button"
              className={`h-9 w-36 mr-5 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${
                isPlanning === "yes"
                  ? "bg-[#25AAE1] text-white"
                  : "hover:scale-110"
              }`}
            >
              Yes
            </button>
            <button
            style={
              isPlanning === "no"
                ? { boxShadow: "2px 4px 5px #444444 inset" }
                : undefined
            }
              onClick={() => {
                setIsPlanning("no");
              }}
              type="button"
              className={`h-9 w-36 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${
                isPlanning === "no"
                  ? "bg-[#25AAE1] text-white"
                  : "hover:scale-110"
              }`}
            >
              No
            </button>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl pt-5">Planning</h1>
          <p className="text-xs pt-2">
            Let customers know more about your business by showing attributes on
            your Business Profile. These may appear publicly on Search, Maps and
            other Rolodex services
          </p>
          <h2 className="font-semibold pt-3">Appointment required</h2>
          <div className="pt-5">
            <button
            style={
              isAmenities === "yes"
                ? { boxShadow: "2px 4px 5px #444444 inset" }
                : undefined
            }
              onClick={() => {
                setIsAmenities("yes");
              }}
              type="button"
              className={`h-9 w-36 mr-5 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform  ease-in-out hover:text-white ${
                isAmenities === "yes"
                  ? "bg-[#25AAE1] text-white"
                  : "hover:scale-110"
              }`}
            >
              Yes
            </button>
            <button
            style={
              isAmenities === "un-selected"
                ? { boxShadow: "2px 4px 5px #444444 inset" }
                : undefined
            }
              onClick={() => {
                setIsAmenities("un-selected");
              }}
              type="button"
              className={`h-9 w-36 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform  ease-in-out hover:text-white ${
                isAmenities === "un-selected"
                  ? "bg-[#25AAE1] text-white"
                  : "hover:scale-110"
              }`}
            >
              No
            </button>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl pt-5">Service options</h1>
          <p className="text-xs pt-2">
            Let customers know more about your business by showing attributes on
            your Business Profile. These may appear publicly on Search, Maps and
            other Rolodex services
          </p>
          <h2 className="font-semibold pt-3">Service Offer</h2>
          <div className="pt-5">
            <button
            style={
              isServiceOptions === "selected"
                ? { boxShadow: "2px 4px 5px #444444 inset" }
                : undefined
            }
              onClick={() => {
                setIsServiceOptions("selected");
              }}
              type="button"
              // style={isSelected == "selected" ? style : undefined}
              className={`h-9 w-36 mr-5 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${
                isServiceOptions === "selected"
                  ? "bg-[#25AAE1] text-white"
                  : "hover:scale-110"
              }`}
            >
              On-Site
            </button>
            <button
              style={
                isServiceOptions === "un-selected"
                  ? { boxShadow: "2px 4px 5px #444444 inset" }
                  : undefined
              }
              onClick={() => {
                setIsServiceOptions("un-selected");
              }}
              type="button"
              className={`h-9 w-36 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${
                isServiceOptions === "un-selected"
                  ? "bg-[#25AAE1] text-white"
                  : "hover:scale-110"
              }`}
            >
              Online
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default More;
