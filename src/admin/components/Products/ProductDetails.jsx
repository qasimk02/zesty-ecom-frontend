import { React, useEffect, useState } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteProduct,
  findProducts,
} from "../../../user/state/Product/action";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveImages } from "../../../user/utilities/responsiveImage";

const columns = [
  { id: "image", label: "Image", minWidth: 100 },
  { id: "title", label: "Title", minWidth: 250, align: "left" },
  {
    id: "category",
    label: "Category",
    minWidth: 170,
    align: "left",
  },
  {
    id: "price",
    label: "Price",
    minWidth: 170,
    align: "left",
  },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 170,
    align: "left",
  },
  {
    id: "actions",
    label: "Actions",
    minWidth: 170,
    align: "left",
  },
];

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);

  //hanlde dropdown

  //handle dropdown actions
  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    const data = {
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 2147483647,
      minDiscount: 0,
      sortBy: "productId",
      sortOrder: "ascending",
      pageNumber: 0,
      pageSize: 30,
      category: "",
    };
    dispatch(findProducts(data));
  }, [product.deletedProductId]);
  return (
    <div className="">
      <Card className="mt-2">
        <CardHeader
          title="All Products"
          sx={{ textAlign: "center" }}
          className="py-5"
        />
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <TableContainer>
            <Table
              stickyHeader
              sx={{ minWidth: 650 }}
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      // style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {product?.products?.pageContent?.map((item, index) => {
                  return (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>
                        {" "}
                        <Avatar>
                          <ResponsiveImages
                            imageName={item?.images[0].imageName}
                            id={item?.productId}
                            classess={
                              "h-full w-full object-cover object-center"
                            }
                          />
                        </Avatar>
                      </TableCell>
                      <TableCell component="th" scope="row" align="left">
                        {item.name}
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        {item.category.title.toUpperCase()}
                      </TableCell>
                      <TableCell align="left"> &#8377;{item.price}</TableCell>
                      <TableCell align="left">
                        {" "}
                        {item.sizes.reduce((acc, currentValue) => {
                          return acc + currentValue.quantity;
                        }, 0)}
                      </TableCell>
                      {/* actions */}
                      <TableCell align="left">
                        <div className="flex space-x-2">
                          <EditIcon
                            sx={{
                              cursor: "pointer",
                              "&:hover": {
                                color: "green",
                              },
                            }}
                          />
                          <DeleteIcon
                            sx={{
                              cursor: "pointer",
                              "&:hover": {
                                color: "red",
                              },
                            }}
                            onClick={() => handleDeleteProduct(item.productId)}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Card>
    </div>
  );
};
export default ProductDetails;
