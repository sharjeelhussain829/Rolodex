"use client";
import React, { useEffect, useRef, useState } from "react";
import { PiSquaresFour } from "react-icons/pi";
import Button from "@/components/ui/Button";

function More({setValue}: any) {
  const [accessbilty, setaccessbilty] = useState<any>("");
  const [isplaning, setIsplaning] = useState<any>("");
  const [isamenities, amenities] = useState<any>("");
  const [isServiceOptions, setIsServiceOptions] = useState<any>("");

  const handlechange = (name: any, value: any) =>{
    setValue(name, value)
  } 

  useEffect(() => {
    handlechange("accessibilty", accessbilty )
  }, [accessbilty]);

  useEffect(() => {
    handlechange("plannig", isplaning )
  }, [isplaning]);

  useEffect(() => {
    handlechange("amenties", isamenities )
  }, [isamenities]);

  useEffect(() => {
    handlechange("serviceOption", isServiceOptions )
  }, [isServiceOptions]);
  


  
 

  return (
    <>
      <div className="flex flex-col space-y-6 rounded-lg shadow-md p-6 mt-12">
      <h1 className="text-3xl font-bold flex gap-1">
        <PiSquaresFour className="text-[#25AAE1] relative rounded-2xl text-4xl" />
         More
        </h1>
        <div>
          <h1 className="font-bold text-2xl pt-1">Accessibility</h1>
          <p className="text-xs pt-2">
            Let customers know more about your business by showing attributes on
            your Business Profile. These may appear publicly on Search, Maps,
            and other Rolodex services
          </p>
          <h2 className="font-semibold pt-3">Has wheelchair-accessible</h2>
          <div className="pt-5">
            <button
              style={
                accessbilty === "seating"
                  ? { boxShadow: "0px 0px 10px #444444 inset" }
                  : 
                   {boxShadow: "0px 0px 15px #00000070"} 
              }
              onClick={() => setaccessbilty("seating")}
              type="button"
              className={`h-10 w-36 mr-5 rounded-2xl font-bold  hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${
                accessbilty === "seating"
                  ? "bg-[#25AAE1] text-white"
                  : "hover:scale-110"
              }`}
            >
              Seating
            </button>
            <button
              style={
                accessbilty === "toilet"
                  ? { boxShadow: "0px 0px 10px #444444 inset" }
                  : {boxShadow: "0px 0px 15px #00000070"} 
              }
              onClick={() => setaccessbilty("toilet")}
              type="button"
              className={`h-10 w-36 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${
                accessbilty === "toilet"
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
                isamenities === "yes"
                  ? { boxShadow: "0px 0px 10px #444444 inset" }
                  : {boxShadow: "0px 0px 15px #00000070"} 
              }
              onClick={() => {
                amenities("yes");
              }}
              type="button"
              className={`h-10 w-36 mr-5 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${
                isamenities === "yes"
                  ? "bg-[#25AAE1] text-white"
                  : "hover:scale-110"
              }`}
            >
              Yes
            </button>
            <button
              style={
                isamenities === "no"
                  ? { boxShadow: "0px 0px 10px #444444 inset" }
                  : {boxShadow: "0px 0px 15px #00000070"} 
              }
              onClick={() => {
                amenities("no");
              }}
              type="button"
              className={`h-10 w-36 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${
                isamenities === "no"
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
                isplaning === "yes"
                  ? { boxShadow: "0px 0px 10px #444444 inset" }
                  : {boxShadow: "0px 0px 15px #00000070"} 
              }
              onClick={() => {
                setIsplaning("yes");
              }}
              type="button"
              className={`h-10 w-36 mr-5 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform  ease-in-out hover:text-white ${
                isplaning === "yes"
                  ? "bg-[#25AAE1] text-white"
                  : "hover:scale-110"
              }`}
            >
              Yes
            </button>
            <button
              style={
                isplaning === "no"
                  ? { boxShadow: "0px 0px 10px #444444 inset" }
                  : {boxShadow: "0px 0px 15px #00000070"} 
              }
              onClick={() => {
                setIsplaning("no");
              }}
              type="button"
              className={`h-10 w-36 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform  ease-in-out hover:text-white ${
                isplaning === "no"
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
                isServiceOptions === "OnSite"
                  ? { boxShadow: "0px 0px 10px #444444 inset" }
                  : {boxShadow: "0px 0px 15px #00000070"} 
              }
              onClick={() => {
                setIsServiceOptions("OnSite");
              }}
              type="button"
              // style={isSelected == "selected" ? style : undefined}
              className={`h-10 w-36 mr-5 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${
                isServiceOptions === "OnSite"
                  ? "bg-[#25AAE1] text-white"
                  : "hover:scale-110"
              }`}
            >
              On-Site
            </button>
            <button
              style={
                isServiceOptions === "Online"
                  ? { boxShadow: "0px 0px 10px #444444 inset" }
                  : {boxShadow: "0px 0px 15px #00000070"} 
              }
              onClick={() => {
                setIsServiceOptions("Online");
              }}
              type="button"
              className={`h-10 w-36 rounded-2xl font-bold shadow-lg hover:bg-[#25AAE1] transition duration-200 transform ease-in-out hover:text-white ${
                isServiceOptions === "Online"
                  ? "bg-[#25AAE1] text-white"
                  : "hover:scale-110"
              }`}
            >
              Online
            </button>
          </div>
        </div>
        <div className="flex justify-end pt-5 pr-10">
              <Button type={"submit"} className={"!px-12 rounded-xl w-48 h-12"} >
                Publish
              </Button>
        </div>
      </div>
    </>
  );
}

export default More;