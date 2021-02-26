import React from "react";
import { render } from "react-dom";
import { firebase, FieldValue } from "./lib/firebase";
import FirebaseContext from "./context/firebase";

render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <h1>Hello world</h1>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
