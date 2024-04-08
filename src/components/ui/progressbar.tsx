// import React from "react";

// const ProgressBar = ({ progress, className }: any) => {
//   return (
//     <div className="w-full h-1 bg-gray-300 rounded overflow-hidden">
//       <div
//         className={`h-full bg-[#FDBC31] transition-all ease-in-out duration-300 ${className}`}
//         style={{ width: `${Math.floor(progress)}%` }}
//       ></div>
//     </div>
//   );
// };

// export default ProgressBar;



import React from "react";

const ProgressBar = ({ progress, className }: any) => {

  return (
    <div className="w-full h-1 bg-gray-300 rounded overflow-hidden">
      <div
        className={`h-full transition-all ease-in-out duration-300 ${
          progress > 0 && progress <= 40
            ? "bg-[red]"
            : progress > 40 && progress <= 70
            ? "bg-[#FDBC31]"
            : "bg-[#24aa3a]"
        }`}
        style={{ width: `${Math.floor(progress)}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
