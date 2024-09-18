import React from "react";
import { render } from "@testing-library/react";
import Move from "./Move";
import { BrowserRouter } from "react-router-dom";

it("matches snapshot", function () {
    const { asFragment } = render(
          <BrowserRouter><Move /></BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });