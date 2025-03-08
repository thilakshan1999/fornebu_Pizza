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
import CustomTypography from "../../components/typography/customTypography";
import FormProviderComponent from "../../provider/formProviderComponent";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../provider/AuthProvider";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import showSuccessToast from "../../components/toast/showSucessToast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LogInDialogBox = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClose = () => setOpenLogIn(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { openLogIn, setOpenLogIn, setOpenSignIn, setUser, setUserDetails } =
    useAuth();

  const onClickSignIn = () => {
    setOpenLogIn(false);
    setOpenSignIn(true);
  };

  const emailRequiredMessage = t("Email is required");
  const emailInvalidMessage = t("Invalid email");
  const passwordRequiredMessage = t("Password is required");
  const passwordMinLengthMessage = t("Password must be at least 6 characters");

  // Define the yup schema with translated messages
  const logInSchema = yup.object().shape({
    email: yup
      .string()
      .required(emailRequiredMessage) // Use translated message
      .email(emailInvalidMessage), // Use translated message
    password: yup
      .string()
      .required(passwordRequiredMessage) // Use translated message
      .min(6, passwordMinLengthMessage), // Use translated message
  });

  const defaultLogInValues = {
    password: "",
    email: "",
  };

  const logInMethods = useForm({
    resolver: yupResolver(logInSchema),
    defaultValues: defaultLogInValues,
  });

  const {
    register,
    handleSubmit: handleLoginSubmit,
    formState: { errors },
    reset,
  } = logInMethods;

  const onSubmit = handleLoginSubmit(async (data) => {
    console.log(data);
    setLoading(true);
    try {
      // 🔹 Sign in user with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      console.log("User logged in:", user);

      // 🔹 Fetch user details from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        setUserDetails(userSnap.data()); // Set user details in context
      } else {
        setUserDetails(null);
      }

      setUser(user);
      showSuccessToast(t("Login successful!"));
      navigate("/");
      handleClose();
    } catch (error) {
      let errorMessage = t("Something went wrong!");
      if (error.code === "auth/user-not-found") {
        errorMessage = t("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        errorMessage = t("Incorrect password.");
      } else if (error.code === "auth/too-many-requests") {
        errorMessage = t("Too many failed login attempts. Try again later.");
      }

      console.error("Login Error:", error.message);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  });

  useEffect(() => {
    if (openLogIn) {
      setError("");
      setLoading(false);
      reset(defaultLogInValues);
    }
  }, [openLogIn, reset]);

  return (
    <Modal
      open={openLogIn}
      onClose={handleClose}
      closeAfterTransition
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fade in={openLogIn}>
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
            <FormProviderComponent onSubmit={onSubmit} methods={logInMethods}>
              {/* Tittle */}
              <CustomTypography
                text={t("Login to Your Account")}
                align="center"
                sx={{
                  fontWeight: "600",
                  color: theme.palette.text.black,
                  fontSize: "24px",
                }}
              />

              <CustomTypography
                text={t(
                  "Please enter your email and password to access your account."
                )}
                align="center"
                sx={{
                  fontWeight: "400",
                  color: theme.palette.text.secondary,
                  fontSize: "16px",
                  marginBottom: "30px",
                }}
              />

              {/* Email Field */}
              <TextField
                label={t("Email")}
                fullWidth
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message || error}
                disabled={loading}
              />

              <Box sx={{ height: "20px" }} />

              {/* Password Field */}
              <TextField
                label={t("Password")}
                fullWidth
                type="password"
                {...register("password")}
                error={!!errors.password || error}
                helperText={errors.password?.message}
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
                  t("Login")
                )}
              </Button>

              <Button
                onClick={onClickSignIn}
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
                {t("Don't have an account?")}
              </Button>
            </FormProviderComponent>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
export default LogInDialogBox;
