import React, { useState, useCallback, useRef } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const FileInput = ({
  register,
  index,
  selectedImage,
  handleImageClick,
  handleFileChange,
  setSelectedImage,
  items,
  errors, // Add errors prop
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
        items.onImageSelect(dataUrl);
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
        style={{ boxShadow: "0px 0px 20px #25AEE1 inset" }}
        className={`mt-4 border-2 bg-gray-100 shadow-[#25AEE1] w-50 sm:w-60 h-[150px] px-4 p-1 flex flex-col items-center justify-center rounded-xl gap-2 ${
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
                "!rounded-full !bg-none !text-sm !bg-gray-100 flex items-center flex-col justify-center"
              }
            >
              <img
                className="h-8 w-8 mr-2"
                src="/image-gallery.png"
                alt="Gallery-Icon"
              />
            </Button>
            <p className="text-[#25AEE1] text-sm text-center">
              Upload your business card and company Logo here
            </p>
          </div>
        )}
        <input
          ref={fileInputRef} // Passing the ref to the input element
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            handleFileChange(e, setSelectedImage);
          }}
        />
      </div>
      <div className="w-full mt-1">
        <label className={`block text-sm  font-semibold `}>
          {` Image ${index + 1} Description*`}
        </label>
        <textarea
          {...register("image_description", {
            required: "Image Description is required", // Set required validation
            maxLength: 8000,
            minLength: 4,
          })}
          placeholder="Image description..."
          className="border-2 text-sm my-1 w-full focus:ring-0 focus:border-primary   p-4 border-gray-200  rounded-xl resize-none"
          id=""
          cols={30}
          rows={2}
        ></textarea>
        {errors?.image_description && (
          <p className="text-red-500 text-sm">
            {errors?.image_description?.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default FileInput;
