import PromptForm from "./components/PromptForm";
import { fireEvent, render, waitFor } from "@testing-library/react";
describe("PromptForm component Tests", () => {
  it("Smoke Tests", () => {
    render(<PromptForm />);
  });
  it("Snapshot Tests", () => {
    const screen = render(<PromptForm />);
    expect(screen.asFragment()).toMatchSnapshot();
  });
  it("Renders a form with a textarea, and submit button", () => {
    const screen = render(<PromptForm />);

    const promptForm = screen.getByTestId("prompt-form");
    const textArea = screen.container.querySelector("textarea");
    const submitBtn = screen.getByText("Submit");
    expect(promptForm).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });
  it("Submitting a form renders a response", async () => {
    const screen = render(<PromptForm />);
    const submitBtn = await screen.findByText("Submit");

    await waitFor(() => {
      fireEvent.click(submitBtn);
      const response = screen.getByTestId("response");
      expect(response).toBeInTheDocument();
      expect(response).toHaveTextContent("Hey, I");
    });
  });
});
