import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import SurfaceCard from "@/components/common/SurfaceCard";
import PrimaryButton from "@/components/common/PrimaryButton";

type FeaturedPostProps = {
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  slug: string;
};

export default function FeaturedPost({
  title,
  excerpt,
  category,
  coverImage,
  publishedAt,
  readTime,
  slug,
}: FeaturedPostProps) {
  return (
    <SurfaceCard
      sx={{
        overflow: "hidden",
        borderRadius: 4,
        position: "relative",
        transform: "translateY(0px)",
        transition:
          "all 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
        opacity: 0,
        animation:
          "featuredReveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",

        "@keyframes featuredReveal": {
          from: {
            opacity: 0,
            transform: "translateY(40px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },

        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
        },

        "&:hover .featured-image": {
          transform: "scale(1.08)",
        },

        "&:hover .featured-overlay": {
          opacity: 1,
        },

        "&:hover .featured-title": {
          transform: "translateX(6px)",
        },

        "&:hover .featured-button": {
          transform: "translateX(5px)",
        },
      }}
    >
      <Stack
        spacing={4}
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: {
              xs: 260,
              md: 420,
            },
            flex: 1,
            overflow: "hidden",
            borderRadius: 3,
          }}
        >
          <Image
            src={coverImage}
            alt={title}
            fill
            className="featured-image"
            style={{
              objectFit: "cover",
              transition:
                "transform 1s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />

          <Box
            className="featured-overlay"
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.08))",
              opacity: 0,
              transition: "opacity 0.5s ease",
            }}
          />
        </Box>

        <Stack
          spacing={3}
          sx={{
            flex: 1,
            p: 4,
            justifyContent: "center",
          }}
        >
          <Chip
            label={`Featured - ${category}`}
            color="primary"
            sx={{
              width: "fit-content",
              opacity: 0,
              transform: "translateY(20px)",
              animation:
                "fadeChip 0.7s ease forwards",
              animationDelay: "0.2s",
              transition: "all 0.35s ease",

              "@keyframes fadeChip": {
                from: {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0px)",
                },
              },

              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />

          <Typography
            variant="h2"
            className="featured-title"
            sx={{
              lineHeight: 1.1,
              maxWidth: 520,
              fontSize: {
                xs: "1.65rem",
                sm: "2rem",
                md: "2.75rem",
              },
              transition:
                "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
              opacity: 0,
              transform: "translateY(30px)",
              animation:
                "fadeTitle 0.85s ease forwards",
              animationDelay: "0.3s",

              "@keyframes fadeTitle": {
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
            {title}
          </Typography>

          <Typography
            variant="body1"
            className="text-muted"
            sx={{
              opacity: 0,
              transform: "translateY(24px)",
              animation:
                "fadeExcerpt 0.9s ease forwards",
              animationDelay: "0.45s",

              "@keyframes fadeExcerpt": {
                from: {
                  opacity: 0,
                  transform: "translateY(24px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0px)",
                },
              },
            }}
          >
            {excerpt}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            sx={{
              alignItems: "center",
              opacity: 0,
              transform: "translateY(20px)",
              animation:
                "fadeMeta 0.9s ease forwards",
              animationDelay: "0.55s",

              "@keyframes fadeMeta": {
                from: {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0px)",
                },
              },
            }}
          >
            <Typography
              variant="caption"
              className="text-muted"
            >
              {publishedAt}
            </Typography>

            <Typography
              variant="caption"
              className="text-muted"
            >
              -
            </Typography>

            <Typography
              variant="caption"
              className="text-muted"
            >
              {readTime}
            </Typography>
          </Stack>

          <Box
            sx={{
              opacity: 0,
              transform: "translateY(22px)",
              animation:
                "fadeButton 1s ease forwards",
              animationDelay: "0.7s",

              "@keyframes fadeButton": {
                from: {
                  opacity: 0,
                  transform: "translateY(22px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0px)",
                },
              },
            }}
          >
            <Link href={`/blog/${slug}`}>
              <PrimaryButton
                className="featured-button"
                sx={{
                  transition:
                    "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                Read Article
              </PrimaryButton>
            </Link>
          </Box>
        </Stack>
      </Stack>
    </SurfaceCard>
  );
}