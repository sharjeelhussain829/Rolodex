"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Dropdown from "@/components/ui/custom_dropdown";
import axios from "axios";
import { Api } from "@/utils/api";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useForm } from "react-hook-form";
import ProductTextFeild from "@/components/forms/ProductTextField";
// import AddProductModal from "@/components/modals/AddProductModal";
import ProductImageInput from "@/components/forms/productImageIput";
import Button from "@/components/ui/Button";

export default function ProductModal({ open, isOpen }: any) {
  const [categories, setcategories] = useState([]);

  const [selectedProductImage1, setSelectedProductImage1] = useState<any>();
  const fileInputRef2 = useRef<any>(null);

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

  const [formData, setFormData] = useState({
    product_name: "",
    product_description: "",
    product_category: "",
    product_price: "",
    product_url: "",
    product_category2: "",
    image: "",
  });

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [err, setErr] = useState<any>({
    productName: "",
    productCategory: "",
    productCategory2: "",
    image: "",
  });

  const handleSubmitProductModalForm = (e : any) => {
    e.preventDefault()
    if (formData.product_name == "") {
      setErr({ ...err, productName: "error" });
    } else if (formData.product_category == "") {
      setErr({ ...err, productCategory: "error" });
    } else if (formData.product_category2 == "") {
      setErr({ ...err, productCategory2: "error" });
    } else if (selectedProductImage1 == "") {
      setErr({ ...err, image: "error" });
    } else {
      formData.image = selectedProductImage1;

      setErr({
        productName: "",
        productCategory: "",
        productCategory2: "",
      });
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
    }
  };

  const { setValue } = useForm();

  const handleImageClick = (fileInputRef: any) => {
    fileInputRef?.current?.click();
  };

  const handleFileChange2 = (
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
    <Modal open={open} onClose={isOpen} center>
      <div className="flex gap-4 flex-wrap">
        <form onSubmit={handleSubmitProductModalForm} className="flex gap-6">
          <div className="mb-2">
            <div>
              <ProductTextFeild
                required={true}
                label="Product Name*"
                name="product_name"
                placeholder={"Product name"}
                value={formData.product_name}
                onChange={handleFormChange}
              />
              <span className="text-red-500 text-[14px]">
                {err.productName === "error" ? "Product name is required" : ""}
              </span>
            </div>

            <div className="mt-4">
              <Dropdown
                className={"border-2 border-gray-200 rounded-lg w-full"}
                title={"Select Category"}
                onChange={(e: any) =>
                  setFormData({ ...formData, product_category2: e.name })
                }
                // onChange={(selectedOption: any) =>
                //   updateDropdownValue("category", selectedOption)
                // }
                options={categories}
              />
              <span className="text-red-500 text-[14px]">
                {err.productCategory2 === "error"
                  ? "Product category is required"
                  : ""}
              </span>
            </div>

            <div className="mt-4">
              <ProductTextFeild
                label="Product Category*"
                name="product_category"
                placeholder={"Product category"}
                value={formData.product_category}
                onChange={handleFormChange}
              />
              <span className="text-red-500 text-[14px]">
                {err.productCategory === "error"
                  ? "Product category is required"
                  : ""}
              </span>
            </div>
            <div className="mt-4">
              <ProductTextFeild
                label="Product Price*"
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
                Description*
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
              {/* <span className="text-red-400 block text-[12px] mt-1  font-poppin font-normal">
                      {errors.description?.message}
                    </span> */}
            </div>
            <div>
              <ProductTextFeild
                label="Product Landig Page URL**"
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
                {err.image === "error" ? "image is required" : ""}
              </span>
            </span>
            
            <button type="submit" className="!px-12 mt-4 !rounded-full focus:ring-primary hover:scale-110 transition-all text-white font-inter py-2 bg-primary hover:!text-white">
              Publish
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
