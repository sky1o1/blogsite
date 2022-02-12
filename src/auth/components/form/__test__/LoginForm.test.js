import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";
import LoginForm from "../LoginForm";

const queryClient = new QueryClient();

describe("Login Form Component", () => {
  it("validate for email for correct input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <LoginForm />
      </QueryClientProvider>
    );
    const input = getByTestId("email");
    expect(input).toBeTruthy;
  });

  it("validate for email for incorrect input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <LoginForm />
      </QueryClientProvider>
    );
    const input = getByTestId("email");
    expect(input).toBeFalsy;
  });

  it("validate for password for correct input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <LoginForm />
      </QueryClientProvider>
    );
    const input = getByTestId("password");
    expect(input).toBeTruthy;
  });

  it("validate for password for incorrect input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <LoginForm />
      </QueryClientProvider>
    );
    const input = getByTestId("password");
    expect(input).toBeFalsy;
  });
});
