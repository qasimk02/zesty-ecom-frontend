import React from "react";
import { useDropzone } from "react-dropzone";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";

export const DropZone = ({ handleImageSelect, productImages }) => {
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      if (
        acceptedFiles[0].type === "image/png" ||
        acceptedFiles[0].type === "image/jpeg"
      ) {
        handleImageSelect(acceptedFiles);
      } else {
        toast.error("Only Jpeg and png files are allowed");
      }
    } else {
      toast.error("Multiple Files are not allowed at once");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  return (
    <div>
      {productImages.length > 0 ? (
        <div {...getRootProps()} className="text-gray-600 cursor-pointer m-2">
          <input {...getInputProps()} />
          <IconButton
            variant="contained"
            style={{
              backgroundColor: "#919492",
              borderRadius: "50%",
              padding: "8px",
            }}
          >
            <AddIcon style={{ color: "black" }} />
          </IconButton>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className="text-gray-600 border-2 border-dashed border-[#ccc] text-center cursor-pointer p-5"
        >
          <input {...getInputProps()} />
          <UploadFileIcon />
          <p>Drag & drop image here, or click to select image.</p>
        </div>
      )}
    </div>
  );
};

export default DropZone;
