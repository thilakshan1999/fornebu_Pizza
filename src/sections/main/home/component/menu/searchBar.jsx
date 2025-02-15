import React, { useState } from "react";
import { TextField, InputAdornment, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Clear the previous timeout if user is typing
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set a new timeout to wait for 500ms after user stops typing
    const newTimeout = setTimeout(() => {
      if (query) {
        navigate(`/search/${encodeURIComponent(query)}`);
      }
    }, 500); // You can adjust the delay (500ms) as needed

    setDebounceTimeout(newTimeout);
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearchChange}
      size="small"
      sx={{
        flexGrow: 1,
        maxWidth: { xs: "100%", md: "250px" },
        width: "100%",
        marginBlock: "auto",
        backgroundColor: { xs: "white", md: "transparent" },
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          color: { xs: theme.palette.text.black, md: theme.palette.text.white },
          "& fieldset": {
            borderColor: theme.palette.border.green,
          },
          "&:hover fieldset": {
            borderColor: theme.palette.border.green,
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.border.green,
          },
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon
              sx={{
                color: {
                  xs: theme.palette.text.grey,
                  md: theme.palette.text.white,
                },
              }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
