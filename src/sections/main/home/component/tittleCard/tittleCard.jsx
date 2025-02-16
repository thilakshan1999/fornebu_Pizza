import { Box } from "@mui/material";
import tittleBackground from "../../../../../assets/images/home/tittleBackground.png";
import TittleInfo from "./tittleInfo";

const TittleCard = ({ isFixed, ref }) => {
  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        height: "250px",
        marginTop: isFixed ? "50px" : "0px",
        position: "relative", // ✅ Ensures child elements position correctly
        display: {
          xs: "none",
          md: "flex",
        },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "150px",
          backgroundImage: `url(${tittleBackground})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)", // ✅ Gradient Effect
        }}
      />

      <Box
        sx={{
          position: "relative",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
          maxWidth: "1200px",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "end",
        }}
      >
        <TittleInfo />
      </Box>
    </Box>
  );
};

export default TittleCard;
