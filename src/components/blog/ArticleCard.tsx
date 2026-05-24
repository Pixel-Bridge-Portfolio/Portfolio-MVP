import Image from "next/image";
import Link from "next/link";
import { Stack, Typography, Chip, Box } from "@mui/material";

import SurfaceCard from "@/components/common/SurfaceCard";
import PrimaryButton from "@/components/common/PrimaryButton";

type ArticleCardProps = {
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  slug: string;
};

export default function ArticleCard({
  title,
  excerpt,
  category,
  coverImage,
  publishedAt,
  readTime,
  slug,
}: ArticleCardProps) {
  return (
    <SurfaceCard
      sx={{
        height: "100%",
        transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
        transform: "translateY(0px)",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
        },
        "&:hover .article-image": {
          transform: "scale(1.08)",
        },
        "&:hover .article-overlay": {
          opacity: 1,
        },
        "&:hover .article-title": {
          transform: "translateX(6px)",
        },
        "&:hover .article-button": {
          transform: "translateX(4px)",
        },
      }}
    >
      <Stack spacing={3}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: {
              xs: 200,
              md: 220,
            },
            overflow: "hidden",
            borderRadius: 3,
          }}
        >
          <Image
            src={coverImage}
            alt={title}
            fill
            className="article-image"
            style={{
              objectFit: "cover",
              transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />

          <Box
            className="article-overlay"
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.05))",
              opacity: 0,
              transition: "opacity 0.5s ease",
            }}
          />
        </Box>

        <Stack spacing={2}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 1,
              opacity: 0,
              transform: "translateY(14px)",
              animation: "fadeUp 0.7s ease forwards",
              animationDelay: "0.1s",
              "@keyframes fadeUp": {
                from: {
                  opacity: 0,
                  transform: "translateY(14px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0px)",
                },
              },
            }}
          >
            <Chip
              label={category}
              color="primary"
              size="small"
              sx={{
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />

            <Typography variant="caption" className="text-muted">
              {publishedAt}
            </Typography>

            <Typography variant="caption" className="text-muted">
              -
            </Typography>

            <Typography variant="caption" className="text-muted">
              {readTime}
            </Typography>
          </Box>

          <Typography
            variant="h4"
            className="article-title"
            sx={{
              lineHeight: 1.2,
              fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
              transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
              opacity: 0,
              transform: "translateY(18px)",
              animation: "fadeUpTitle 0.8s ease forwards",
              animationDelay: "0.2s",
              "@keyframes fadeUpTitle": {
                from: {
                  opacity: 0,
                  transform: "translateY(18px)",
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
              transform: "translateY(18px)",
              animation: "fadeUpExcerpt 0.85s ease forwards",
              animationDelay: "0.3s",
              "@keyframes fadeUpExcerpt": {
                from: {
                  opacity: 0,
                  transform: "translateY(18px)",
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

          <Box
            sx={{
              opacity: 0,
              transform: "translateY(18px)",
              animation: "fadeUpButton 0.9s ease forwards",
              animationDelay: "0.4s",
              "@keyframes fadeUpButton": {
                from: {
                  opacity: 0,
                  transform: "translateY(18px)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0px)",
                },
              },
            }}
          >
            <PrimaryButton
              component={Link}
              href={`/blog/${slug}`}
              className="article-button"
              sx={{
                transition: "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              Read More
            </PrimaryButton>
          </Box>
        </Stack>
      </Stack>
    </SurfaceCard>
  );
}