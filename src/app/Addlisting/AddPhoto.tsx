import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { LuImagePlus } from "react-icons/lu";

function ImageDropZone({
  errors,
  setValue
}: any) {
  const [file, setFile] = useState(null);

//   const removeFile = () => {
//     setFile(null);
//   };



const onDrop = useCallback((acceptedFiles : any, name:any, value:any ) => {
  // Only set the file if there isn't one already and if the accepted file is an image
  if (acceptedFiles.length > 0 && acceptedFiles[0].type.startsWith('image/')) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
          // Encode the image to base64
          const base64Image = fileReader.result;
          
          // Now you can save or process the base64 encoded image
          console.log(base64Image);

          // You might want to set it in the state or use it elsewhere
          // setBase64Image(base64Image);

          // Also set the file if required
          setFile(acceptedFiles[0]);

          // You can also set the value in your form field if needed
          setValue("gallery_Image", base64Image);
      };
      fileReader.readAsDataURL(acceptedFiles[0]); // Read the file as data URL
  }
}, []);


  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*", // Accept only image files
    multiple: false, // Allow only one file to be dropped
    
  });

  return (
    <div
      {...getRootProps({ required: true })}
      className={`border-[2.5px] border-[#25AAE1] w-80 rounded-[7px] pt-3 text-center h-52 overflow-hidden `}
    >
      <input {...getInputProps()} />
      {file ? (
        <div className="flex flex-col align-middle">
          <p className="text-gray-600">Uploaded file:</p>
          <img src={URL.createObjectURL(file)} alt="Uploaded" className="max-w-auto h-40" />
          
           {/* <button onClick={removeFile} className="mt-2">
            Remove
          </button> */}
        </div>
      ) : (
        <div className="flex justify-center" >
        <div className="w-4/5 text-center font-semibold mt-7" >
            <p > Drag Photo / Image </p> <br />
            <p > Or </p> <br />
            <p className="flex text-center sm:gap-2"> <LuImagePlus className="text-[#25AAE1] text-2xl sm:ml-4" />Select Photo / Image </p>
        </div>
        </div>
        
      )}
    </div>
  );
}

function AddPhoto({setValue, errors} : any) {
  return (
    <>
      <div className="flex flex-col space-y-6 rounded-lg shadow-md p-6 mt-12">
        <h1 className="text-2xl font-bold flex gap-1">
          <LuImagePlus className="text-[#25AAE1] relative me-2 text-3xl" />
          Add Photo / Gallery
        </h1>

        <div className="flex justify-center pt-4 pb-4">
          <ImageDropZone setValue={setValue} errors={errors}/>
        </div>
        <p className="text-xs text-[#4C535F]">Showcase your business with captivating images! Add your portfolio or shop images here for customers to see.</p>
      </div>
    </>
  );
}

export default AddPhoto;
