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
    <SurfaceCard sx={{ height: "100%" }}>
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
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Stack spacing={2}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Chip label={category} color="primary" size="small" />

            <Typography variant="caption" className="text-muted">
              {publishedAt}
            </Typography>

            <Typography variant="caption" className="text-muted">
              •
            </Typography>

            <Typography variant="caption" className="text-muted">
              {readTime}
            </Typography>
          </Box>

          <Typography
  variant="h4"
  sx={{
    lineHeight: 1.2,
  }}
>
            {title}
          </Typography>

          <Typography variant="body1" className="text-muted">
            {excerpt}
          </Typography>

          <Box>
            <PrimaryButton
              component={Link}
              href={`/blog/${slug}`}
            >
              Read More
            </PrimaryButton>
          </Box>
        </Stack>
      </Stack>
    </SurfaceCard>
  );
}