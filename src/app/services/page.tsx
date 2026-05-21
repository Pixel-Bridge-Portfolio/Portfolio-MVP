import { Box, Container, Stack, Typography } from "@mui/material";
import SkillGrid from "@/components/services/SkillGrid";

export default function ServicesPage() {
  return (
    <Box component="main" className="section-padding">
      <Container maxWidth="lg">
        <Stack spacing={5}>
          <Stack spacing={1.5} sx={{ maxWidth: 760, mx: "auto", textAlign: "center" }}>
            <Typography variant="h2">Our Services</Typography>
            <Typography variant="body1" className="text-muted">
              We cover nine connected disciplines to move projects from idea to
              execution with one collaborative team.
            </Typography>
          </Stack>
          <SkillGrid />
        </Stack>
      </Container>
    </Box>
  );
}
