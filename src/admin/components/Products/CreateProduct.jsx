import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryByLevel } from "../../../user/state/Category/action";
import { createProduct } from "../../../user/state/Product/action";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { DropZone } from "../DropZone/DropZone";
import ClearIcon from "@mui/icons-material/Clear";
import "./style.css";
import CropModal from "../DropZone/CropModal";
import { toast } from "react-toastify";

const initialSizes = [{ name: "", quantity: "" }];

const categoryLevels = [{ depth: 1 }, { depth: 2 }, { depth: 3 }, { depth: 4 }];
const sizeNames = [
  { name: "XS" },
  { name: "S" },
  { name: "M" },
  { name: "L" },
  { name: "XL" },
  { name: "XXL" },
];

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((store) => store);
  const { product } = useSelector((store) => store);

  const productInitialState = {
    name: "",
    brand: "",
    color: "",
    live: true,
    price: "",
    discountPercent: "",
    sizes: [{ name: "", quantity: "" }],
    category: "",
    description: "",
  };
  const [productData, setProductData] = useState({
    name: "",
    brand: "",
    color: "",
    live: true,
    price: "",
    discountPercent: "",
    sizes: initialSizes,
    category: "",
    description: "",
  });
  const [categoryLevel, setCategoryLevel] = useState(-1);
  const [productImages, setProductImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openCropModal, setOpenCropModal] = useState(false);

  const handleOpenCropModal = () => setOpenCropModal(true);
  const handleCloseCropModal = () => setOpenCropModal(false);

  //handle field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //handle size change
  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name = name === "size_quantity" ? "quantity" : e.target.name;

    const updatedSizes = [...productData.sizes];
    updatedSizes[index][name] = value;
    setProductData((prev) => ({
      ...prev,
      sizes: updatedSizes,
    }));
  };

  const handleImageSelect = (imageToBeCropped) => {
    setSelectedImage(...imageToBeCropped);
    handleOpenCropModal();
  };

  const handleCropSelect = (imageToAdd) => {
    setSelectedImage(null);
    setProductImages((prevImages) => [...prevImages, imageToAdd]);
  };

  const handleImageRemove = (imageToRemove) => {
    setProductImages((prevImages) =>
      prevImages.filter((image) => image !== imageToRemove)
    );
  };

  const handleCategoryLevelChange = (e) => {
    setCategoryLevel(e.target.value);
    console.log(categoryLevel);
  };

  //add and remove more size function
  const addSize = () => {
    setProductData({
      ...productData,
      sizes: [...productData.sizes, { name: "", quantity: 0 }],
    });
  };

  const removeSize = (index) => {
    const updatedSizes = [...productData.sizes];
    updatedSizes.splice(index, 1);
    setProductData({ ...productData, sizes: updatedSizes });
  };

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (productImages.length === 0) {
      toast.error("Please upload atleast one image");
    } else {
      console.log(productImages);
      dispatch(createProduct({ data: productData, images: productImages }));
      //setting to intial state
      setProductData(productInitialState);
      setProductImages([]);
      setCategoryLevel(-1);
    }
  };

  //useEffects
  useEffect(() => {
    dispatch(getCategoryByLevel(categoryLevel));
    //if level changes then set category null
    setProductData((prev) => ({
      ...prev,
      category: "",
    }));
  }, [categoryLevel]);

  return (
    <div style={{ position: "relative" }}>
      {product.loading && (
        <div className="overlay">
          <CircularProgress />
        </div>
      )}
      <Fragment>
        <Typography variant="h4" sx={{ textAlign: "center" }} className="py-10">
          Add New Product
        </Typography>
        <form onSubmit={handleSubmit} className="min-h-screen">
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {/* image select */}
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* list selected images */}
              <div className="flex items-center justify-center">
                {productImages.map((image, index) => (
                  <div className="flex flex-col items-center">
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      width={100}
                      alt="Selected"
                    />
                    <ClearIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleImageRemove(image)}
                    />
                  </div>
                ))}
              </div>
              <DropZone
                handleImageSelect={handleImageSelect}
                productImages={productImages}
              />
              {openCropModal && (
                <CropModal
                  image={selectedImage}
                  open={openCropModal}
                  handleCropSelect={handleCropSelect}
                  handleClose={handleCloseCropModal}
                />
              )}
            </Grid>
            {/* brand */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Brand"
                name="brand"
                value={productData.brand}
                onChange={handleChange}
              />
            </Grid>
            {/* title */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Title"
                name="name"
                value={productData.name}
                onChange={handleChange}
              />
            </Grid>
            {/* color */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Color"
                name="color"
                value={productData.color}
                onChange={handleChange}
              />
            </Grid>
            {/* price */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                type="number"
                label="Price"
                name="price"
                value={productData.price}
                onChange={handleChange}
              />
            </Grid>
            {/* discount percent */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                type="number"
                label="Discount Percent"
                name="discountPercent"
                value={productData.discountPercent}
                onChange={handleChange}
              />
            </Grid>

            {/* sizes */}
            {productData.sizes.map((size, index) => (
              <Grid item container spacing={3} key={index}>
                {/* size name */}
                <Grid item xs={5} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Select Size</InputLabel>
                    <Select
                      label="Selet Size"
                      name="name"
                      onChange={(event) => handleSizeChange(event, index)}
                      required
                      fullWidth
                    >
                      {sizeNames.map((size, index) => (
                        <MenuItem key={index} value={size.name}>
                          {size.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                {/* size quantity */}
                <Grid item xs={5} sm={5}>
                  <TextField
                    label="Quantity"
                    name="size_quantity"
                    type="number"
                    value={size.quantity}
                    onChange={(event) => handleSizeChange(event, index)}
                    required
                    fullWidth
                  />
                </Grid>
                {/* remove icon */}
                <Grid
                  item
                  xs={1}
                  sm={1}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <IconButton
                    onClick={() => removeSize(index)}
                    variant="outlined"
                    style={{
                      backgroundColor: "#fd382f",
                      border: "1px solid #ccc",
                      borderRadius: "50%",
                      padding: "8px",
                    }}
                  >
                    <RemoveIcon style={{ color: "white" }} />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            {/* add more sizes button */}
            <Grid
              item
              xs={12}
              sm={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton
                onClick={addSize}
                variant="contained"
                style={{
                  backgroundColor: "green",
                  borderRadius: "50%",
                  padding: "8px",
                }}
              >
                <AddIcon style={{ color: "white" }} />
              </IconButton>
            </Grid>

            {/* category level */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Category Level</InputLabel>
                <Select
                  required
                  name="categoryLevel"
                  value={categoryLevel}
                  onChange={handleCategoryLevelChange}
                  label="Category Level"
                >
                  {categoryLevels.map((level, index) => (
                    <MenuItem key={index} value={level.depth}>
                      {level.depth}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* category */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Select Category</InputLabel>
                <Select
                  required
                  name="category"
                  value={productData.category}
                  onChange={handleChange}
                  label="Select Category"
                >
                  {category?.categories?.map((category) => (
                    <MenuItem value={category} key={category.categoryId}>
                      {category.title.toUpperCase()}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* description */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                id="outlined-multiline-static"
                label="Description"
                multiline
                name="description"
                rows={3}
                onChange={handleChange}
                value={productData.description}
              />
            </Grid>
            {/* submit button */}
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                sx={{ p: 1.8 }}
                className="py-20"
                size="large"
                type="submit"
              >
                Add New Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Fragment>
    </div>
  );
};
export default CreateProduct;
