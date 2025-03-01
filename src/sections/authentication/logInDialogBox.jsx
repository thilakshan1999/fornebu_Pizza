import { useTheme, Modal, Fade, Box, Button, TextField } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomTypography from "../../components/typography/customTypography";
import FormProviderComponent from "../../provider/formProviderComponent";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LogInDialogBox = ({ openLogIn, setOpenLogIn, setOpenSignIn }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const handleClose = () => setOpenLogIn(false);

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

  const onSubmit = handleLoginSubmit((data) => {
    console.log(data);
    handleClose();
  });

  useEffect(() => {
    if (openLogIn) {
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
                helperText={errors.email?.message}
              />

              <Box sx={{ height: "20px" }} />

              {/* Password Field */}
              <TextField
                label={t("Password")}
                fullWidth
                type="password"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
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
                {t("Login")}
              </Button>

              <Button
                onClick={onClickSignIn}
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
