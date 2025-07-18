import { Typography } from "@mui/material";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Typography variant="body2" color="inherit" align="center">
        Javier Espinosa &copy; {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
