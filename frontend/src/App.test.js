import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { UserProvider } from "./testUtils";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", function() {
  render(<BrowserRouter><UserProvider><App /></UserProvider></BrowserRouter>);
});
