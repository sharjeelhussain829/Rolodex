import React from "react";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";

function ProductUpdate({ src, p_name, category, price, id, deleteItem }: any) {
    console.log(src)
  return (
    <div className="gap-4 flex sm:block sm:w-36  mt-4">
      <div className="flex-1">
        <div className="absolute bg-[#fff] p-[4px] rounded-br-[50%]">
          <MdOutlineCancel
            className="z-2 text-[20px] cursor-pointer text-[red]"
            onClick={() => deleteItem(id)}
          />
        </div>
        <Image
          className="h-[100%] rounded w-[100%] object-cover"
          src={src}
          alt={"Business image"}
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
