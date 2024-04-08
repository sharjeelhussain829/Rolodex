import React from "react";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import { Api } from "@/utils/api";
import { toast } from "react-toastify";

function ProductUpdate({
  src,
  p_name,
  category,
  price,
  id,
  deleteItem,
  index,
}: any) {
  
console.log(`${Api}/${src.replace(/\s/g, "")}`)
console.log(`${Api}/${src}`)

  const deleteProduct = async (id: any) => {
    try {
      const response = await axios.post(Api + "delete/products/" + id);
      toast.success("Deleted Product", {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("Failed to add product", {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="gap-4 flex sm:block sm:w-36  mt-4">
      <div className="flex-1">
        <div className="absolute bg-[#fff] p-[4px] rounded-br-[50%]">
          <MdOutlineCancel
            className="z-2 text-[20px] cursor-pointer text-[red]"
            onClick={() => {
              deleteItem(index);
              deleteProduct(id);
            }}
          />
        </div>
        <Image
          className="h-[100%] rounded w-[100%] object-cover"
          src={`${Api}/${src.replace(/\s/g, "")}`}
          alt={p_name}
          width={100}
          height={100}
        />
      </div>
      <div className="flex-1">
        <h1 className="text-[16px] font-bold">
          {p_name ? p_name : "Please add product name"}
        </h1>
        {/* <h3 className="text-[14px]">
          Category: {category ? category : "please add category"}
        </h3> */}
        <p className="text-[14px]">
          Price: {price ? price : "please add price"}
        </p>
      </div>
    </div>
  );
}

export default ProductUpdate;
