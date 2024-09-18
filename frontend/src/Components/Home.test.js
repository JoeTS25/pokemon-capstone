import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

it("matches snapshot", function () {
    const { asFragment } = render(
          <BrowserRouter><Home /></BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });