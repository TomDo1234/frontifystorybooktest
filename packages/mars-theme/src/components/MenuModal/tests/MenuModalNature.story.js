import React from "react";
import MenuModal from "../MenuModal";

// _state.router.link = "/category/nature/";

export default {
  title: "Components|Menu-Modal"
  //   includeStories: [],
};

export const menuModalNature = () => <MenuModal />;

menuModalNature.story = {
  parameters: {
    jest: ["MenuModal.test.js"]
  }
};
