import { Container, Grid, Typography } from "@mui/material";
import RoomCard from "../components/RoomCard";
import { rooms } from "../data/rooms";

export default function Rooms() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>Rooms & Suites</Typography>
      <Grid container spacing={3}>
        {rooms.map(r => (
          <Grid key={r.id} item xs={12} sm={6} md={4}>
            <RoomCard room={r} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
