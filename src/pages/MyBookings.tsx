import { useEffect, useState } from "react";
import type { Booking } from "../types";
import { Box, Button, Container, Paper, Stack, Typography } from "@mui/material";
import { toast } from "react-toastify";

const STORAGE_KEY = "bn-bookings";

export default function MyBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    setBookings(raw ? JSON.parse(raw) : []);
  }, []);

  const cancel = (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    toast.info("Booking cancelled.");
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h3" sx={{ mb: 3 }}>My Bookings</Typography>
      {bookings.length === 0 ? (
        <Typography>No bookings yet.</Typography>
      ) : (
        <Stack spacing={2}>
          {bookings.map(b => (
            <Paper key={b.id} sx={{ p: 2 }}>
              <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ sm: "center" }} spacing={1}>
                <Box>
                  <Typography variant="h6">{b.roomName}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {b.checkIn} → {b.checkOut} • {b.guests} guests
                  </Typography>
                  <Typography variant="body2" color="text.secondary">Under: {b.fullName} — {b.email}</Typography>
                </Box>
                <Button variant="outlined" onClick={() => cancel(b.id)}>Cancel</Button>
              </Stack>
            </Paper>
          ))}
        </Stack>
      )}
    </Container>
  );
}
