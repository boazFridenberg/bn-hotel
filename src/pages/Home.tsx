import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Box>
      <Box sx={{
        position: "relative",
        backgroundImage: "url(https://images.unsplash.com/photo-1501117716987-c8e1ecb2101f?q=80&w=2400&auto=format&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: { xs: 520, md: 640 },
        display: "flex",
        alignItems: "center"
      }}>
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.35)" }} />
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Stack spacing={2} sx={{ color: "#fff", maxWidth: 680 }}>
            <Typography variant="h2">B&N</Typography>
            <Typography variant="h5">Quiet luxury by the sea and the city.</Typography>
            <Stack direction="row" spacing={2}>
              <Button component={RouterLink} to="/rooms" variant="contained" color="secondary">Explore Rooms</Button>
              <Button component={RouterLink} to="/booking" variant="outlined" sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.6)" }}>
                Book Now
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={3}>
          {[
            { title: "Tailored Stays", text: "Personalized touches for every moment." },
            { title: "Calm Interiors", text: "Minimal lines, rich textures, natural light." },
            { title: "Effortless Booking", text: "Clear steps, secure and fast." }
          ].map(item => (
            <Grid item xs={12} md={4} key={item.title}>
              <Paper sx={{ p: 4 }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{item.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
