import { Box, Container, Typography } from "@mui/material";

export default function TeamPage() {
  return (
    <Box component="main" className="section-padding">
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 1.5 }}>
          Team
        </Typography>
        <Typography className="text-muted">
          Team page is in progress and will be finalized in the dedicated Team task.
        </Typography>
      </Container>
    </Box>
  );
}
