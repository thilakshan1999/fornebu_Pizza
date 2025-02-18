import { toast } from "react-toastify";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// Common toast success function
const showSuccessToast = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      backgroundColor: "#12b981",
      color: "white",
      borderRadius: "8px",
    },
    icon: () => (
      <CheckCircleOutlineIcon style={{ color: "white", fontSize: "24px" }} />
    ),
  });
};

export default showSuccessToast;
