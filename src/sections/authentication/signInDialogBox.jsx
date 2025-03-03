import {
  useTheme,
  Modal,
  Fade,
  Box,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProviderComponent from "../../provider/formProviderComponent";
import CustomTypography from "../../components/typography/customTypography";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import showSuccessToast from "../../components/toast/showSucessToast";
import { useAuth } from "../../provider/AuthProvider";

const SignInDialogBox = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const handleClose = () => setOpenSignIn(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setOpenLogIn, openSignIn, setOpenSignIn, setUser, setUserDetails } =
    useAuth();

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

  const onSubmit = handleSignUpSubmit(async (data) => {
    console.log(data);
    setLoading(true);
    try {
      // 🔹 Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      console.log("User signed up:", user);

      const userData = {
        username: data.username,
        email: data.email,
        phoneNumber: data.phoneNumber,
        isAdmin: false,
        createdAt: new Date(),
      };

      await setDoc(doc(db, "users", user.uid), userData);

      // 🔹 Save user and details globally in AuthContext
      setUser(user);
      setUserDetails(userData);

      // ✅ Close the modal on success
      showSuccessToast(t("User signed up successfully"));
      handleClose();
    } catch (error) {
      // 🔹 Handle Firebase Authentication Errors
      let errorMessage = t("Something went wrong!");
      if (error.code === "auth/email-already-in-use") {
        errorMessage = t("This email is already in use.");
      } else if (error.code === "auth/invalid-email") {
        errorMessage = t("Invalid email address.");
      } else if (error.code === "auth/weak-password") {
        errorMessage = t("Password should be at least 6 characters.");
      }

      console.error("Sign-Up Error:", error.message);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    if (openSignIn) {
      setError("");
      setLoading(false);
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
                  error={!!errors.username || error}
                  helperText={errors.username?.message}
                  disabled={loading}
                />

                <Box sx={{ height: "20px" }} />

                {/* Email Field */}
                <TextField
                  label={t("Email")}
                  fullWidth
                  {...register("email")}
                  error={!!errors.email || error}
                  helperText={errors.email?.message}
                  disabled={loading}
                />

                <Box sx={{ height: "20px" }} />

                {/* Phone Number Field */}
                <TextField
                  label={t("Phone Number")}
                  fullWidth
                  {...register("phoneNumber")}
                  error={!!errors.phoneNumber || error}
                  helperText={errors.phoneNumber?.message}
                  disabled={loading}
                />

                <Box sx={{ height: "20px" }} />

                <TextField
                  label={t("Password")}
                  fullWidth
                  type="password"
                  {...register("password")}
                  error={!!errors.password || error}
                  helperText={errors.password?.message}
                  disabled={loading}
                />

                <Box sx={{ height: "20px" }} />

                <TextField
                  label={t("Confirm Password")}
                  fullWidth
                  type="password"
                  {...register("confirmPassword")}
                  error={!!errors.confirmPassword || error}
                  helperText={errors.confirmPassword?.message}
                  disabled={loading}
                />

                {error && (
                  <CustomTypography
                    text={error}
                    align="left"
                    sx={{
                      color: theme.palette.text.red,
                      fontSize: "12px",
                      marginTop: "10px",
                    }}
                  />
                )}

                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{
                    width: "100%",
                    marginTop: "30px",
                    marginBottom: "10px",
                    backgroundColor: theme.palette.button.primary,
                    color: theme.palette.text.white,
                    fontWeight: "bold",
                    padding: "12px 18px",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    fontFamily: theme.typography.fontFamily,
                    borderRadius: "8px",
                  }}
                >
                  {loading ? (
                    <CircularProgress
                      size={24}
                      sx={{ margin: "4px 10px", color: "white" }}
                    />
                  ) : (
                    t("Sign Up")
                  )}
                </Button>

                <Button
                  onClick={onClickLogIn}
                  variant="text"
                  disabled={loading}
                  sx={{
                    width: "100%",
                    color: theme.palette.text.black,
                    textTransform: "none",
                    fontSize: "14px",
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
