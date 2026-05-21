import { mission } from "@/data/about";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";

export default function MissionStatement() {
  return (
    <Paper
      elevation={0}
      className="reveal"
      sx={{
        p: { xs: 3, md: 5 },
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        background:
          "linear-gradient(130deg, rgba(17,17,17,0.03), rgba(17,17,17,0.01))",
      }}
    >
      <Stack spacing={2} sx={{ maxWidth: 860, mx: "auto", textAlign: "center" }}>
        <Box>
          <Chip label="OUR MISSION" size="small" variant="outlined" />
        </Box>
        <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
          {mission.title}
        </Typography>
        <Typography className="text-muted" sx={{ lineHeight: 1.8, fontSize: { xs: "1rem", md: "1.1rem" } }}>
          {mission.description}
        </Typography>
      </Stack>
    </Paper>
  );
}
