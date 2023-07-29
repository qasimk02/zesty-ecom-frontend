import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[9rem] h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://tse3.mm.bing.net/th?id=OIP.FgEuC3-oXlwR7QiNiHUImgHaJo&pid=Api&P=0&h=180"
            alt="mens_shirt"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men Slim Mid Rsie Black Shirt</p>
          <p className="opacity-70">Size: L</p>
          <p className="opacity-70 mt-2">Seller: Zesty</p>
          <div className="flex space-x-4 items-center text-gray-900 pt-7">
            <p className="font-semibold">$199</p>
            <p className="opacity-50 line-through">$211</p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center lg:space-x-8 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-6 border rounded-sm">3</span>
            <IconButton sx={{ color: "RGB(145,85,253)" }}>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div>
            <Button sx={{ color: "RGB(145,85,253)" }}>remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
