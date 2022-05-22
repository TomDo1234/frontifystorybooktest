import { createStore } from "@frontity/connect";

const defaultState = {
  frontity: {
    url: "https://test.frontity.io",
    title: "Test Frontity Blog",
    description: "WordPress installation for Frontity development"
  },
  theme: {
    menu: [
      ["Home", "/"],
      ["Nature", "/category/nature/"],
      ["Travel", "/category/travel/"],
      ["Japan", "/tag/japan/"],
      ["About Us", "/about-us/"]
    ],
    featured: {
      showOnList: false,
      showOnPost: false
    }
  },
  source: {
    api: "https://test.frontity.io/wp-json"
  },

  router: { link: "/" }
};

// Default actions taken from node_modules/@frontity/router/__tests__/index.test.ts
const defaultActions = {
  router: {
    /*eslint no-unused-vars: ["error", { "args": "none" }]*/
    set: state => (link, options) => {
      console.log("Link Clicked");
    }
  }
};

// We need to expose a store in order for frontity components to work:
// Mock store technique taken from frontity test suite: https://github.com/frontity/frontity/blob/83c5eadb4dffc6275fe4d93b8d379c21449a2727/packages/connect/src/__tests__/connect.tests.jsx#L11
export const store = createStore({
  state: defaultState,
  actions: defaultActions
});
