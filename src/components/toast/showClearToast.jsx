import { toast } from "react-toastify";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// Common toast success function
const showClearToast = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      backgroundColor: "#e74c3c",
      color: "white",
      borderRadius: "8px",
    },
    icon: () => (
      <DeleteOutlineIcon style={{ color: "white", fontSize: "24px" }} />
    ),
  });
};

export default showClearToast;
