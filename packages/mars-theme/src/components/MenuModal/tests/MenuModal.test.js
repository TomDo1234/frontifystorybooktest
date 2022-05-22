import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "@frontity/connect";
import MenuModal from "../MenuModal";
import { store } from "../../../utils/tests";

it("MenuModal renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider value={store}>
      <MenuModal />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

// it("MenuModal renders without crashing", () => {});
//<Provider value={store}>
//   <TailwindSample title="test" />
// </Provider>,
