import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NotFound() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3">404 — Page not found</Typography>
        <Typography color="text.secondary" sx={{ mt: 1, mb: 3 }}>
          The page you are looking for doesn’t exist or has been moved.
        </Typography>
        <Button component={RouterLink} to="/" variant="contained">Back to Home</Button>
      </Box>
    </Container>
  );
}
