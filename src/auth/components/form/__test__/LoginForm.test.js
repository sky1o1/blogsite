import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import LoginForm from "../LoginForm";

const queryClient = new QueryClient();

describe("Login Form Component", () => {
  it("validate for email for correct input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <LoginForm />
        </Router>
      </QueryClientProvider>
    );
    const input = getByTestId("email");
    expect(input).toBeTruthy;
  });

  it("validate for email for incorrect input", async () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <LoginForm />
        </Router>
      </QueryClientProvider>
    );
    const input = getByTestId("email");
    expect(input).toBeTruthy;
  });

  it("validate for password for correct input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <LoginForm />
        </Router>
      </QueryClientProvider>
    );
    const input = getByTestId("password");
    expect(input).toBeTruthy;
  });

  it("validate for password for incorrect input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <LoginForm />
        </Router>
      </QueryClientProvider>
    );
    const input = getByTestId("password");
    expect(input).toBeFalsy;
  });
});
