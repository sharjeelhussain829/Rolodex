"use client";
import TextFeild from "@/components/forms/TextFeild";
import MultiSelect from "@/components/forms/multiselect";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import RadioInput from "@/components/forms/radioinput";
import Dropdown from "@/components/ui/custom_dropdown";
import axios from "axios";
import { Api } from "@/utils/api";
import {
  IoIosInformationCircleOutline,
  IoMdAdd,
  IoMdClose,
} from "react-icons/io";
import { MdAddBox } from "react-icons/md";
import FileInput from "@/components/forms/fileInput";
// import ImageInput from "@/components/forms/imageInput";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import ProductTextFeild from "@/components/forms/ProductTextField";
// import AddProductModal from "@/components/modals/AddProductModal";
import Button from "@/components/ui/Button";
import ServiceTextFeild from "@/components/forms/serviceTextField";
import { FaMinus } from "react-icons/fa6";
import ProductModal from "@/components/forms/modal";
import { IoIosClose } from "react-icons/io";

function BasicInfo({
  register,
  errors,
  watch,
  updateDropdownValue,
  getValues,
  addProduct,
}: any) {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [dropdownCount, setDropdownCount] = useState(1);
  const [categories, setcategories] = useState([]);
  const [selectedOption, setSelectedOption] = React.useState<string | null>(
    null
  );


  const [selectedCompanyNature, setSelectedCompanyNature] = React.useState<
    string[]
  >([]);
  const [selectedCategories, setselectedCategories] = useState<any>([
    "Option 1",
    "Option 2",
    "Option 3",
  ]);

  // drag company logo image functions start

  const [selectedCompanyImage, setSelectedCompanyImage] = useState<any>();
  const fileInputRef = useRef<any>(null);

  const handleImageClick = (fileInputRef: any) => {
    fileInputRef?.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const selectedFile = event?.target?.files?.[0];

    if (selectedFile) {
      try {
        if (!selectedFile.type.startsWith("image/")) {
          throw new Error("Invalid file type. Please upload an image.");
        }

        const formData = new FormData();
        formData.append("profile_pic", selectedFile);

        const reader = new FileReader();
        reader.onloadend = () => {
          const dataUrl = reader?.result as string;
          setValue("image", dataUrl);
          setSelectedImage(dataUrl);
        };

        reader.readAsDataURL(selectedFile);
      } catch (error) {
        console.error("Error handling file change:");
      }
    }
  };
  // drag company logo image functions end

  // Dropdown for category
  const [serviceCategory, setServiceCategory] = useState<any>([]); // it takes service modal values what user added for

  const addServiceCategory = (index: any) => {
    setServiceCategory([...serviceCategory, selectedCategories[index]]);
    const updatedSelectedCategories = [...selectedCategories];
    updatedSelectedCategories.splice(index, 1);
    setselectedCategories(updatedSelectedCategories);
  };

  const removeServiceCategory = (index: any) => {
    setselectedCategories([...selectedCategories, serviceCategory[index]]);
    const updatedServiceCategory = [...serviceCategory];
    updatedServiceCategory.splice(index, 1);
    setServiceCategory(updatedServiceCategory);
  };

  const [selectedCategoryValues, setSelectedCategoryValues] = useState<
    string[]
  >([]);
  const [isValueNotExist, setIsValueNotExist] = useState<any>(false);

  const handleDropdownChange = (index: number, selectedOption: string) => {
    const updatedValues = [...selectedCategoryValues];
    updatedValues[index] = selectedOption;
    setSelectedCategoryValues(updatedValues);
    setIsValueNotExist(true);
  };

  useEffect(() => {
    updateDropdownValue("category", selectedCategoryValues);
  }, [selectedCategoryValues]);

  const addDropdown = () => {
    if (selectedCategoryValues.length == dropdownCount) {
      setDropdownCount((prevCount) => prevCount + 1);
      setIsValueNotExist(true);
    } else {
      // setIsValueNotExist(false);
      setIsValueNotExist("error");
    }
  };

  const removeDropdown = (indexToRemove: any) => {
    setDropdownCount((prevCount: any) => prevCount - 1);
    selectedCategoryValues.splice(indexToRemove, 1);
    setIsValueNotExist(true);
  };
  // Dropdown for category
  useEffect(() => {
    axios
      .get(`${Api}/categories`)
      .then((data) => {
        setcategories(data.data.data);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const dropdownItems = [
    "Python",
    "JavaScript",
    "Ruby",
    "JAVA",
    "ASP.Net",
    "C++",
    "SQL",
    "HTML",
  ];

  function isOpen() {
    setOpen(!open);
  }

  const onServiceOpenModal = () => setServiceOpen(true);
  const onServiceCloseModal = () => setServiceOpen(false);

  // const [services, setServices] = useState<any>([]);

  // const addService = (serviceData: any) => {
  //   setServices([...services, serviceData]);
  //   onServiceCloseModal();
  // };

  function handleOptionClick(v: string | null) {
    setSelectedOption(v);
    console.log(v);
  }

  function handleNatureClick(value: string) {
    const index = selectedCompanyNature.indexOf(value);

    if (index === -1) {
      setSelectedCompanyNature([...selectedCompanyNature, value]);
    } else {
      setSelectedCompanyNature((prevState) =>
        prevState.filter((item) => item !== value)
      );
    }
  }

  const { setValue } = useForm();

  const [selectedCompanyImage1, setSelectedCompanyImage1] = useState<any>();
  const fileInputRef1 = useRef<any>(null);

  const handleImageClick1 = (fileInputRef: any) => {
    fileInputRef?.current?.click();
  };

  const handleFileChange1 = (
    event: React.ChangeEvent<HTMLInputElement>,
    setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const selectedFile = event?.target?.files?.[0];

    if (selectedFile) {
      try {
        if (!selectedFile.type.startsWith("image/")) {
          throw new Error("Invalid file type. Please upload an image.");
        }

        const formData = new FormData();
        formData.append("profile_pic", selectedFile);

        const reader = new FileReader();
        reader.onloadend = () => {
          const dataUrl = reader?.result as string;
          setValue("images", dataUrl);
          setSelectedImage(dataUrl);
        };

        reader.readAsDataURL(selectedFile);
      } catch (error) {
        console.error("Error handling file change:");
      }
    }
  };

  return (
    <div className="flex flex-col  rounded-lg shadow-md p-6 ">
      <h1 className="text-2xl md:2text-xl font-bold flex">
        <IoIosInformationCircleOutline className="text-[#25AAE1] relative top-1 me-2" />{" "}
        About Your Business
      </h1>
      <div className="w-50">
        {[
          {
            fileInputRef: fileInputRef,
            selectedImage: selectedCompanyImage,
            setSelectedImage: setSelectedCompanyImage,
          },
        ].map((items, index) => (
          <FileInput
            required
            name={"businessCardImage"}
            label={"Company Logo*"}
            register={register}
            key={index}
            index={index}
            items={items}
            errors={errors}
            setSelectedImage={items.setSelectedImage}
            selectedImage={items.selectedImage}
            handleImageClick={handleImageClick}
            handleFileChange={handleFileChange}
            fileInputRef={items}
          />
        ))}
      </div>
      <div className=" space-y-6 mt-4">
        <div className="flex gap-4">
          <TextFeild
            required
            name={"business_name"}
            inputType={"text"}
            label={"Business Name*"}
            register={register}
            maxLength={{ value: 20, message: "Max Length 20" }}
            minLength={{ value: 4, message: "Min Length 4" }}
            error={errors?.business_name?.message}
            placeholder={
              "Enter your business name as it appears to customers in the real world"
            }
          />
        </div>
        <div>
          <label className={`block text-sm font-semibold`}>Category*</label>
          <p className="text-gray-400 text-xs mb-1">
            Help customers find your business by industry.
          </p>

          <div className="flex flex-wrap">
            <div className=" w-full sm:w-[50%]">
              {[...Array(dropdownCount)].map((_, index) => (
                <div className="flex items-center mt-2" key={index}>
                  <Dropdown
                    register={register}
                    required
                    key={index}
                    error={errors?.category?.message}
                    className="border-2 border-gray-200 sm:w-[100%] w-full rounded-lg"
                    title="Accommodation"
                    onChange={(selectedOption: string) =>
                      handleDropdownChange(index, selectedOption)
                    }
                    options={categories}
                  />
                  {index !== 0 && (
                    <button className="flex cursor-pointer left-1/3">
                      <IoIosClose
                        className="ms-8 rounded-sm p-auto text-2xl font-extrabold text-white bg-[#25AEE1]"
                        onClick={() => removeDropdown(index)}
                      />
                      {/* <span className="ms-1">Remove Category</span> */}
                    </button>
                  )}
                </div>
              ))}
              <span className="text-red-500 text-[14px]">
                {errors?.category?.message ||
                  (isValueNotExist == "error" && !isValueNotExist) ||
                  (isValueNotExist == "error" && "Please select your category")}
              </span>
            </div>
            <div className="ms-3 cursor-pointer">
              <button
                type="button"
                onClick={addDropdown}
                className="flex items-center justify-center mt-2 select-none"
              >
                <MdAddBox className="text-[#25AAE1] text-3xl rounded-3xl mt-1" />
                Add Another Category
              </button>
            </div>
          </div>
          <div className="">
            <label className={`block text-sm mt-4 font-semibold `}>
              Description*
            </label>
            <textarea
              {...register("description", {
                required: `Description  is required`,
                maxLength: 750,
                minLength: 4,
              })}
              name={"description"}
              placeholder="Describe your business here..."
              className="border-2 w-full my-1 focus:ring-0 focus:border-primary p-4 border-gray-200  rounded-xl resize-none"
              id=""
              cols={30}
              rows={5}
            ></textarea>
            <p className="text-gray-300 text-sm text-right">
              750 characters left
            </p>
            <span className="text-red-400 block text-[12px] mt-1  font-poppin font-normal">
              {errors.description?.message}
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-base md:text-xl font-semibold  mb-4">
            Are you listing on Rolodex as part of a company?
          </h1>
          <span className="text-gray-400 text-md">I am a</span>
          <div className="mt-2">
            <label className="inline-flex items-center sm:space-x-4">
              <input
                type="radio"
                className="hidden"
                {...register("company_type", {
                  required: `Company type is required`,
                })}
                name={"company_type"}
                value="Registered business"
                id="Registered business"
                checked={selectedOption === "Registered business"}
                onChange={() => handleOptionClick("Registered business")}
              />
              <button
                style={
                  selectedOption === "Registered business"
                    ? {
                        boxShadow: "2px 2px 8px #444444 inset",
                      }
                    : undefined
                }
                type="button"
                onClick={() => handleOptionClick("Registered business")}
                className={`px-5 py-2 rounded w-40 text-sm font-bold sm:text-[16px] sm:w-60  text-center transition-duration-200 ${
                  selectedOption === "Registered business"
                    ? "bg-[#25AAE1] text-white shadow-lg-inner inset-0 "
                    : "bg-white drop-shadow-lg hover:scale-110"
                }`}
              >
                Registered business
              </button>
            </label>

            <label className="inline-flex items-center sm:space-x-4 my-2">
              <input
                type="radio"
                className="hidden"
                name={"company_type"}
                {...register("company_type", {
                  required: `Company type is required`,
                })}
                value="Private seller"
                id="Private seller"
                checked={selectedOption === "Private seller"}
                onChange={() => handleOptionClick("Private seller")}
              />
              <button
                style={
                  selectedOption === "Private seller"
                    ? {
                        boxShadow: "2px 2px 8px #444444 inset",
                      }
                    : undefined
                }
                type="button"
                onClick={() => handleOptionClick("Private seller")}
                className={`px-4 py-2 font-bold  rounded w-40 text-sm sm:text-[16px] sm:w-60  text-center transition-duration-200 ${
                  selectedOption === "Private seller"
                    ? "bg-[#25AAE1] text-white shadow-lg-inner inset-0 "
                    : "bg-white drop-shadow-lg hover:scale-110"
                }`}
              >
                Private seller
              </button>
            </label>
          </div>

          <span className="text-red-400 block text-[12px] mt-1  font-poppin font-normal">
            {errors?.company_type?.message}
          </span>
        </div>
        <div>
          <h1 className="text-base md:text-xl font-semibold  mb-4">
            List your Products and Services
          </h1>
          <div>
            <label className="inline-flex items-center sm:space-x-4">
              <input
                type="checkbox"
                className="hidden"
                name="NatureOpt"
                value="Product"
                id="Product"
                checked={selectedCompanyNature.includes("Product")}
                onChange={() => handleNatureClick("Product")}
              />
              <span
                style={
                  selectedCompanyNature.includes("Product")
                    ? {
                        boxShadow: "2px 2px 8px #444444 inset",
                      }
                    : undefined
                }
                className={`px-4 font-bold py-2 rounded cursor-pointer w-40 text-sm sm:text-[16px] sm:w-60  text-center transition-duration-200 ${
                  selectedCompanyNature.includes("Product")
                    ? "bg-[#25AAE1] text-white shadow-inner"
                    : "bg-white drop-shadow-lg hover:scale-110"
                }`}
              >
                Product
              </span>
            </label>

            <label className="inline-flex items-center sm:space-x-4 mt-2">
              <input
                type="checkbox"
                className="hidden"
                name="NatureOpt"
                value="Services"
                id="Services"
                checked={selectedCompanyNature.includes("Services")}
                onChange={() => handleNatureClick("Services")}
              />
              <span
                style={
                  selectedCompanyNature.includes("Services")
                    ? {
                        boxShadow: "2px 2px 8px #444444 inset",
                      }
                    : undefined
                }
                className={`px-4 font-bold py-2 rounded cursor-pointer w-40 text-sm sm:text-[16px] sm:w-60 text-center transition-duration-200 ${
                  selectedCompanyNature.includes("Services")
                    ? "bg-[#25AAE1] text-white shadow-inner"
                    : "bg-white drop-shadow-lg hover:scale-110"
                }`}
              >
                Services
              </span>
            </label>
          </div>
          
          <ProductModal open={open} isOpen={isOpen} categories={categories} addProduct={addProduct}/>

          <div className="flex flex-wrap mt-2">
            {!selectedCompanyNature.includes("Product") ? (
              ""
            ) : (
              <div className="ms-3 cursor-pointer space-x-4">
                <button
                  onClick={isOpen}
                  type="button"
                  className="flex text-[#25AAE1] items-center mt-2 w-60"
                >
                  <MdAddBox className="text-[#25AAE1] rounded-3xl ms-6 text-4xl" />
                  Add product
                </button>
              </div>
            )}
            <Modal open={serviceOpen} onClose={onServiceCloseModal} center>
              <div className="flex gap-4 flex-wrap">
                <div className="mb-2">
                  <div className="">
                    <label className={`block text-sm mt-4 font-semibold `}>
                      Start typing to search for service or type your service
                    </label>
                    <div className="w-full border-4 rounded-md py-2 px-4 min-h-[100px] w-100">
                      <label>
                        Start typing to search for service or type your service{" "}
                      </label>
                      <div className="flex">
                        {serviceCategory.map((v: any, i: any) => (
                          <span
                            key={i}
                            className="flex items-center mt-4 px-4 py-2 me-2 text-white rounded-[20px] bg-[#25AAE1]"
                          >
                            {v}{" "}
                            <IoMdClose
                              className="ms-4 cursor-pointer text-[25px] transition-all hover:text-[30px]"
                              onClick={() => removeServiceCategory(i)}
                            />
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="">
                      {selectedCategories.map((val: any, index: any) => (
                        <span
                          key={index}
                          className="flex items-center my-2 w-fit"
                        >
                          <span className=" px-4 py-2 text-white rounded-[20px] bg-[#25AAE1]">
                            {val}{" "}
                          </span>
                          <IoMdAdd
                            onClick={() => addServiceCategory(index)}
                            className="ms-2 cursor-pointer text-[25px] transition-all hover:text-[30px]"
                          />
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type={"submit"}
                      onClick={onServiceCloseModal}
                      className={"!px-12   !rounded-full"}
                    >
                      Publish
                    </Button>
                  </div>
                </div>
              </div>
            </Modal>
            <span>
              {!selectedCompanyNature.includes("Services") ? (
                ""
              ) : (
                <div className="ms-3 cursor-pointer space-x-4">
                  <button
                    type="button"
                    onClick={onServiceOpenModal}
                    className="flex items-center text-[#25AAE1] mt-2 w-60"
                  >
                    <MdAddBox className="text-[#25AAE1] rounded-3xl ms-6 text-4xl" />
                    Add Another Service
                  </button>
                </div>
              )}
            </span>
          </div>

          <span className="text-red-400 block text-[12px] mt-1  font-poppin font-normal">
            {errors?.sevice_type?.message}
          </span>
        </div>
        {getValues().sevice_type && (
          <>
            {/* <div className={`block m  font-semibold  `}>
              {getValues()?.sevice_type + "*"}
            </div> */}
            <MultiSelect items={dropdownItems} getValues={getValues} />
          </>
        )}
      </div>
    </div>
  );
}

export { BasicInfo };
