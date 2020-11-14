import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "./index";

describe("The <Footer> component", () => {
  it("should render", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});
