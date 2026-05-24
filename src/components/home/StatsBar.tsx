import { Box, Container, Grid, Paper, Typography } from "@mui/material";

const stats = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Disciplines", value: "9" },
  { label: "Years", value: "3+" },
  { label: "Clients", value: "20+" },
];

export default function StatsBar() {
  return (
    <Box sx={{ py: { xs: 4, md: 6 }, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            border: "1px solid",
            borderColor: "divider",
            p: { xs: 2, md: 3 },
            background:
              "linear-gradient(135deg, rgba(17,17,17,0.04), rgba(17,17,17,0.01))",
          }}
        >
          <Grid container spacing={2}>
            {stats.map((stat) => (
              <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    p: { xs: 2, md: 2.5 },
                    backgroundColor: "background.paper",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
                    {stat.value}
                  </Typography>
                  <Typography className="text-muted" sx={{ fontSize: "0.95rem" }}>
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
