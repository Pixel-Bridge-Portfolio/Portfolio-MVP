"use client";

import { Stack, Button } from "@mui/material";

type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <Stack
      direction="row"
      spacing={2}
      useFlexGap
      sx={{
        flexWrap: "wrap",
      }}
    >
      {categories.map((category) => {
        const isActive =
          activeCategory === category;

        return (
          <Button
            key={category}
            variant={
              isActive
                ? "contained"
                : "outlined"
            }
            color="primary"
            onClick={() =>
              onChange(category)
            }
            sx={{
              borderRadius: 999,
              textTransform: "none",
              px: 3,
            }}
          >
            {category}
          </Button>
        );
      })}
    </Stack>
  );
}