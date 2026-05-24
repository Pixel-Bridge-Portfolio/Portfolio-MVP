import {
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";

import SurfaceCard from "@/components/common/SurfaceCard";
import PrimaryButton from "@/components/common/PrimaryButton";

export default function NewsletterSection() {
  return (
    <SurfaceCard
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        opacity: 0,
        transform: "translateY(40px)",
        animation:
          "newsletterReveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",

        "@keyframes newsletterReveal": {
          from: {
            opacity: 0,
            transform: "translateY(40px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },

        "&::before": {
          content: '""',
          position: "absolute",
          top: "-30%",
          right: "-10%",
          width: 260,
          height: 260,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08), transparent)",
          animation: "floatGlow 8s ease-in-out infinite",
        },

        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-35%",
          left: "-10%",
          width: 240,
          height: 240,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05), transparent)",
          animation: "floatGlowTwo 10s ease-in-out infinite",
        },

        "@keyframes floatGlow": {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(18px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },

        "@keyframes floatGlowTwo": {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-18px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      }}
    >
      <Stack
        spacing={4}
        sx={{
          textAlign: "center",
          py: {
            xs: 2,
            md: 4,
          },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Stack
          spacing={2}
          sx={{
            opacity: 0,
            transform: "translateY(25px)",
            animation:
              "newsletterText 0.9s ease forwards",
            animationDelay: "0.2s",

            "@keyframes newsletterText": {
              from: {
                opacity: 0,
                transform: "translateY(25px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0px)",
              },
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              transition:
                "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            Join Our Newsletter
          </Typography>

          <Typography
            variant="body1"
            className="text-muted"
            sx={{
              maxWidth: 620,
              mx: "auto",
            }}
          >
            Monthly insights on design,
            development, AI workflows,
            and modern digital products.
          </Typography>
        </Stack>

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
          sx={{
            maxWidth: 620,
            mx: "auto",
            width: "100%",
            opacity: 0,
            transform: "translateY(30px)",
            animation:
              "newsletterForm 1s ease forwards",
            animationDelay: "0.45s",

            "@keyframes newsletterForm": {
              from: {
                opacity: 0,
                transform: "translateY(30px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0px)",
              },
            },
          }}
        >
          <Box
            sx={{
              flex: 1,
              transition:
                "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",

              "&:hover": {
                transform: "translateY(-2px)",
              },
            }}
          >
            <TextField
              fullWidth
              placeholder="Enter your email"
              type="email"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 1.5,
                  transition:
                    "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",

                  "&:hover": {
                    transform: "scale(1.01)",
                  },

                  "&.Mui-focused": {
                    transform: "scale(1.015)",
                  },
                },
              }}
            />
          </Box>

          <PrimaryButton
            sx={{
              py: 1,
              position: "relative",
              overflow: "hidden",
              transition:
                "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",

              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-120%",
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)",
                transition: "all 0.8s ease",
              },

              "&:hover": {
                transform:
                  "translateY(-4px) scale(1.03)",
                boxShadow:
                  "0 18px 40px rgba(0,0,0,0.18)",
              },

              "&:hover::before": {
                left: "120%",
              },

              "&:active": {
                transform:
                  "translateY(-1px) scale(0.98)",
              },
            }}
          >
            Subscribe
          </PrimaryButton>
        </Stack>
      </Stack>
    </SurfaceCard>
  );
}