"use client";

import { featuredProjects } from "@/data/featuredProjects";
import { Box, Button, Card, CardContent, Chip, Container, Grid, Stack, Typography } from "@mui/material";

export default function FeaturedWorkGrid() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.default" }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} sx={{ mb: 5, textAlign: "center", alignItems: "center" }}>
          <Chip label="SELECTED PROJECTS" variant="outlined" size="small" />
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Featured Work
          </Typography>
          <Typography className="text-muted" sx={{ maxWidth: 700, lineHeight: 1.8 }}>
            Real product collaborations where strategy, design, and engineering moved together.
          </Typography>
        </Stack>

        <Grid container spacing={2.5}>
          {featuredProjects.map((project) => (
            <Grid size={{ xs: 12, md: 6 }} key={project.id}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  transition: "transform 200ms ease, box-shadow 200ms ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 14px 28px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack spacing={2.2}>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {project.title}
                    </Typography>

                    <Typography className="text-muted" sx={{ lineHeight: 1.8 }}>
                      {project.summary}
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {project.services.map((service) => (
                        <Chip key={service} label={service} size="small" variant="outlined" />
                      ))}
                    </Box>

                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 2,
                        p: 1.5,
                        bgcolor: "background.default",
                      }}
                    >
                      <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, mb: 0.5 }}>
                        Outcome
                      </Typography>
                      <Typography className="text-muted" sx={{ fontSize: "0.95rem" }}>
                        {project.outcome}
                      </Typography>
                    </Box>

                    <Box>
                      <Button href={project.link} variant="text" sx={{ px: 0, fontWeight: 600 }}>
                        View Case Study
                      </Button>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
