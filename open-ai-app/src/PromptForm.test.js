import PromptForm from "./components/PromptForm";
import { render } from "@testing-library/react";
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

    const promptForm = screen.container.getElementsByTagName("form");
    const textArea = screen.container.getElementsByTagName("textarea");
    const submitBtn = screen.getByText("Submit");
    expect(promptForm).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });
});
