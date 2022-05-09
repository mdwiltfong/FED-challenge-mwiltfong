import { render } from "@testing-library/react";
import Response from "./components/Response";

describe("Response component tests", () => {
  it("Smoke Test", () => {
    render(<Response />);
  });
  it("Snapshot Tests", () => {
    const screen = render(<Response />);
    expect(screen.asFragment()).toMatchSnapshot();
  });
  it("Renders a response that has the prompt and API response from OPEN AI", () => {
    const screen = render(
      <Response
        prompt={"write a poem about dinosaurs"}
        response={"Dinosaurs in the snow"}
      />
    );
    const prompt = screen.getByTestId("prompt");
    const response = screen.getByTestId("response");
    expect(prompt).toHaveTextContent("write a poem about dinosaurs");
    expect(response).toHaveTextContent("Dinosaurs in the snow");
  });
});
