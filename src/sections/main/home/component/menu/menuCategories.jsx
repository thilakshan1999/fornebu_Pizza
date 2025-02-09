import React, { useRef, useState, useEffect } from "react";
import { Box, Button, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { DummyCategories } from "../../../../../utils/dummyCateories";

const CategoryScroll = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Check if scrolling is needed
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  // Scroll function
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 150; // Adjust scrolling speed
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        width: "70%",
        marginInline: "10px",
      }}
    >
      {/* Left Arrow Button */}
      {showLeftArrow && (
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            paddingLeft: "17px",
            color: "white",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      )}

      {/* Category Buttons Container */}
      <Box
        ref={scrollContainerRef}
        sx={{
          display: "flex",
          height: "100%",
          overflowX: "auto",
          scrollBehavior: "smooth",
          whiteSpace: "nowrap",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {DummyCategories.map((category, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              backgroundColor: "transparent",
              color: "white",
              padding: "8px 20px",
              borderRadius: "0px",
              height: "100%",
              boxShadow: "none",
              flexShrink: 0,
              "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.3)" },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Right Arrow Button */}
      {showRightArrow && (
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default CategoryScroll;
