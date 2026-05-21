import { timeline } from "@/data/about";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";

export default function JourneyTimeline() {
  return (
    <Paper elevation={0} className="reveal" sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, border: "1px solid", borderColor: "divider" }}>
      <Stack spacing={1.5} sx={{ mb: 4, textAlign: "center" }}>
        <Box><Chip label="OUR JOURNEY" size="small" variant="outlined" /></Box>
        <Typography variant="h3">Milestones Along The Way</Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" },
          gap: 2,
        }}
      >
        {timeline.map((item) => (
          <Paper
            key={`${item.year}-${item.title}`}
            elevation={0}
            sx={{ p: 2.5, borderRadius: 3, border: "1px solid", borderColor: "divider", bgcolor: "background.default" }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "999px",
                border: "2px solid",
                borderColor: "divider",
                display: "grid",
                placeItems: "center",
                mb: 1.5,
                fontSize: "0.72rem",
                fontWeight: 700,
              }}
            >
              {item.year}
            </Box>
            <Typography variant="h6" sx={{ mb: 1 }}>{item.title}</Typography>
            <Typography className="text-muted" sx={{ fontSize: "0.95rem", lineHeight: 1.7 }}>{item.description}</Typography>
          </Paper>
        ))}
      </Box>
    </Paper>
  );
}
