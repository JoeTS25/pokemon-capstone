import React from "react";
import { render } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { UserProvider } from "../testUtils";
import { BrowserRouter } from "react-router-dom";

it("matches snapshot", function () {
  const { asFragment } = render(
        <BrowserRouter><UserProvider><LoginForm /> </UserProvider></BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});