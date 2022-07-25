import Home from "../pages/index"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

describe("index page", () => {
  
    it("renders index text", async () => {
      render(<Home />);
      setTimeout(() => {
        expect(screen.getByText(/index/i)).toBeInTheDocument()
      }, 3000);
      
      
        });
  });