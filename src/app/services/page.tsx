import { Box, Stack, Typography } from "@mui/material";
import SkillGrid from "@/components/services/SkillGrid";

export default function ServicesPage() {
  return (
    <Box
      component="main"
      className="section-padding"
      sx={{ backgroundColor: "background.default", color: "text.primary" }}
    >
      <Stack spacing={5}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", px: { xs: 2, sm: 3 } }}>
          <Stack spacing={1.5} sx={{ width: "100%", maxWidth: 760, textAlign: "center" }}>
            <Typography variant="h2">Our Services</Typography>
            <Typography variant="body1" className="text-muted">
              We cover nine connected disciplines to move projects from idea to
              execution with one collaborative team.
            </Typography>
          </Stack>
        </Box>

        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", px: { xs: 2, sm: 3, lg: 4 } }}>
          <Box sx={{ width: "100%", maxWidth: 1120 }}>
            <SkillGrid />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
