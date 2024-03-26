"use client";
import { FaLocationDot } from "react-icons/fa6";
// import { useState } from "react";
import TextFeild from "@/components/forms/TextFeild";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import RadioInput from "@/components/forms/radioinput";
import Dropdown from "@/components/ui/custom_dropdown";
import axios from "axios";
import { Api } from "@/utils/api";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function BusinessHours({
  register,
  errors,
  watch,
  updateDropdownValue,
  Values,
}: any) {
  const [days, setDays] = useState<any>([
    {
      day: "Monday",
      isChecked: false,
      timing: [
        {
          openingHours: "",
          closingHours: "",
        },
      ],
    },
    {
      day: "Tuesday",
      isChecked: false,
      timing: [
        {
          openingHours: "",
          closingHours: "",
        },
      ],
    },
    {
      day: "Wednesday",
      isChecked: false,
      timing: [
        {
          openingHours: "",
          closingHours: "",
        },
      ],
    },
    {
      day: "Thursday",
      isChecked: false,
      timing: [
        {
          openingHours: "",
          closingHours: "",
        },
      ],
    },
    {
      day: "Friday",
      isChecked: false,
      timing: [
        {
          openingHours: "",
          closingHours: "",
        },
      ],
    },
    {
      day: "Saturday",
      isChecked: false,
      timing: [
        {
          openingHours: "",
          closingHours: "",
        },
      ],
    },
    {
      day: "Sunday",
      isChecked: false,
      timing: [
        {
          openingHours: "",
          closingHours: "",
        },
      ],
    },
  ]);
  console.log(days)
  const [timeOptions, setTimeOptions] = useState<any>([]);

  useEffect(() => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    setTimeOptions([...options, "24:00"]);
  }, []);

  const handleCheckboxClick = (index: any) => {
    const updatedWeekDays = [...days];
    updatedWeekDays[index].isChecked = !updatedWeekDays[index].isChecked;
    setDays(updatedWeekDays);
  };

  const addDropdown = (index: any) => {
    const updatedDays = [...days];
    if (updatedDays[index].timing.length === 1) {
      updatedDays[index].timing.push({ openingHours: "", closingHours: "" });
      setDays(updatedDays);
    }
  };

  const removeDropdown = (dayIndex: any, timingIndex: any) => {
    const updatedDays = [...days];
    if (updatedDays[dayIndex].timing.length > 1) {
      updatedDays[dayIndex].timing.splice(timingIndex, 1);
      setDays(updatedDays);
    }
  };


  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-8">Opening Hours</h2>
      {days.map((day: any, dayIndex: any) => (
        <div key={dayIndex} className="ms-6">
          <h2 className="mt-2 font-bold">{day.day}</h2>
          <div className="flex justify-between flex-wrap mt-2">
            <div className="flex mb-4">
              <input
                checked={day.isChecked}
                onChange={() => handleCheckboxClick(dayIndex)}
                type="checkbox"
                className="w-4 h-4 text-[#25AEE1] border-gray-300 rounded focus:ring-[#25AEE1] dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Closed
              </label>
            </div>
            <div className="flex justify-between min-w-96 gap-4">
              {!day.isChecked && (
                <div className="flex flex-col">
                  {day.timing.map((timingItem: any, timingIndex: any) => (
                    <div className="flex mt-4 flex-wrap" key={timingIndex}>
                      <div className="flex flex-col">
                        <TextField
                          focused
                          onChange={(event: any) => {
                            const updatedDays = [...days];
                            updatedDays[dayIndex].timing[
                              timingIndex
                            ].openingHours = event.target.value;
                            setDays(updatedDays);
                          }}
                          id="outlined-select-currency"
                          select
                          className="w-48"
                          label="Opening Hours"
                          defaultValue="24:00"
                        >
                          {timeOptions.map((time: any, index: any) => (
                            <MenuItem key={index} value={time}>
                              {time}
                            </MenuItem>
                          ))}
                        </TextField>
                      </div>
                      {timingItem.openingHours !== "24:00" &&
                        timingItem.openingHours !== "" && (
                          <div className="flex flex-col mt-4 md:mt-0 md:ms-4">
                            <TextField
                              focused
                              onChange={(event: any) => {
                                const updatedDays = [...days];
                                updatedDays[dayIndex].timing[
                                  timingIndex
                                ].closingHours = event.target.value;
                                setDays(updatedDays);
                              }}
                              id="outlined-select-currency"
                              select
                              className="w-48"
                              label="Closing Hours"
                              defaultValue="24:00"
                            >
                              {timeOptions.map((time: any, index: any) => (
                                <MenuItem key={index} value={time}>
                                  {time}
                                </MenuItem>
                              ))}
                            </TextField>
                          </div>
                        )}
                      {!day.isChecked && timingIndex === 0 && (
                        <div className="mt-4 ms-4 text-[25px] cursor-pointer hover:scale-110 hover:transition-all">
                          <IoMdAdd onClick={() => addDropdown(dayIndex)} />
                        </div>
                      )}
                      {!day.isChecked &&
                        day.timing.length !== 1 &&
                        timingIndex === 1 && (
                          <div className="mt-4 ms-4 text-[25px] cursor-pointer hover:scale-110 hover:transition-all">
                            <IoMdRemove
                              onClick={() =>
                                removeDropdown(dayIndex, timingIndex)
                              }
                            />
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default BusinessHours;
