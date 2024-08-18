import { Audio } from "react-loader-spinner"
import { Typography, Box } from "@mui/material";
import { Dog } from "lucide-react"
import "./Spinner.css"

const LoadingSpinner = () => {
  return (
    <div className="spinner-box">
      <Audio height={100} width={100} color="grey" ariaLabel="Spinner"/>
      <Box className="sidebar-header">
            <Typography
              variant="h6"
              sx={{ flexGrow: 1 }}
              className="app-bar-typography"
            >
              <Dog className="doggy" size={24} />
              &nbsp;
              <p id="logo-text">Newsdog</p>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
      </Box>
    </div>
  );
};

export default LoadingSpinner;
