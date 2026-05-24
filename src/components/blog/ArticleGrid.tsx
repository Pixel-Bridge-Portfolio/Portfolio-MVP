import { Grid } from "@mui/material";

import ArticleCard from "@/components/blog/ArticleCard";

import { BlogPost } from "@/data/blog";

type ArticleGridProps = {
  posts: BlogPost[];
};

export default function ArticleGrid({
  posts,
}: ArticleGridProps) {
  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
        <Grid
          size={{ xs: 12, md: 6 }}
          key={post.slug}
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
        </Grid>
      ))}
    </Grid>
  );
}
