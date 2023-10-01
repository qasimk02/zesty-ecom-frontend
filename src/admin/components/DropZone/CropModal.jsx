import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./cropImage";

const CropModal = ({ image, open, handleClose, handleCropSelect }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  //original image reference
  const [croppedImage, setCroppedImage] = React.useState(null);

  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = React.useState(null);

  const cropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const onCropSave = () => {
    if (croppedImage) {
      handleCropSelect(croppedImage);
    }
    handleClose();
  };

  const handleCropPreview = async () => {
    try {
      const { file } = await getCroppedImg(image, croppedAreaPixels);
      setCroppedImage(file);
    } catch (error) {
      toast.error("error while cropping image");
    }
  };

  const handleBack = () => {
    setCroppedImage(null);
  };

  return (
    <div>
      {croppedImage ? (
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle
            id="responsive-dialog-title"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>Preview</div>
            <div className="cursor-pointer" onClick={handleClose}>
              <CloseIcon />
            </div>
          </DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#333",
              position: "relative",
              height: "50vh",
              width: "auto",
              minWidth: { sm: 500 },
            }}
          >
            <img
              style={{ height: "100%" }}
              src={URL.createObjectURL(croppedImage)}
              alt="crop-preview"
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleBack}>
              Back
            </Button>
            <Button onClick={onCropSave} autoFocus>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle
            id="responsive-dialog-title"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>Crop Image</div>
            <div className="cursor-pointer" onClick={handleClose}>
              <CloseIcon />
            </div>
          </DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#333",
              position: "relative",
              height: "50vh",
              width: "auto",
              minWidth: { sm: 500 },
            }}
          >
            <Cropper
              image={URL.createObjectURL(image)}
              crop={crop}
              zoom={zoom}
              aspect={3 / 4}
              onZoomChange={setZoom}
              onCropChange={setCrop}
              onCropComplete={cropComplete}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCropPreview} autoFocus>
              Preview
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};
export default CropModal;
