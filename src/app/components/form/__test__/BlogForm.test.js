import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import BlogForm from "../BlogForm";

const queryClient = new QueryClient();

describe("Blog Form Component", () => {
  // test for title
  it("validate for title for correct input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <BlogForm />
        </Router>
      </QueryClientProvider>
    );
    const input = getByTestId("title");
    expect(input).toBeTruthy;
  });

  it("validate for title for incorrect input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <BlogForm />
        </Router>
      </QueryClientProvider>
    );
    const input = getByTestId("title");
    expect(input).toBeFalsy;
  });

  // test for description
  it("validate for description for correct input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <BlogForm />
        </Router>
      </QueryClientProvider>
    );
    const input = getByTestId("description");
    expect(input).toBeTruthy;
  });

  it("validate for description for incorrect input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <BlogForm />
        </Router>
      </QueryClientProvider>
    );
    const input = getByTestId("description");
    expect(input).toBeFalsy;
  });
});
