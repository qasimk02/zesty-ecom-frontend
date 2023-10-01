import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelOrder,
  confirmOrder,
  deleteOrder,
  deliverOrder,
  getAllOrders,
  markAsOutForDelivery,
  shippOrder,
} from "../../../user/state/Order/action";
import DeleteIcon from "@mui/icons-material/Delete";
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
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "left",
  },
  {
    id: "update",
    label: "Update",
    minWidth: 170,
    align: "left",
  },
  {
    id: "delete",
    label: "Delete",
    minWidth: 170,
    align: "left",
  },
];

const OrderDetailsTable = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  //handle dropdown menu
  const [anchorEl, setAnchorEl] = React.useState([]);
  const handleClick = (event, index) => {
    const newAnchorEl = [...anchorEl];
    newAnchorEl[index] = event.currentTarget;
    setAnchorEl(newAnchorEl);
  };
  const handleClose = (index) => {
    const newAnchorEl = [...anchorEl];
    newAnchorEl[index] = null;
    setAnchorEl(newAnchorEl);
  };

  //handle delete order
  const handleDeleteOrder = (orderId, index) => {
    dispatch(deleteOrder(orderId));
    handleClose(index);
  };

  //handle order operation
  const handleConfirmOrder = (orderId, index) => {
    dispatch(confirmOrder(orderId));
    handleClose(index);
  };
  const handleShippedOrder = (orderId, index) => {
    dispatch(shippOrder(orderId));
    handleClose(index);
  };
  const handleCancelOrder = (orderId, index) => {
    dispatch(cancelOrder(orderId));
    handleClose(index);
  };
  const handleDeliveredOrder = (orderId, index) => {
    dispatch(deliverOrder(orderId));
    handleClose(index);
  };
  const handleOutForDelivery = (orderId, index) => {
    dispatch(markAsOutForDelivery(orderId));
    handleClose(index);
  };

  useEffect(() => {
    dispatch(getAllOrders());
  }, [
    order.confirmedOrder,
    order.cancelledOrder,
    order.shippedOrder,
    order.outForDeliveryOrder,
    order.deliveredOrder,
    order.deletedOrder,
  ]);

  return (
    <div className="">
      <Card className="mt-2">
        <CardHeader
          title="All Orders"
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
                {order?.allOrders?.map((order, index) => {
                  return (
                    <TableRow
                      key={order.orderId}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {/* image url */}
                      <TableCell align="left">
                        <AvatarGroup max={3} sx={{ justifyContent: "start" }}>
                          {order?.orderItems?.map((orderItem) => (
                            <Avatar key={orderItem.orderItemId}>
                              <ResponsiveImages
                                imageName={
                                  orderItem?.product?.images[0]?.imageName
                                }
                                id={orderItem?.product?.productId}
                                classess={
                                  "h-full w-full object-cover object-center object-left-top"
                                }
                              />
                            </Avatar>
                          ))}
                        </AvatarGroup>
                      </TableCell>

                      {/* title */}
                      <TableCell component="th" scope="row" align="left">
                        {order?.orderItems?.map((orderItem) => (
                          <p key={orderItem.orderItemId}>
                            {orderItem?.product?.name}
                          </p>
                        ))}
                      </TableCell>

                      {/* category */}
                      <TableCell align="left">
                        {order?.orderItems?.map((orderItem) => (
                          <p key={orderItem.orderItemId}>
                            {orderItem?.product?.category?.title.toUpperCase()}
                          </p>
                        ))}
                      </TableCell>

                      {/* price */}
                      <TableCell align="left">
                        {" "}
                        &#8377;{order?.totalDiscountedPrice}
                      </TableCell>

                      {/* order status */}
                      <TableCell align="left">
                        <span
                          className={`text-white px-5 py-2 rounded-full
                          ${
                            order.orderStatus === "PENDING"
                              ? "bg-[#e1bb41]"
                              : order.orderStatus === "PLACED"
                              ? "bg-[#3a7dd9]"
                              : order.orderStatus === "CONFIRMED"
                              ? "bg-[#0ed15f]"
                              : order.orderStatus === "SHIPPED"
                              ? "bg-[#8c37d1]"
                              : order.orderStatus === "OUT_FOR_DELIVERY"
                              ? "bg-[#d43eef]"
                              : order.orderStatus === "DELIVERED"
                              ? "bg-[#48cacc] line-through"
                              : "bg-[red]"
                          }
                         `}
                        >
                          {order?.orderStatus}
                        </span>
                      </TableCell>

                      {/* change status */}
                      <TableCell align="left">
                        <div>
                          {order?.orderStatus !== "PENDING" && (
                            <Button
                              id="basic-button"
                              aria-controls={`basic-menu-${order.orderId}`}
                              aria-haspopup="true"
                              aria-expanded={Boolean(anchorEl[index])}
                              onClick={(event) => handleClick(event, index)}
                            >
                              Status
                            </Button>
                          )}
                          <Menu
                            id={`basic-menu-${order.orderId}`}
                            anchorEl={anchorEl[index]}
                            open={Boolean(anchorEl[index])}
                            onClose={() => handleClose(index)}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <MenuItem
                              onClick={() =>
                                handleConfirmOrder(order.orderId, index)
                              }
                            >
                              CONFIRM
                            </MenuItem>
                            <MenuItem
                              onClick={() =>
                                handleShippedOrder(order.orderId, index)
                              }
                            >
                              SHIPP
                            </MenuItem>
                            <MenuItem
                              onClick={() =>
                                handleOutForDelivery(order.orderId, index)
                              }
                            >
                              OUT FOR DELIVERY
                            </MenuItem>
                            <MenuItem
                              onClick={() =>
                                handleCancelOrder(order.orderId, index)
                              }
                            >
                              CANCEL
                            </MenuItem>
                            <MenuItem
                              onClick={() =>
                                handleDeliveredOrder(order.orderId, index)
                              }
                            >
                              DELIVER
                            </MenuItem>
                          </Menu>
                        </div>
                      </TableCell>

                      {/* delete */}
                      <TableCell align="left">
                        <DeleteIcon
                          sx={{
                            cursor: "pointer",
                            "&:hover": {
                              color: "red",
                            },
                          }}
                          onClick={() => handleDeleteOrder(order.orderId)}
                        />
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
export default OrderDetailsTable;
