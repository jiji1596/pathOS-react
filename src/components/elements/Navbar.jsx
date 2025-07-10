import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Link as MuiLink,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { useCustomTheme } from "../../ThemeContext";
import logo from "../../assets/icon.svg";
import { useState } from "react";

const navItems = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About Us" },
  { href: "#pricing", text: "Pricing" },
];

export const Navbar = () => {
  const { mode, toggleTheme } = useCustomTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {navItems.map((item, key) => (
          <MuiLink
            key={key}
            component={RouterLink}
            to={item.href}
            underline="none"
            color="text.secondary"
          >
            {item.text}
          </MuiLink>
        ))}
        <ListItem button="true" component="a" href="#cta">
          <ListItemText primary="Get Started" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="absolute" color="default" elevation={0} sx={{ py: 2 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo and Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <MuiLink
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <img src={logo} alt="Logo" width={40} height={40} />
              <Typography
                variant="h6"
                color="text.primary"
                sx={{ ml: 1, fontWeight: 600 }}
              >
                pathOS
              </Typography>
            </MuiLink>
          </Box>

          {/* Desktop Nav Links */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <MuiLink
                key={item.text}
                href={item.href}
                underline="none"
                color="text.secondary"
              >
                {item.text}
              </MuiLink>
            ))}
            <Button variant="contained" href="#cta">
              Get Started
            </Button>
            <IconButton onClick={toggleTheme}>
              {mode === "dark" ? <Brightness2Icon /> : <Brightness7Icon />}
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};
