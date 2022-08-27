import { useState } from "react";
import {
    Grid,
    TextField,
    Button,
    Typography,
    CssBaseline,
    Container,
    Box,
    Avatar,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// #region --------------( ICONS )--------------
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
// #endregion

import React from "react";

export interface IRegisterProps {}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });

    const handleRegister = () => {
        const { firstName, lastName, email, password, confirmPassword } = user;
        if (
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword
        ) {
            toast("Please fill all the fields", { type: "error" });
            return;
        }

        if (password !== confirmPassword) {
            toast("Passwords do not match", { type: "error" });
            return;
        }
    };

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    return (
        <Container maxWidth="xs">
            <CssBaseline />

            <Box
                sx={{
                    mt: 8,
                    display: "flex",
                    mb: 6,
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, backgroundColor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography
                    component="h1"
                    variant="h3"
                    style={{ fontFamily: "Lobster" }}
                >
                    Please Register
                </Typography>

                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            placeholder="Enter Your First Name"
                            label="First Name"
                            name="firstName"
                            value={user.firstName}
                            onChange={(e) =>
                                setUser({ ...user, firstName: e.target.value })
                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            placeholder="Enter Your Last Name"
                            name="lastName"
                            label="Last Name"
                            value={user.lastName}
                            onChange={(e) =>
                                setUser({ ...user, lastName: e.target.value })
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            placeholder="Enter Your Email"
                            name="email"
                            label="Email"
                            value={user.email}
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            data-testId="password"
                            placeholder="Enter Password"
                            name="password"
                            label="Password"
                            value={user.password}
                            type={showPassword.password ? "text" : "password"}
                            onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                            }
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        position="end"
                                        onClick={() =>
                                            setShowPassword({
                                                ...showPassword,
                                                password:
                                                    !showPassword.password,
                                            })
                                        }
                                    >
                                        <IconButton
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                        >
                                            {!showPassword.confirmPassword ? (
                                                <VisibilityOutlinedIcon />
                                            ) : (
                                                <VisibilityOffOutlinedIcon />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            data-testId="confirmPassword"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            label="Confirm Password"
                            value={user.confirmPassword}
                            type={
                                showPassword.confirmPassword
                                    ? "text"
                                    : "password"
                            }
                            onChange={(e) =>
                                setUser({
                                    ...user,
                                    confirmPassword: e.target.value,
                                })
                            }
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        position="end"
                                        onClick={() =>
                                            setShowPassword({
                                                ...showPassword,
                                                confirmPassword:
                                                    !showPassword.confirmPassword,
                                            })
                                        }
                                    >
                                        <IconButton
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                        >
                                            {!showPassword.confirmPassword ? (
                                                <VisibilityOutlinedIcon />
                                            ) : (
                                                <VisibilityOffOutlinedIcon />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
                <Button
                    onClick={handleRegister}
                    fullWidth
                    sx={{
                        mt: 3,
                        mb: 2,
                    }}
                >
                    Register
                </Button>

                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link to="/login">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Register;
