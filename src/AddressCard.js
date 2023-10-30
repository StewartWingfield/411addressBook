import React, { useState } from "react";

function AddressCard(props) {
  const { address } = props;

  const [showInfo, setShowInfo] = useState(false);

  const handleSwitch = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <p>
        {address.name.first} {address.name.last}
      </p>
      <img src={address.picture.thumbnail} alt={address.name.first} />
      {showInfo ? <p>Details</p> : null}
      <button onClick={handleSwitch}>
        {!showInfo ? "show details" : "hide details"}
      </button>
    </div>
  );
}

export default AddressCard;
