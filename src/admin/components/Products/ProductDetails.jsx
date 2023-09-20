import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import {
  deleteProduct,
  findProducts,
} from "../../../user/state/Product/action";
import { useDispatch, useSelector } from "react-redux";

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
    <div className="p-5">
      <Card className="mt-2">
        <CardHeader title="All Products" />
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
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
                        <Avatar src={item.imageName} />
                      </TableCell>
                      <TableCell component="th" scope="row" align="left">
                        {item.name}
                      </TableCell>
                      <TableCell align="left">
                        {" "}
                        {item.categories[2].title.toUpperCase()}
                      </TableCell>
                      <TableCell align="left"> &#8377;{item.price}</TableCell>
                      <TableCell align="left">
                        {" "}
                        {item.sizes.reduce((acc, currentValue) => {
                          return acc + currentValue.quantity;
                        }, 0)}
                      </TableCell>
                      <TableCell align="left" sx={{ display: "flex" }}>
                        <Button
                          onClick={() => handleDeleteProduct(item.productId)}
                          variant="outlined"
                        >
                          Delete
                        </Button>
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
