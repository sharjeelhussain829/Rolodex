import React, { FormEvent } from "react";
import Modal from "react-responsive-modal";
import ProductTextField from "./ProductTextField";
import Dropdown from "../ui/custom_dropdown";
import ProductImageInput from "./productImageIput";
import Button from "../ui/Button";

interface Props {
  open: boolean;
  onCloseModal: () => void;
  register: any; // Type for your form registration (from React Hook Form)
  errors: any; // Type for your form errors (from React Hook Form)
  updateDropdownValue: (name: string, selectedOption: any) => void; // Adjust the type of selectedOption accordingly
  categories: any[]; // Adjust the type of categories accordingly
  handleFileChange2: (event: any, setSelectedProductImage1: any) => void; // Adjust the types accordingly
  selectedProductImage1: any; // Adjust the type accordingly
  setSelectedProductImage1: React.Dispatch<React.SetStateAction<any>>; // Adjust the type accordingly
  handleImageClick: () => void;
  fileInputRef2: React.RefObject<HTMLInputElement>; // Adjust the type accordingly
}

const ProductModal: React.FC<Props> = ({
  open,
  onCloseModal,
  register,
  errors,
  updateDropdownValue,
  categories,
  handleFileChange2,
  selectedProductImage1,
  setSelectedProductImage1,
  handleImageClick,
  fileInputRef2
}) => {
  const handleModalSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    // You can access all the form values here
    const formData = new FormData(event.target as HTMLFormElement);
    // for (let pair of formData.entries()) {
    //   const [key, value] = pair;
    //   console.log(key + ": " + value);
    // }
  };

  return (
    <Modal open={open} onClose={onCloseModal} center>
      <form onSubmit={handleModalSubmit} className="flex gap-4 flex-wrap">
        <div className="mb-2">
          <div>
            <ProductTextField
              required
              name="product_name"
              inputType="text"
              label="Product Name*"
              register={register}
              error={errors.product_name?.message}
              placeholder="Product Name"
            />
          </div>
          <div className="mt-4">
            <Dropdown
              error={errors.category?.message}
              className="border-2 border-gray-200 rounded-lg w-full"
              title="Select Category"
              onChange={(selectedOption: any) =>
                updateDropdownValue("category", selectedOption)
              }
              options={categories}
            />
          </div>
          <div className="mt-4">
            <ProductTextField
              required
              name="product_category"
              inputType="text"
              label="Product Category*"
              register={register}
              error={errors.product_category?.message}
              placeholder="Product Category"
            />
          </div>
          <div className="mt-4">
            <ProductTextField
              required
              name="product_price"
              inputType="text"
              label="Product Price ($)*"
              register={register}
              error={errors.product_price?.message}
              placeholder="Product Price ($)"
            />
            <span className="text-gray-400 text-sm relative bottom-2">
              optional
            </span>
          </div>
          <div className="">
            <label className="block text-sm mt-4 font-semibold">
              Description*
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
                maxLength: {
                  value: 750,
                  message: "Max length is 750 characters",
                },
                minLength: {
                  value: 4,
                  message: "Min length is 4 characters",
                },
              })}
              name="description"
              placeholder="Describe your business here..."
              className="border-2 w-full my-1 focus:ring-0 focus:border-primary p-4 border-gray-200 rounded-xl resize-none"
              id=""
              cols={30}
              rows={2}
            ></textarea>
            <p className="text-gray-400 text-sm relative bottom-2">
              optional
            </p>
            <span className="text-red-400 block text-[12px] mt-1  font-poppin font-normal">
              {errors.description?.message}
            </span>
          </div>
          <div>
            <ProductTextField
              required
              name="product_landing_page"
              inputType="text"
              label="Product landing page URL*"
              register={register}
              error={errors.product_landing_page?.message}
              placeholder="Product landing page URL"
            />
            <span className="text-gray-400 text-sm relative bottom-2">
              optional
            </span>
          </div>
        </div>
        <div className="w-60 lg:mt-3 mt-2 flex items-end justify-between flex-col">
          {[{ fileInputRef: fileInputRef2, selectedImage: selectedProductImage1, setSelectedImage: setSelectedProductImage1 }].map((items, index) => (
            <ProductImageInput
              key={index}
              index={index}
              items={items}
              setSelectedImage={items.setSelectedImage}
              selectedImage={items.selectedImage}
              handleImageClick={handleImageClick}
              handleFileChange={(event: any) =>
                handleFileChange2(event, setSelectedProductImage1)
              }
              fileInputRef={items.fileInputRef}
            />
          ))}
          <Button type="submit" className="!px-12 mt-4 !rounded-full">
            Publish
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default ProductModal;
