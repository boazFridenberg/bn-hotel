import { useMemo } from "react";
import { useParams, Link as RouterLink, useNavigate } from "react-router-dom";
import { rooms } from "../data/rooms";
import { Box, Button, Chip, Container, Grid, Stack, Typography } from "@mui/material";

export default function RoomDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const room = useMemo(() => rooms.find(r => r.slug === slug), [slug]);

  if (!room) return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h5">Room not found.</Typography>
      <Button sx={{ mt: 2 }} onClick={() => navigate(-1)} variant="outlined">Go Back</Button>
    </Container>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Box sx={{ display: "grid", gap: 2 }}>
            <Box component="img" src={room.images[0]} alt={room.name} sx={{ width: "100%", borderRadius: 2, height: 420, objectFit: "cover" }} />
            <Box component="img" src={room.images[1]} alt={room.name} sx={{ width: "100%", borderRadius: 2, height: 220, objectFit: "cover" }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            <Typography variant="h3">{room.name}</Typography>
            <Typography variant="h6">${room.pricePerNight}/night</Typography>
            <Typography variant="body1" color="text.secondary">{room.shortDescription}</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              <Chip label={room.size} />
              <Chip label={room.beds} />
              <Chip label={`${room.guests} Guests`} />
              {room.amenities.map(a => <Chip key={a} label={a} variant="outlined" />)}
            </Stack>
            <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
              <Button component={RouterLink} to="/booking" state={{ roomId: room.id }} variant="contained">Book This Room</Button>
              <Button variant="outlined" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to Top</Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
