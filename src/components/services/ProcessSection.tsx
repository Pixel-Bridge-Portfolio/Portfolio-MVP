"use client";

import { Box, Grid, Paper, Typography } from "@mui/material";

type ProcessStep = {
  title: string;
  desc: string;
};

const steps: ProcessStep[] = [
  {
    title: "Discovery",
    desc: "We learn your business goals, audience, and constraints to define the right path.",
  },
  {
    title: "Design",
    desc: "We shape clear user journeys and interfaces that match your brand and priorities.",
  },
  {
    title: "Develop",
    desc: "We implement reliable, scalable solutions with clean code and practical iteration.",
  },
  {
    title: "Deliver",
    desc: "We test, launch, and support the product to ensure long-term quality and outcomes.",
  },
];

export default function ProcessSection() {
  return (
    <Box className="section-padding" sx={{ px: 2 }}>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography
            sx={{
              letterSpacing: "0.12em",
              color: "text.secondary",
              textTransform: "uppercase",
              mb: 1.5,
              fontSize: "0.78rem",
              fontWeight: 600,
            }}
          >
            Our Process
          </Typography>
          <Typography variant="h2" sx={{ color: "var(--pb-black)" }}>
            How We Work
          </Typography>
          <Typography
            variant="body1"
            className="text-muted"
            sx={{ maxWidth: 700, mx: "auto", mt: 1.75 }}
          >
            A transparent, step-by-step workflow that turns ideas into practical
            digital outcomes.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {steps.map((step, index) => (
            <Grid key={step.title} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid var(--pb-border)",
                  height: "100%",
                  backgroundColor: "var(--pb-white)",
                  textAlign: "left",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 14px 24px rgba(17, 17, 17, 0.08)",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "var(--pb-black-soft)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    mb: 1.25,
                  }}
                >
                  Step {index + 1}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1.1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
