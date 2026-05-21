
"use client";

import { Box, Container, Grid, Typography } from "@mui/material";

const stats = [
  {
    label: "Projects",
    value: "120+",
  },
  {
    label: "Clients",
    value: "40+",
  },
  {
    label: "Years",
    value: "6",
  },
  {
    label: "Disciplines",
    value: "12",
  },
];

export default function StatsBar() {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {stats.map((stat) => (
            <Grid size={{ xs: 6, md: 3}} key={stat.label}>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>

                <Typography
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}