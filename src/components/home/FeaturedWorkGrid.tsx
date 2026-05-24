import Link from "next/link";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import { workDetails } from "@/data/workDetails";

export default function FeaturedWorkGrid() {
  const featuredProjects = workDetails.slice(0, 4);

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">

        <Stack
          spacing={2.5}
          sx={{
            mb: { xs: 6, md: 8 },
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Chip
            label="FEATURED PROJECTS"
            variant="outlined"
            size="small"
            sx={{
              px: 1,
              height: 32,
              borderRadius: "999px",
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              maxWidth: 850,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              fontSize: {
                xs: "2.3rem",
                md: "3.6rem",
              },
            }}
          >
            Selected Creative Work & Digital Experiences
          </Typography>

          <Typography
            className="text-muted"
            sx={{
              maxWidth: 760,
              lineHeight: 1.9,
              fontSize: {
                xs: "1rem",
                md: "1.08rem",
              },
            }}
          >
            A collection of branding projects, websites, and digital products
            focused on modern visuals, user experience, and creative problem
            solving.
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {featuredProjects.map((project) => (
            <Grid
              key={project.slug}
              size={{ xs: 12, md: 6 }}
            >
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  overflow: "hidden",
                  borderRadius: "28px",
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "background.paper",
                  transition:
                    "transform 250ms ease, box-shadow 250ms ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={project.coverImage}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: {
                      xs: 240,
                      md: 300,
                    },
                    objectFit: "cover",
                  }}
                />

                <CardContent
                  sx={{
                    p: {
                      xs: 3,
                      md: 4,
                    },
                  }}
                >
                  <Stack spacing={3}>

                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 1.5,
                          lineHeight: 1.2,
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        className="text-muted"
                        sx={{
                          lineHeight: 1.9,
                          fontSize: "1rem",
                        }}
                      >
                        {project.shortDescription}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                      }}
                    >
                      {project.stack.map((item) => (
                        <Chip
                          key={item}
                          label={item}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderRadius: "999px",
                          }}
                        />
                      ))}
                    </Box>

                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: "20px",
                        p: 2.5,
                        bgcolor: "background.default",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          mb: 1,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "text.secondary",
                        }}
                      >
                        Result
                      </Typography>

                      <Typography
                        className="text-muted"
                        sx={{
                          fontSize: "0.98rem",
                          lineHeight: 1.9,
                        }}
                      >
                        {project.result}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        pt: 1,
                        display: "flex",
                        alignItems: "center",
                      }}>
                      <Link
                        href={`/work/${project.slug}`}
                        className="group inline-flex items-center gap-2 rounded-full border border-black bg-white px-5 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-black/20">
                        <span className="transition-colors duration-300 group-hover:text-white">
                          View Case Study
                        </span>
                        <span className="flex items-center justify-center text-black transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                          →
                        </span>
                      </Link>
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