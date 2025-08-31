import { Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { Room } from "../types";

type Props = { room: Room };

export default function RoomCard({ room }: Props) {
  return (
    <Card>
      <CardActionArea component={RouterLink} to={`/rooms/${room.slug}`}>
        <CardMedia component="img" height="220" image={room.images[0]} alt={room.name} />
        <CardContent>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{room.name}</Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>${room.pricePerNight}/night</Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{room.shortDescription}</Typography>
          <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
            {room.amenities.slice(0, 3).map(a => <Chip key={a} label={a} size="small" />)}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
