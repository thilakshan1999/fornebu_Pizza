import { toast } from "react-toastify";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const showFailedToast = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      backgroundColor: "#e74c3c", // Red color for failure
      color: "white",
      borderRadius: "8px",
    },
    icon: () => (
      <ErrorOutlineIcon style={{ color: "white", fontSize: "24px" }} />
    ),
  });
};

export default showFailedToast;
