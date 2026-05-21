import { philosophy } from "@/data/about";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";

const collaborationPillars = ["Design", "Development", "Strategy", "Storytelling"];

export default function BridgePhilosophy() {
  return (
    <Paper elevation={0} className="reveal" sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, border: "1px solid", borderColor: "divider" }}>
      <Stack spacing={1.5} sx={{ textAlign: "center", maxWidth: 900, mx: "auto" }}>
        <Box><Chip label="BRIDGE PHILOSOPHY" size="small" variant="outlined" /></Box>
        <Typography variant="h3">{philosophy.title}</Typography>

        <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: 3, p: 2, my: 1.5, bgcolor: "background.default" }}>
          <svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", maxWidth: 700 }} aria-hidden="true">
            <defs><linearGradient id="river" x1="0" x2="1"><stop offset="0%" stopColor="currentColor" stopOpacity="0.15" /><stop offset="100%" stopColor="currentColor" stopOpacity="0.35" /></linearGradient></defs>
            <path d="M0 116 C70 106, 120 128, 190 116 C250 106, 310 128, 390 116 C440 108, 485 123, 520 117 L520 150 L0 150 Z" fill="url(#river)" />
            <path d="M65 94 C150 16, 370 16, 455 94" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            <rect x="126" y="45" width="8" height="52" rx="3" fill="currentColor" />
            <rect x="386" y="45" width="8" height="52" rx="3" fill="currentColor" />
            <rect x="75" y="95" width="370" height="7" rx="3" fill="currentColor" />
          </svg>
        </Box>

        <Typography className="text-muted" sx={{ lineHeight: 1.8 }}>
          {philosophy.description}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
          {collaborationPillars.map((skill) => (
            <Chip key={skill} label={skill} variant="outlined" />
          ))}
        </Box>
      </Stack>
    </Paper>
  );
}
