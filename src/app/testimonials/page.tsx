
"use client";

import { useEffect, useState } from "react";

import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const testimonials = [
  {
    id: 1,
    quote:
      "An exceptional experience from start to finish. The final product exceeded expectations.",
    name: "Sarah Johnson",
    company: "Nova Studio",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Beautiful design system and extremely clean frontend execution. Highly recommended.",
    name: "Michael Chen",
    company: "Pixel Labs",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Fast communication, modern UI, and polished animations throughout the project.",
    name: "Emily Carter",
    company: "Visionary Tech",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
  },
];

const clientLogos = [
  "Nova Studio",
  "Pixel Labs",
  "Visionary Tech",
  "Northstar",
  "Luma Agency",
  "Vertex",
];

const videos = [
  {
    id: 1,
    title: "Client Success Story",
  },
  {
    id: 2,
    title: "Product Experience Review",
  },
  {
    id: 3,
    title: "Brand Transformation",
  },
];

export default function TestimonialsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          py: {
            xs: 10,
            md: 14,
          },
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            spacing={3}
            sx={{
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.8rem",
                  sm: "4rem",
                  md: "5rem",
                },
                fontWeight: 800,
                lineHeight: 1,
                maxWidth: "900px",
              }}
            >
              Trusted By Modern Brands
            </Typography>

            <Typography
              sx={{
                color: "#666666",
                fontSize: {
                  xs: "1rem",
                  md: "1.2rem",
                },
                maxWidth: "700px",
                lineHeight: 1.8,
              }}
            >
              Real feedback from founders, startups, and creative teams who
              trusted the process.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Testimonial Slider */}
      <Box
        sx={{
          py: {
            xs: 10,
            md: 14,
          },
        }}
      >
        <Container maxWidth="md">
          <Box
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            sx={{
              position: "relative",
              border: "1px solid #eaeaea",
              borderRadius: "32px",
              p: {
                xs: 4,
                md: 8,
              },
              backgroundColor: "#ffffff",
            }}
          >
            <Stack
              spacing={4}
              sx={{
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Avatar
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].name}
                sx={{
                  width: 88,
                  height: 88,
                }}
              />

              <Stack direction="row" spacing={0.5}>
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <StarRoundedIcon key={i} />
                ))}
              </Stack>

              <Typography
                sx={{
                  fontSize: {
                    xs: "1.2rem",
                    md: "1.7rem",
                  },
                  lineHeight: 1.8,
                  fontWeight: 500,
                }}
              >
                “{testimonials[activeIndex].quote}”
              </Typography>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                  }}
                >
                  {testimonials[activeIndex].name}
                </Typography>

                <Typography
                  sx={{
                    color: "#666666",
                  }}
                >
                  {testimonials[activeIndex].company}
                </Typography>
              </Box>

              {/* Controls */}
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  alignItems: "center",
                }}
              >
                <IconButton
                  aria-label="Previous testimonial"
                  onClick={prevSlide}
                  sx={{
                    border: "1px solid #eaeaea",
                  }}
                >
                  <ArrowBackIosNewRoundedIcon fontSize="small" />
                </IconButton>

                <Stack direction="row" spacing={1}>
                  {testimonials.map((_, index) => (
                    <Box
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Go to testimonial ${index + 1}`}
                      sx={{
                        width: activeIndex === index ? 26 : 10,
                        height: 10,
                        borderRadius: "999px",
                        backgroundColor:
                          activeIndex === index ? "#000000" : "#d9d9d9",
                        transition: "0.3s ease",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </Stack>

                <IconButton
                  aria-label="Next testimonial"
                  onClick={nextSlide}
                  sx={{
                    border: "1px solid #eaeaea",
                  }}
                >
                  <ArrowForwardIosRoundedIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Client Logo Wall */}
      <Box
        sx={{
          py: {
            xs: 8,
            md: 10,
          },
          borderTop: "1px solid #f5f5f5",
          borderBottom: "1px solid #f5f5f5",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 6,
            }}
          >
            Trusted Clients
          </Typography>

          <Grid container spacing={4}>
            {clientLogos.map((logo) => (
              // <Grid item xs={6} sm={4} md={2} key={logo}>
                             <Grid
  key={logo}
  size={{
    xs: 6,
    sm: 4,
    md: 2,
  }}
>

                <Box
                  sx={{
                    border: "1px solid #eaeaea",
                    borderRadius: "20px",
                    py: 4,
                    textAlign: "center",
                    filter: "grayscale(100%)",
                    opacity: 0.7,
                    transition: "0.3s ease",

                    "&:hover": {
                      filter: "grayscale(0%)",
                      opacity: 1,
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    {logo}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Video Testimonials */}
      <Box
        sx={{
          py: {
            xs: 10,
            md: 14,
          },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              mb: 8,
            }}
          >
            Video Testimonials
          </Typography>

          <Grid container spacing={4}>
            {videos.map((video) => (
              // <Grid item xs={12} md={4} key={video.id}>
                  <Grid
  key={video.id}
  size={{
    xs: 12,
    md: 4,
  }}
>
                <Box
                  sx={{
                    borderRadius: "28px",
                    overflow: "hidden",
                    border: "1px solid #eaeaea",
                    backgroundColor: "#ffffff",
                    transition: "0.3s ease",

                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 240,
                      background:
                        "linear-gradient(135deg, #f5f5f5 0%, #eaeaea 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#555555",
                      }}
                    >
                      Video Placeholder
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 3,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      {video.title}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}