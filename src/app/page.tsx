import { Box, Stack, Typography } from "@mui/material";
import PrimaryButton from "@/components/common/PrimaryButton";
import Section from "@/components/common/Section";
import SurfaceCard from "@/components/common/SurfaceCard";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      <Section>
        <Stack spacing={4}>
          <Typography variant="h1">We bridge code and creativity.</Typography>
          <Typography variant="body1" className="text-muted" sx={{ maxWidth: 760 }}>
            Pixel Bridge is a multidisciplinary team portfolio MVP built with
            Next.js and MUI. This starter setup includes the global design
            system and reusable UI primitives for the upcoming page tasks.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <PrimaryButton href="/work">View Our Work</PrimaryButton>
            <PrimaryButton variant="outlined" href="/contact">
              Let&apos;s Talk
            </PrimaryButton>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            <SurfaceCard sx={{ minWidth: 220 }}>
              <Typography variant="h3">9 Disciplines</Typography>
              <Typography variant="body1" className="text-muted">
                Backend, Frontend, Design, Branding, Video, Comms, Social,
                AI, and Product Design.
              </Typography>
            </SurfaceCard>
            <SurfaceCard sx={{ minWidth: 220 }}>
              <Typography variant="h3">Reusable UI Base</Typography>
              <Typography variant="body1" className="text-muted">
                Shared section, button, and card components are ready for all
                feature teams.
              </Typography>
            </SurfaceCard>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
}
