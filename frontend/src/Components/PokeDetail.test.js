import React from "react";
import { render } from "@testing-library/react";
import PokeDetail from "./PokeDetail";
import { BrowserRouter } from "react-router-dom";

it("matches snapshot", function () {
    const { asFragment } = render(
          <BrowserRouter><PokeDetail /></BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });