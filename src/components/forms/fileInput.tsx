import React, { useState, useCallback, useRef } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const FileInput = ({
  name,
  register,
  label,
  validate,
  required,
  selectedImage,
  handleImageClick,
  handleFileChange,
  setSelectedImage,
  items,
  errors,
}: any) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null); // Creating a ref

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDragging(false);

    // Handle the dropped files
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileChange(
        { target: { files: [files[0]] } } as any,
        setSelectedImage
      );

      // Pass the value of the dropped image to the parent component
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader?.result as string;
        // items.onImageSelect(dataUrl);
      };

      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div
      className={`flex justify-between flex-col gap-2 ${
        isDragging ? "border-blue-500" : ""
      }`}
    >
      <div
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{ boxShadow: "0px 0px 20px #25afe152 inset" }}
        className={`mt-4 border-2 bg-[#D9D9D9] shadow-[#25AEE1] w-50 sm:w-52 h-[150px] px-4 p-1 flex flex-col items-center justify-center rounded-[29px] gap-2 ${
          isDragging ? "border-primary" : ""
        }`}
      >
        {selectedImage ? (
          <Image
            src={selectedImage}
            width={0}
            height={0}
            sizes="100vw"
            className="cursor-pointer w-[fit-content] h-full "
            alt="Selected Image"
            onClick={() => {
              handleImageClick(fileInputRef);
            }}
          />
        ) : (
          <div className="cursor-pointer space-y-4 rounded-full w-full flex items-center flex-col justify-center">
            <Button
              type={"button"}
              onClick={() => {
                handleImageClick(fileInputRef, selectedImage);
              }}
              className={
                "!rounded-full !bg-[#D9D9D9] !text-sm !shadow-none flex items-center flex-col justify-center"
              }
            >
              <img
                className="h-[32px] w-[32px] mr-2"
                src="/image-gallery.png"
                alt="Gallery-Icon"
              />
            </Button>
            <p className="text-[#25AEE1] text-[10px] text-center">
              Upload your business card and company Logo here
            </p>
          </div>
        )}
        <input
          ref={fileInputRef} // Passing the ref to the input element
          type="file"
          accept="image/*"
          className="hidden"
          name={name}
          onChange={(e) => {
            handleFileChange(e, setSelectedImage);
          }}
          // {...register(name, {
          //   ...(required ? { required: ` ${label} is required` } : {})
          // })}
        />
      </div>
      <p className="text-[8px] text-[#7F8E9D]">
        This image can only be your company logo or business card{" "}
      </p>
      <div className="w-full mt-1">
        {errors?.business_card_image && (
          <p className="text-red-500 text-xs">
            {errors?.business_card_image?.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default FileInput;
