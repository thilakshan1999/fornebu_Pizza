import React, { useState } from "react";
import { TextField, InputAdornment, IconButton, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
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
        marginBlock: "auto",
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          color: theme.palette.text.white,
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
            <SearchIcon sx={{ color: theme.palette.text.white }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
