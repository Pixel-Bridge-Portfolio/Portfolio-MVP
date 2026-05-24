import { Grid, Box } from "@mui/material";

import ArticleCard from "@/components/blog/ArticleCard";

import { BlogPost } from "@/data/blog";

type ArticleGridProps = {
  posts: BlogPost[];
};

export default function ArticleGrid({
  posts,
}: ArticleGridProps) {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <Grid
            size={{ xs: 12, md: 6 }}
            key={post.slug}
            sx={{
              opacity: 0,
              transform: "translateY(40px) scale(0.98)",
              animation: "gridFadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
              animationDelay: `${index * 0.12}s`,
              "@keyframes gridFadeUp": {
                from: {
                  opacity: 0,
                  transform: "translateY(40px) scale(0.98)",
                },
                to: {
                  opacity: 1,
                  transform: "translateY(0px) scale(1)",
                },
              },
            }}
          >
            <Box
              sx={{
                height: "100%",
                transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <ArticleCard
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                coverImage={post.coverImage}
                publishedAt={post.publishedAt}
                readTime={post.readTime}
                slug={post.slug}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}