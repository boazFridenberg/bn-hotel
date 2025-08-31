import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 8, borderTop: "1px solid rgba(0,0,0,0.06)", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" sx={{ fontWeight: 700 }}>B&N</Typography>
        <Typography variant="body2" color="text.secondary">
          Elevated stays inspired by timeless luxury. © {new Date().getFullYear()} B&N.
        </Typography>
      </Container>
    </Box>
  );
}
