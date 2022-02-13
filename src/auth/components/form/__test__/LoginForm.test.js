import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, fireEvent } from "@testing-library/react";
import LoginForm from "../LoginForm";

const queryClient = new QueryClient();

describe("Login Form Component", () => {
  // it("validate for email for correct input", () => {
  //   const { getByTestId } = render(
  //     <QueryClientProvider client={queryClient}>
  //       <LoginForm />
  //     </QueryClientProvider>
  //   );
  //   const input = getByTestId("email");
  //   fireEvent.type(screen.getByLabelText("Email"), "hello@hello.com");
  //   expect(input).toBeTruthy;
  // });

  it("test", () => {
    test("submits username and password", async () => {
      // ARRANGE
      const email = "email@email.com";
      const password = "pass1234";
      const mockLogin = jest.fn();

      const { getByTestId } = render(
        <LoginForm onSubmit={mockLogin(email, password)} />
      );

      const emailInput = getByTestId("email", { email: "email@email.com" });
      userEvent.type(emailInput, "email@email.com");
      const passwordInput = getByTestId("Password");
      userEvent.type(passwordInput, "pass1234");

      // ACT
      userEvent.click(loginButton);

      // ASSERT
      await expect(mockLogin).toHaveBeenCalled();
      await expect(mockLogin).toHaveBeenCalledTimes(1);
      await expect(mockLogin).toHaveBeenCalledWith("myusername", "pass1234");
    });
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
