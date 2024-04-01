import React from "react";


const style = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
}
const CustomIcon = ({ icon: Icon, className }) => {
  return (
    <div className="p-2 rounded-full bg-white" style={style}>
        <Icon className={`${className} text-[#000000c9]`} />
    </div>
  );
};

export default CustomIcon;