import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, MenuItem, Paper, Stack, TextField, Typography, Button } from "@mui/material";
import { rooms } from "../data/rooms";
import type { Booking } from "../types";
import { v4 as uuid } from "uuid";
import { toast, ToastContainer } from "react-toastify";

type FormState = {
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  fullName: string;
  email: string;
};

const STORAGE_KEY = "bn-bookings";

export default function BookingPage() {
  const location = useLocation() as { state?: { roomId?: string } };
  const [form, setForm] = useState<FormState>({
    roomId: "",
    checkIn: "",
    checkOut: "",
    guests: 2,
    fullName: "",
    email: ""
  });

  useEffect(() => {
    if (location.state?.roomId) setForm(s => ({ ...s, roomId: location.state!.roomId! }));
  }, [location.state]);

  const selectedRoom = useMemo(() => rooms.find(r => r.id === form.roomId), [form.roomId]);

  const onChange = (key: keyof FormState, val: string | number) =>
    setForm(prev => ({ ...prev, [key]: val }));

  const saveBooking = (b: Booking) => {
    const existing = localStorage.getItem(STORAGE_KEY);
    const list: Booking[] = existing ? JSON.parse(existing) : [];
    list.push(b);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  };

  const submit = () => {
    if (!form.roomId || !form.checkIn || !form.checkOut || !form.fullName || !form.email) {
      toast.error("Please fill all required fields.");
      return;
    }
    if (new Date(form.checkOut) <= new Date(form.checkIn)) {
      toast.error("Check-out must be after check-in.");
      return;
    }
    const booking: Booking = {
      id: uuid(),
      roomId: form.roomId,
      roomName: rooms.find(r => r.id === form.roomId)!.name,
      checkIn: form.checkIn,
      checkOut: form.checkOut,
      guests: form.guests,
      fullName: form.fullName,
      email: form.email,
      createdAt: new Date().toISOString()
    };
    saveBooking(booking);
    toast.success("Your reservation has been saved.");
    setForm(f => ({ ...f, checkIn: "", checkOut: "", fullName: "", email: "" }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <ToastContainer position="top-center" />
      <Typography variant="h3" sx={{ mb: 3 }}>Book Your Stay</Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Stack spacing={2}>
              <TextField
                select
                label="Room"
                value={form.roomId}
                onChange={e => onChange("roomId", e.target.value)}
                fullWidth
              >
                {rooms.map(r => (
                  <MenuItem key={r.id} value={r.id}>
                    {r.name} — ${r.pricePerNight}/night
                  </MenuItem>
                ))}
              </TextField>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  type="date"
                  label="Check-in"
                  InputLabelProps={{ shrink: true }}
                  value={form.checkIn}
                  onChange={e => onChange("checkIn", e.target.value)}
                  fullWidth
                />
                <TextField
                  type="date"
                  label="Check-out"
                  InputLabelProps={{ shrink: true }}
                  value={form.checkOut}
                  onChange={e => onChange("checkOut", e.target.value)}
                  fullWidth
                />
              </Stack>

              <TextField
                type="number"
                label="Guests"
                inputProps={{ min: 1, max: 6 }}
                value={form.guests}
                onChange={e => onChange("guests", Number(e.target.value))}
                fullWidth
              />

              <TextField
                label="Full name"
                value={form.fullName}
                onChange={e => onChange("fullName", e.target.value)}
                fullWidth
              />

              <TextField
                label="Email"
                type="email"
                value={form.email}
                onChange={e => onChange("email", e.target.value)}
                fullWidth
              />

              <Button onClick={submit} variant="contained" size="large">Confirm Reservation</Button>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              {selectedRoom ? selectedRoom.name : "Select a room"}
            </Typography>
            {selectedRoom && (
              <>
                <img
                  src={selectedRoom.images[0]}
                  alt={selectedRoom.name}
                  style={{ width: "100%", height: 260, objectFit: "cover", borderRadius: 12 }}
                />
                <Typography sx={{ mt: 2 }} color="text.secondary">
                  {selectedRoom.shortDescription}
                </Typography>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
