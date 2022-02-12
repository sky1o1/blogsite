import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "@testing-library/react";
import RegisterForm from "../RegisterForm";

const queryClient = new QueryClient();

describe("Register Form Component", () => {
  //name input test
  it("validate for name for correct input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <RegisterForm />
      </QueryClientProvider>
    );
    const input = getByTestId("name");
    expect(input).toBeTruthy;
  });

  it("validate for name for incorrect input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <RegisterForm />
      </QueryClientProvider>
    );
    const input = getByTestId("name");
    expect(input).toBeFalsy;
  });

  // email input test
  it("validate for email for correct input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <RegisterForm />
      </QueryClientProvider>
    );
    const input = getByTestId("email");
    expect(input).toBeTruthy;
  });

  it("validate for email for incorrect input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <RegisterForm />
      </QueryClientProvider>
    );
    const input = getByTestId("email");
    expect(input).toBeFalsy;
  });

  // password input test
  it("validate for password for correct input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <RegisterForm />
      </QueryClientProvider>
    );
    const input = getByTestId("password");
    expect(input).toBeTruthy;
  });

  it("validate for password for incorrect input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <RegisterForm />
      </QueryClientProvider>
    );
    const input = getByTestId("password");
    expect(input).toBeFalsy;
  });

  // confirm password input test
  it("validate for password for correct input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <RegisterForm />
      </QueryClientProvider>
    );
    const input = getByTestId("confirmPassword");
    expect(input).toBeTruthy;
  });

  it("validate for confirm password for incorrect input", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <RegisterForm />
      </QueryClientProvider>
    );
    const input = getByTestId("confirmPassword");
    expect(input).toBeFalsy;
  });
});
