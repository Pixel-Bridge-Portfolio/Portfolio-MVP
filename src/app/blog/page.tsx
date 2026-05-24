"use client";

import { useMemo, useState } from "react";

import {
  Box,
  Stack,
  Typography,
} from "@mui/material";

import Section from "@/components/common/Section";

import FeaturedPost from "@/components/blog/FeaturedPost";
import ArticleGrid from "@/components/blog/ArticleGrid";
import CategoryFilter from "@/components/blog/CategoryFilter";
import NewsletterSection from "@/components/blog/NewsletterSection";

import {
  posts,
  categories,
} from "@/data/blog";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const featuredPost = posts.find(
    (post) => post.featured
  );

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return posts;
    }

    return posts.filter(
      (post) =>
        post.category === activeCategory
    );
  }, [activeCategory]);

  if (!featuredPost) {
    return null;
  }

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
      }}
    >
      <Section>
        <Stack spacing={8}>
          <Stack
            spacing={3}
            sx={{
              maxWidth: 760,
            }}
          >
            <Typography variant="h1">
              Insights & Articles
            </Typography>

            <Typography
              variant="body1"
              className="text-muted"
            >
              Thoughts on design,
              development, AI workflows,
              and building modern digital
              experiences.
            </Typography>
          </Stack>

          <FeaturedPost
            title={featuredPost.title}
            excerpt={featuredPost.excerpt}
            category={featuredPost.category}
            coverImage={featuredPost.coverImage}
            publishedAt={
              featuredPost.publishedAt
            }
            readTime={featuredPost.readTime}
            slug={featuredPost.slug}
          />

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          <ArticleGrid
            posts={filteredPosts}
          />

          <NewsletterSection />
        </Stack>
      </Section>
    </Box>
  );
}
import { Box, Container, Typography } from "@mui/material";

export default function BlogPage() {
  return (
    <Box component="main" className="section-padding">
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 1.5 }}>
          Blog
        </Typography>
        <Typography className="text-muted">
          Insights page is in progress and will be finalized in the dedicated Blog task.
        </Typography>
      </Container>
    </Box>
  );
}
