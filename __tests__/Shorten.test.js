import { render, screen, fireEvent, act } from "@testing-library/react";
import Shorten from "../components/elements/Shorten";
import ShortenLink from "../components/elements/Shorten/ShortenLink";
describe("Shorten form", () => {
  it("render URL input", () => {
    const { getByPlaceholderText } = render(<Shorten />);
    expect(getByPlaceholderText("Shorten a link here...")).toBeInTheDocument();
  });

  it("render submiting button", () => {
    const { getByText } = render(<Shorten />);
    expect(getByText("shorten it!")).toBeInTheDocument();
  });

  it("validate URL input when the input value is blank", async () => {
    const { getByTestId, getByText, getByPlaceholderText } = render(
      <Shorten />
    );
    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText("Shorten a link here..."), {
        target: { value: "" },
      });
    });
    await act(async () => {
      fireEvent.submit(getByTestId("form"));
    });
    expect(getByText("Please add a link")).toBeInTheDocument();
  });
});
