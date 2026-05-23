import { Box, Container, Typography } from "@mui/material";

export default function WorkPage() {
  return (
    <Box component="main" className="section-padding">
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 1.5 }}>
          Work
        </Typography>
        <Typography className="text-muted">
          Portfolio page is in progress and will be finalized in the dedicated Work task.
        </Typography>
      </Container>
    </Box>
  );
}
