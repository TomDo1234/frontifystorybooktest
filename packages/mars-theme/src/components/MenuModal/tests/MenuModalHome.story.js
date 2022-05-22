import React from "react";
import MenuModal from "../MenuModal";

export default {
  title: "Components|Menu-Modal"
};

export const menuModalHome = () => <MenuModal />;

menuModalHome.story = {
  parameters: {
    jest: ["MenuModal.test.js"]
  }
};
