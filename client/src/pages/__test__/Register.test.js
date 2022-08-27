import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Register from "../Register";

describe("Register Page", () => {
    const setup = () => {
        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );
    };
    beforeEach(() => {
        setup();
    });

    it("should render the lock icon to the Register Page", () => {
        const lock = screen.getByTestId("LockOutlinedIcon");
        expect(lock).toBeVisible();
    });

    it("should render the heading", () => {
        const headingElement = screen.getByRole("heading", {
            name: /please register/i,
        });
        expect(headingElement).toBeVisible();
    });

    it("should render the First Name input", () => {
        const firstName = screen.getByRole("textbox", { name: /first name/i });
        user.type(firstName, "John");
    });

    it("should render the Last Name input", () => {
        const lastName = screen.getByRole("textbox", { name: /last name/i });
        user.type(lastName, "Pageler");
    });

    it("should render the Email input", () => {
        const email = screen.getByRole("textbox", { name: /email/i });
        user.type(email, "harakido1@yahoo.com");
    });

    it("should render the Password input", () => {
        const password = screen.getByTestId("password");
        user.type(password, "123456789");
    });

    it("should render the Confirm Password input", () => {
        const confirmPassword = screen.getByTestId("confirmPassword");
        user.type(confirmPassword, "123456789");
    });

    it("should render the Register Button", () => {
        const buttonElement = screen.getByRole("button", { name: /register/i });
        expect(buttonElement).toBeVisible();
    });

    it("should Link to Login Page", () => {
        const loginElement = screen.getByRole("link", {
            name: /already have an account\? sign in/i,
        });
        expect(loginElement).toBeVisible();
    });
});
