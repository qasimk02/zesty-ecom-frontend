import React, { useEffect } from "react";
import CartItem from "../components/Cart/CartItem";
import { Box, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getCart } from "../state/Cart/action";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);

  const handleCheckout = () => {
    navigate(`/checkout?step=2`);
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div className="p-2 mt-2">
      {cart?.cartItems.length > 0 && !cart?.isLoading ? (
        <div className="lg:grid lg:grid-cols-3 lg:px-16 relative">
          <div className="col-span-2 space-y-1">
            {cart.cartItems?.map((item) => (
              <CartItem key={item.cartItemId} item={item} />
            ))}
          </div>
          <div className="px-5 sticky top-2 h-[100vh] mt-5 lg:mt-0">
            <div className="border rounded-md p-3">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>{cart.cart?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">
                    ${cart.cart?.totalPrice - cart.cart?.totalDiscountedPrice}
                  </span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Deleviry Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Total Amount</span>
                  <span className="text-green-600">
                    ${cart.cart?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                variant="contained"
                className="w-full"
                sx={{ px: "2.5rem", py: "0.rem", bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      ) : cart?.isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress size={70} />
        </Box>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-red-600 text-lg">Cart is empty</h2>
          <img
            width="30%"
            src={`${process.env.PUBLIC_URL}/cart/emptyCart.jpeg`}
            alt="empty_cart"
          />
        </div>
      )}
    </div>
  );
};
export default Cart;
