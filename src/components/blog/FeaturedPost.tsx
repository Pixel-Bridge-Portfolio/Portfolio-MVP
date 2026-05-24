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
            style={{
              objectFit: "cover",
            }}
          />
        </Box>

        <Stack
          spacing={3}
          sx={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Chip
            label={`Featured • ${category}`}
            color="primary"
            sx={{
              width: "fit-content",
            }}
          />

          <Typography
  variant="h2"
  sx={{
    lineHeight: 1.1,
    maxWidth: 520,
  }}
>
            {title}
          </Typography>

          <Typography
            variant="body1"
            className="text-muted "
          >
            {excerpt}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: "center" }}
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
              •
            </Typography>

            <Typography
              variant="caption"
              className="text-muted"
            >
              {readTime}
            </Typography>
          </Stack>

          <Box>
            <Link href={`/blog/${slug}`}>
              <PrimaryButton>
                Read Article
              </PrimaryButton>
            </Link>
          </Box>
        </Stack>
      </Stack>
    </SurfaceCard>
  );
}