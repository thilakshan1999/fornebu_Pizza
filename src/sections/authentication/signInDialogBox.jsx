import { useTheme, Modal, Fade, Box, Button, TextField } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProviderComponent from "../../provider/formProviderComponent";
import CustomTypography from "../../components/typography/customTypography";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SignInDialogBox = ({ openSignIn, setOpenSignIn, setOpenLogIn }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const handleClose = () => setOpenSignIn(false);

  const onClickLogIn = () => {
    setOpenSignIn(false);
    setOpenLogIn(true);
  };

  // Preload translated messages here
  const usernameRequiredMessage = t("Username is required");
  const usernameMinLengthMessage = t("Username must be at least 3 characters");
  const emailRequiredMessage = t("Email is required");
  const emailInvalidMessage = t("Invalid email");
  const phoneNumberRequiredMessage = t("Phone number is required");
  const phoneNumberInvalidMessage = t("Invalid phone number format");
  const passwordRequiredMessage = t("Password is required");
  const passwordMinLengthMessage = t("Password must be at least 6 characters");
  const confirmPasswordRequiredMessage = t("Confirm Password is required");
  const passwordsMatchMessage = t("Passwords must match");

  // Define the yup schema with translated messages
  const signUpSchema = yup.object().shape({
    username: yup
      .string()
      .required(usernameRequiredMessage) // Use translated message
      .min(3, usernameMinLengthMessage), // Use translated message
    email: yup
      .string()
      .required(emailRequiredMessage) // Use translated message
      .email(emailInvalidMessage), // Use translated message
    phoneNumber: yup
      .string()
      .required(phoneNumberRequiredMessage) // Use translated message
      .matches(/^\+?[1-9]\d{1,14}$/, phoneNumberInvalidMessage), // Use translated message
    password: yup
      .string()
      .required(passwordRequiredMessage) // Use translated message
      .min(6, passwordMinLengthMessage), // Use translated message
    confirmPassword: yup
      .string()
      .required(confirmPasswordRequiredMessage) // Use translated message
      .oneOf([yup.ref("password"), null], passwordsMatchMessage), // Use translated message
  });

  const defaultSignUpValues = {
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const signUpMethods = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: defaultSignUpValues,
  });

  const {
    register,
    handleSubmit: handleSignUpSubmit,
    formState: { errors },
    reset,
  } = signUpMethods;

  const onSubmit = handleSignUpSubmit((data) => {
    console.log(data);
    handleClose();
  });

  useEffect(() => {
    if (openSignIn) {
      reset(defaultSignUpValues);
    }
  }, [openSignIn, reset]);

  return (
    <>
      <Modal
        open={openSignIn}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade in={openSignIn}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              width: {
                xs: "90%",
                sm: "400px",
              },
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                padding: "40px 20px",
              }}
            >
              <FormProviderComponent
                onSubmit={onSubmit}
                methods={signUpMethods}
              >
                {/* Title */}
                <CustomTypography
                  text={t("Create a New Account")}
                  align="center"
                  sx={{
                    fontWeight: "600",
                    color: theme.palette.text.black,
                    fontSize: "24px",
                  }}
                />

                <CustomTypography
                  text={t("Enter your details to create an account.")}
                  align="center"
                  sx={{
                    fontWeight: "400",
                    color: theme.palette.text.secondary,
                    fontSize: "16px",
                    marginBottom: "30px",
                  }}
                />

                {/* Username Field */}
                <TextField
                  label={t("Username")}
                  fullWidth
                  {...register("username")}
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />

                <Box sx={{ height: "20px" }} />

                {/* Email Field */}
                <TextField
                  label={t("Email")}
                  fullWidth
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />

                <Box sx={{ height: "20px" }} />

                {/* Phone Number Field */}
                <TextField
                  label={t("Phone Number")}
                  fullWidth
                  {...register("phoneNumber")}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                />

                <Box sx={{ height: "20px" }} />

                <TextField
                  label={t("Password")}
                  fullWidth
                  type="password"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />

                <Box sx={{ height: "20px" }} />

                <TextField
                  label={t("Confirm Password")}
                  fullWidth
                  type="password"
                  {...register("confirmPassword")}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "100%",
                    marginTop: "30px",
                    marginBottom: "10px",
                    backgroundColor: theme.palette.button.primary,
                    color: theme.palette.text.white,
                    fontWeight: "bold",
                    padding: "12px 18px",
                    textTransform: "uppercase",
                    fontSize: {
                      xs: "10px",
                      sm: "14px",
                    },
                    fontFamily: theme.typography.fontFamily,
                    borderRadius: "8px",
                  }}
                >
                  {t("Sign Up")}
                </Button>

                <Button
                  onClick={onClickLogIn}
                  variant="text"
                  sx={{
                    width: "100%",
                    color: theme.palette.text.black,
                    textTransform: "none",
                    fontSize: {
                      xs: "10px",
                      sm: "14px",
                    },
                    fontFamily: theme.typography.fontFamily,
                    "&:hover": {
                      textDecoration: "underline",
                      backgroundColor: "transparent", // Prevents default hover background
                      boxShadow: "none", // Removes any shadow effects
                    },
                  }}
                >
                  {t("Already have an account?")}
                </Button>
              </FormProviderComponent>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default SignInDialogBox;
