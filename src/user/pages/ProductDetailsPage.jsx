import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import ProductReviewCard from "../components/Card/ProductReviewCard/ProductReviewCard";
import mensShirts from "../Data/HomeSectionData/MensShirt";
import SimilarProductCarousel from "../components/Carousel/SimilarProductCarousel/SimilarProductCarousel";
import { useNavigate, useParams } from "react-router-dom";
import { findProductById } from "../state/Product/action";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../state/Cart/action";
import { findRatings, findReviews } from "../state/ReviewAndRating/action";

const dummyProduct = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XS", inStock: false },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetailsPage() {
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { product } = useSelector((store) => store);
  const { reviewAndRating } = useSelector((store) => store);

  const handleAddToCart = () => {
    const data = { productId: params.productId, size: selectedSize };
    if (selectedSize != "") {
      dispatch(addItemToCart(data));
      navigate("/cart");
    } else {
      alert("Select a size");
    }
  };

  useEffect(() => {
    const data = { productId: params.productId };
    dispatch(findProductById(data));
  }, [params.productId]);

  useEffect(() => {
    const pId = params.productId;
    dispatch(findRatings(pId));
    dispatch(findReviews(pId));
  }, [params.productId]);

  return (
    <div className="bg-white p-5">
      <div className="pt-10">
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* categories */}
            {product.product?.categories?.map((category) => (
              <li key={category.categoryId}>
                <div className="flex items-center">
                  <p className="mr-2 text-sm font-medium text-gray-900">
                    {category.title.toUpperCase()}
                  </p>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={product.product?.imageName}
                alt={product.product?.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center mt-3">
              {dummyProduct.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] cursor-pointer"
                >
                  <img
                    src={product.product?.imageName}
                    alt={product.product?.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                {product.product?.name}
              </h1>
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                {product.product?.brand}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              {/* Price */}
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">
                  $
                  {product.product?.price -
                    product.product?.price *
                      product.product?.discountPercent *
                      0.01}
                </p>
                <p className="opacity-50 line-through">
                  ${product.product?.price}
                </p>
                <p className="text-green-600 font-semibold">
                  {product.product?.discountPercent}% Off
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating
                    name="read-only"
                    value={reviewAndRating?.ratings?.averageRating || "0"}
                    precision={0.5}
                    readOnly
                  />
                  <p className="opacity-50 text-sm">
                    {reviewAndRating?.ratings?.totalRatings} Ratings
                  </p>
                </div>
              </div>

              <form className="mt-10">
                {/* Colors */}

                {/* <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>
                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a color
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {dummyProduct.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              color.selectedClass,
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              color.class,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div> */}

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Size guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {product.product?.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name.toUpperCase()}
                          value={size.name}
                          disabled={size.quantity <= 0}
                          className={({ active }) =>
                            classNames(
                              size.quantity > 0
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name.toUpperCase()}
                              </RadioGroup.Label>
                              {size.quantity > 0 ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Add to cart button */}
                <Button
                  onClick={handleAddToCart}
                  variant="contained"
                  sx={{
                    px: "2rem",
                    py: "0.8rem",
                    bgcolor: "#9155fd",
                    my: "1rem",
                  }}
                >
                  Add to Cart
                </Button>
              </form>
            </div>

            {/* Description and details */}
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.product?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    {dummyProduct.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {dummyProduct.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* similar products */}
        <section className="py-5">
          <SimilarProductCarousel product={mensShirts} />
        </section>

        {/* rating and reviews */}
        <section className="">
          <h1 className="font-semibold text-2xl pb-4">
            Recent Reviews & Rating
          </h1>
          <div className="border p-8">
            <Grid container>
              <Grid item xs={12} lg={5} md={5}>
                <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>
                <div className="flex items-center space-x-3">
                  <Rating
                    value={reviewAndRating?.ratings?.averageRating || "0"}
                    precision={0.5}
                    readOnly
                  />
                  <p className="opacity-60">
                    {reviewAndRating?.ratings?.totalRatings} Ratings
                  </p>
                </div>
                <Box className="my-5 space-y-2">
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Excellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={
                          reviewAndRating?.ratings?.ratingPercentByValue[5] *
                            100 || "0"
                        }
                        color="success"
                      />
                    </Grid>
                    <Grid item>
                      <p className="opacity-60">
                        {reviewAndRating?.ratings?.ratingPercentByValue[5] *
                          100}
                        %
                      </p>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Very Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={
                          reviewAndRating?.ratings?.ratingPercentByValue[4] *
                            100 || "0"
                        }
                        color="secondary"
                      />
                    </Grid>
                    <Grid item>
                      <p className="opacity-60">
                        {reviewAndRating?.ratings?.ratingPercentByValue[4] *
                          100}
                        %
                      </p>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{
                          bgcolor: "#d0d0d0",
                          borderRadius: 4,
                          height: 7,
                        }}
                        variant="determinate"
                        value={
                          reviewAndRating?.ratings?.ratingPercentByValue[3] *
                            100 || "0"
                        }
                        color="primary"
                      />
                    </Grid>
                    <Grid item>
                      <p className="opacity-60">
                        {reviewAndRating?.ratings?.ratingPercentByValue[3] *
                          100}
                        %
                      </p>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Average</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={
                          reviewAndRating?.ratings?.ratingPercentByValue[2] *
                            100 || "0"
                        }
                        color="warning"
                      />
                    </Grid>
                    <Grid item>
                      <p className="opacity-60">
                        {reviewAndRating?.ratings?.ratingPercentByValue[2] *
                          100}
                        %
                      </p>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid item xs={2}>
                      <p>Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress
                        sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                        variant="determinate"
                        value={
                          reviewAndRating?.ratings?.ratingPercentByValue[1] *
                            100 || "0"
                        }
                        color="error"
                      />
                    </Grid>
                    <Grid item>
                      <p className="opacity-60">
                        {reviewAndRating?.ratings?.ratingPercentByValue[1] *
                          100}
                        %
                      </p>
                    </Grid>
                  </Grid>
                </Box>
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold">Share Your Thoughts</h2>
                  <p className="opacity-75 max-w-md">
                    If you’ve used this product, share your thoughts with other
                    customers
                  </p>
                  <div className="flex flex-col items-center">
                    <Button
                      variant="outlined"
                      color="inherit"
                      sx={{ width: "50%" }}
                    >
                      Write a Review
                    </Button>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} lg={7} md={7}>
                <div className="space-y-6">
                  {reviewAndRating?.reviews?.map((review) => (
                    <ProductReviewCard review={review} key={review?.reviewId} />
                  ))}
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    </div>
  );
}
