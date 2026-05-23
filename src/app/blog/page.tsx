import { Box, Container, Typography } from "@mui/material";

export default function BlogPage() {
  return (
    <Box component="main" className="section-padding">
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 1.5 }}>
          Blog
        </Typography>
        <Typography className="text-muted">
          Insights page is in progress and will be finalized in the dedicated Blog task.
        </Typography>
      </Container>
    </Box>
  );
}
