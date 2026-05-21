import { Box, Container, Stack, Typography } from "@mui/material";
import SkillGrid from "@/components/services/SkillGrid";
import ProcessSection from "@/components/services/ProcessSection";

export default function ServicesPage() {
  return (
    <Box component="main" className="section-padding">
      <Container maxWidth="lg">
        <Stack spacing={5}>
          <Box className="reveal" sx={{ width: "100%", display: "grid", placeItems: "center" }}>
            <Stack spacing={1.5} sx={{ width: "100%", maxWidth: 760, alignItems: "center" }}>
              <Typography variant="h2" sx={{ width: "100%", textAlign: "center" }}>
                Our Services
              </Typography>
              <Typography
                variant="body1"
                className="text-muted"
                sx={{
                  width: "100%",
                  maxWidth: 720,
                  textAlign: "center",
                  lineHeight: 1.7,
                }}
              >
                We cover nine connected disciplines to move projects from idea to
                execution with one collaborative team.
              </Typography>
            </Stack>
          </Box>
          <SkillGrid />
        </Stack>
      </Container>
      <ProcessSection />
    </Box>
  );
}
