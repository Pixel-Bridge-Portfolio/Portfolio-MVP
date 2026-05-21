import { Box, Container, Stack } from "@mui/material";
import MissionStatement from "@/components/about/MissionStatement";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import CoreValues from "@/components/about/CoreValues";
import BridgePhilosophy from "@/components/about/BridgePhilosophy";

export default function AboutPage() {
  return (
    <Box component="main" className="section-padding">
      <Container maxWidth="lg">
        <Stack spacing={3.5}>
          <MissionStatement />
          <JourneyTimeline />
          <CoreValues />
          <BridgePhilosophy />
        </Stack>
      </Container>
    </Box>
  );
}
