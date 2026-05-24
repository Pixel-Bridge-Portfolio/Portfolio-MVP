
"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 12, md: 20 },
        backgroundColor: "#fff",
      }}
    >
      {/* Background Grid */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 90%)",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack
          spacing={4}
          sx={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.2rem", sm: "3rem", md: "5.5rem" },
              fontWeight: 800,
              lineHeight: 1,
              color: "#000",
              maxWidth: 900,
            }}
          >
            Building Minimal Digital Experiences That Feel Premium
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "#555",
              maxWidth: 700,
              lineHeight: 1.8,
            }}
          >
            Creative developer crafting modern interfaces, scalable systems,
            and elegant interactions for ambitious brands.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: { xs: "100%", sm: "auto" } }}>
            <Button
              href="/work"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                px: 4,
                py: 1.5,
                borderRadius: "999px",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  backgroundColor: "#222",
                },
              }}
            >
              View Work
            </Button>


            <Button
              href="/testimonials"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                px: 4,
                py: 1.5,
                borderRadius: "999px",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  backgroundColor: "#222",
                },
              }}
            >
               View Testimonials
            </Button>

            <Button
              href="/contact"
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#000",
                color: "#000",
                px: 4,
                py: 1.5,
                borderRadius: "999px",
                width: { xs: "100%", sm: "auto" },
                "&:hover": {
                  borderColor: "#000",
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
