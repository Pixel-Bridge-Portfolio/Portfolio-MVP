
"use client";

import { featuredProjects } from "@/data/featuredProjects";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

export default function FeaturedWorkGrid() {
  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: "center",
          }}
        >
          Featured Work
        </Typography>

        <Grid container spacing={4}>
          {featuredProjects.map((project) => (
            <Grid size={{ xs: 12, sm: 6 }} key={project.id}>
              <Card
                sx={{
                  borderRadius: 5,
                  overflow: "hidden",
                  border: "1px solid #eaeaea",
                  transition: "0.3s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <CardActionArea href={project.link}>
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      height: 260,
                      objectFit: "cover",
                    }}
                  />

                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      {project.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}