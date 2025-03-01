import { IconButton } from "@mui/material";
import { AccountCircleOutlined } from "@mui/icons-material";
import { useState } from "react";
import LogInDialogBox from "./logInDialogBox";
import SignInDialogBox from "./signInDialogBox";

const ProfileBtn = () => {
  const [openLogIn, setOpenLogIn] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  const handleOpenDialog = () => setOpenLogIn(true);
  return (
    <>
      <IconButton
        sx={{
          color: { xs: "grey", md: "white" },
          padding: "0px",
          marginLeft: "5px",
        }}
        onClick={handleOpenDialog}
      >
        <AccountCircleOutlined
          sx={{
            fontSize: "2.25rem",
          }}
        />
      </IconButton>

      <LogInDialogBox
        openLogIn={openLogIn}
        setOpenLogIn={setOpenLogIn}
        setOpenSignIn={setOpenSignIn}
      />
      <SignInDialogBox
        openSignIn={openSignIn}
        setOpenSignIn={setOpenSignIn}
        setOpenLogIn={setOpenLogIn}
      />
    </>
  );
};
export default ProfileBtn;
