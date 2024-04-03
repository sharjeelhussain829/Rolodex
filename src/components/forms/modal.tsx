"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Dropdown from "@/components/ui/custom_dropdown";
import axios from "axios";
import { Api } from "@/utils/api";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ProductTextFeild from "@/components/forms/ProductTextField";
import ProductImageInput from "@/components/forms/productImageIput";

export default function ProductModal({
  open,
  isOpen,
  addProduct,
  categories,
  draftId
}: any) {
  const [selectedProductImage1, setSelectedProductImage1] = useState<any>();
  const fileInputRef2 = useRef<any>(null);
  const [file,setFile] =useState<any>()
  const [formData, setFormData] = useState({
    product_name: "",
    product_description: "",
    product_category: "",
    product_price: "",
    product_url: "",
    product_category2: "",
    image: "",
    product_images:''
  });

  const [err, setErr] = useState<any>({
    product_name: false,
    product_category2: false,
    image: false,
  });

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErr((prevErr: any) => ({ ...prevErr, [name]: false }));

  };
  
  const handleSubmitProductModalForm = (e: any) => {
    e.preventDefault();
    if (formData.product_name.trim() === "") {
      setErr({ ...err, product_name: true });
      return;
    }
    if (formData.product_category2.trim() == "") {
      setErr({ ...err, product_category2: true });
      return;
    }
    //  if (formData.product_category.trim() == "") {
    //   setErr({ ...err, product_category: true });
    //   return;
    // }
    if (selectedProductImage1 === "") {
      setErr({ ...err, image: true });
      return;
    }

    formData.image = selectedProductImage1;
    formData.product_images = file

    setErr({
      product_name: false,
      product_category2: false,
      image: false,
    });

    addProduct(formData);

    setFormData({
      product_name: "",
      product_description: "",
      product_category: "",
      product_price: "",
      product_url: "",
      product_category2: "",
      image: "",
    });
    
    isOpen();
    setSelectedProductImage1("");
  };

  const handleImageClick = (fileInputRef: any) => {
    fileInputRef?.current?.click();
  };

  const handleFileChange2 = (
    event: React.ChangeEvent<HTMLInputElement>,
    setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const selectedFile = event?.target?.files?.[0];
    setFile(selectedFile);
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
          setSelectedImage(dataUrl);
          setSelectedProductImage1(dataUrl);
          setErr((prevErr: any) => ({ ...prevErr, image: false }));
        };

        reader.readAsDataURL(selectedFile);
      } catch (error) {
        console.error("Error handling file change:");
      }
    }
  };

  return (
    <Modal open={open} onClose={isOpen} center>
      <div className="flex gap-4 flex-wrap">
        <div className="flex gap-6">
          <div className="mb-2">
            <div>
              <ProductTextFeild
                required
                name={"product_name"}
                inputType={"text"}
                label={"Product Name*"}
                placeholder={"Product Name"}
                // required={true}
                // label="Product Name*"
                // placeholder={"Product name"}
                value={formData.product_name}
                onChange={handleFormChange}
              />
              <span className="text-red-500 text-[12px]">
                {err.product_name ? "Product name is required" : ""}
              </span>
            </div>

            <div className="mt-4">
              <Dropdown
                className={"border-2 border-gray-200 rounded-lg w-full"}
                title={"Select Category*"}
                onChange={(e: any) => {
                  setFormData({ ...formData, product_category2: e.name });
                  setErr((prevErr: any) => ({
                    ...prevErr,
                    product_category2: false,
                  }));
                }}
                options={categories}
              />
              <span className="text-red-500 text-[14px]">
                {err.product_category2 ? "Product category is required" : ""}
              </span>
            </div>

            <div className="mt-4">
              <ProductTextFeild
                label="Product Category"
                name="product_category"
                placeholder={"Product category"}
                value={formData.product_category}
                onChange={handleFormChange}
              />
              <span className="text-gray-400 text-sm relative bottom-2">
                Examples: Dining Tables, Headphones, Shoes
              </span>
              {/* <p className="text-red-500 text-[14px]">
                {err.product_category ? "Product category is required" : ""}
              </p> */}
            </div>
            <div className="mt-4">
              <ProductTextFeild
                label="Product Price ($)"
                name="product_price"
                placeholder={"Product price"}
                value={formData.product_price}
                onChange={handleFormChange}
              />
              <span className="text-gray-400 text-sm relative bottom-2">
                optional
              </span>
            </div>
            <div className="">
              <label className={`block text-sm mt-4 font-semibold `}>
                Product Description
              </label>
              <textarea
                name="product_description"
                value={formData.product_description}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    product_description: e.target.value,
                  })
                }
                placeholder="Describe your business here..."
                className="border-2 w-full my-1 focus:ring-0 focus:border-primary p-4 border-gray-200 rounded-xl resize-none"
                cols={30}
                rows={2}
              ></textarea>
              <p className="text-gray-400 text-sm relative bottom-2">
                optional
              </p>
            </div>
            <div>
              <ProductTextFeild
                label="Product Landig Page URL"
                name="product_url"
                placeholder={"Product landig page URL"}
                value={formData.product_url}
                onChange={handleFormChange}
              />
              <span className="text-gray-400 text-sm relative bottom-2">
                optional
              </span>
            </div>
          </div>
          <div className="w-60 lg:mt-3 mt-2 flex items-end justify-between flex-col">
            <span>
              {[
                {
                  fileInputRef: fileInputRef2,
                  selectedImage: selectedProductImage1,
                  setSelectedImage: setSelectedProductImage1,
                },
              ].map((items, index) => (
                <ProductImageInput
                  key={index}
                  index={index}
                  items={items}
                  setSelectedImage={items.setSelectedImage}
                  selectedImage={items.selectedImage}
                  handleImageClick={handleImageClick}
                  handleFileChange={handleFileChange2}
                  fileInputRef={items.fileInputRef}
                />
              ))}
              <span className="text-red-500 text-[14px]">
                {err.image ? "image is required" : ""}
              </span>
            </span>

            <button
              onClick={handleSubmitProductModalForm}
              className="!px-12 mt-4 !rounded-full focus:ring-primary hover:scale-110 transition-all text-white font-inter py-2 bg-primary hover:!text-white"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
