import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import ButtonGroup from "./ButtonGroup";
import useNFTityStore from "../../store";

const Avatar = ({ size }) => {
  const [showMenu, setShowMenu] = useState(0);

  return (
    <div className="flex flex-col justify-center overflow-visible">
      <button
        onClick={(e) => {
          e.preventDefault();
          setShowMenu(!showMenu);
        }}
      >
        <RxAvatar size={size} className="m-auto p-0" />
      </button>
      {showMenu ? (
        <div className="absolute overflow-auto top-12 right-14">
          <ButtonGroup />
        </div>
      ) : null}
    </div>
  );
};

export default Avatar;
