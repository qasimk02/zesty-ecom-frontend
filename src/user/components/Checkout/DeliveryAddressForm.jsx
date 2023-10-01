import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddressCard from "../Card/AddressCard/AddressCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../state/Order/action";
import { getAllAddress } from "../../state/Address/action";

const DeliveryAddressForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { address } = useSelector((store) => store);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      fullName: data.get("firstName") + " " + data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      country: data.get("country"),
      postalCode: data.get("zip"),
      phoneNumber: data.get("phoneNumber"),
    };
    const orderData = { address, navigate };
    dispatch(createOrder(orderData));
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (selectedAddress) {
      const selectedAddressObject = address?.addressess.find(
        (item) => item.addressId === selectedAddress
      );
      console.log("selected address", selectedAddressObject);
      if (selectedAddressObject) {
        console.log(selectedAddress);
      }
    } else {
      alert("please select an address or create new address");
    }
  };
  const handleAddressSelect = (e) => {
    setSelectedAddress(e.target.value);
    console.log(selectedAddress);
  };

  useEffect(() => {
    console.log("rendered");
    dispatch(getAllAddress());
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={5} md={5}>
          <div className="shadow-md overflow-y-scroll">
            <div className="border-b cursor-pointer p-5">
              {/* <form onSubmit={handleAddressSubmit}>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={selectedAddress}
                  onChange={handleAddressSelect}
                >
                  {address?.addressess.map((item) => (
                    <FormControlLabel
                      key={item.addressId}
                      value={item.addressId}
                      control={<Radio />}
                      label={<AddressCard address={item} />}
                    />
                  ))}
                  {console.log(address?.addressess)}
                </RadioGroup>
                <Button
                  sx={{ mt: 2, bgcolor: "RGB(145,85,253)", color: "white" }}
                  size="large"
                  variant="conained"
                  type="submit"
                >
                  Deliver Here
                </Button>
              </form> */}
            </div>
          </div>
          {console.log(address?.addressess)}
        </Grid>
        <Grid item xs={12} lg={7} md={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />{" "}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />{" "}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal Code"
                    fullWidth
                    type="number"
                    autoComplete="shipping postal-code"
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    type="number"
                    autoComplete="given-name"
                  />{" "}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />{" "}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State / Province / Region"
                    fullWidth
                    autoComplete="given-name"
                  />{" "}
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="given-name"
                  />{" "}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{ mt: 2, bgcolor: "RGB(145,85,253)", color: "white" }}
                    size="large"
                    variant="conained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default DeliveryAddressForm;
