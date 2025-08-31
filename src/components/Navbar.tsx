import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "background.paper", color: "text.primary", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: 2 }}>
            B&N
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button component={RouterLink} to="/" color="inherit">Home</Button>
          <Button component={RouterLink} to="/rooms" color="inherit">Rooms</Button>
          <Button component={RouterLink} to="/my-bookings" color="inherit">My Bookings</Button>
          <Button component={RouterLink} to="/booking" variant="contained" sx={{ ml: 1 }}>Book Now</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
