import { coreValues } from "@/data/about";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";

export default function CoreValues() {
  return (
    <Paper elevation={0} className="reveal" sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, border: "1px solid", borderColor: "divider" }}>
      <Stack spacing={1.5} sx={{ mb: 4, textAlign: "center" }}>
        <Box><Chip label="CORE VALUES" size="small" variant="outlined" /></Box>
        <Typography variant="h3">Principles That Shape Our Work</Typography>
      </Stack>

      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }, gap: 2 }}>
        {coreValues.map((value) => (
          <Paper key={value.title} elevation={0} sx={{ p: 2.5, borderRadius: 3, border: "1px solid", borderColor: "divider", bgcolor: "background.default" }}>
            <Box sx={{ width: 42, height: 42, borderRadius: "999px", border: "1px solid", borderColor: "divider", display: "grid", placeItems: "center", mb: 1.5, fontSize: "0.7rem", fontWeight: 700 }}>
              {value.label}
            </Box>
            <Typography variant="h6" sx={{ mb: 1 }}>{value.title}</Typography>
            <Typography className="text-muted" sx={{ fontSize: "0.95rem", lineHeight: 1.7 }}>{value.description}</Typography>
          </Paper>
        ))}
      </Box>
    </Paper>
  );
}
