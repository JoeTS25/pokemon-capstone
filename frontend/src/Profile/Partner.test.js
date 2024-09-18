import React from "react";
import { render } from "@testing-library/react";
import Partner from "./Partner";
import { BrowserRouter } from "react-router-dom";

it("matches snapshot", function () {
    const { asFragment } = render(
          <BrowserRouter><Partner /></BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });