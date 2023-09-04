import React from "react";

const AddressCard = ({ address }) => {
  return (
    <div>
      <div className="space-y-2">
        <p className="font-semibold">{address?.fullName}</p>
        <p>
          {address?.streetAddress}, {address?.city},{address?.country}{" "}
          {address?.postalCode}
        </p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address?.phoneNumber}</p>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};
export default AddressCard;
