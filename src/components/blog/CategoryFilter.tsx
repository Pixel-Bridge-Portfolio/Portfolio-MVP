"use client";

import { Stack, Button, Box } from "@mui/material";

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
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        useFlexGap
        sx={{
          flexWrap: "wrap",
          py: 1,
        }}
      >
        {categories.map((category, index) => {
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
                position: "relative",
                overflow: "hidden",
                borderRadius: 999,
                textTransform: "none",
                px: 3,
                py: 1.1,
                minWidth: "fit-content",
                backdropFilter: "blur(10px)",
                transform: "translateY(0px) scale(1)",
                opacity: 0,
                animation:
                  "filterFade 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                animationDelay: `${index * 0.08}s`,
                transition:
                  "all 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
                boxShadow: isActive
                  ? "0 10px 25px rgba(0,0,0,0.12)"
                  : "none",

                "@keyframes filterFade": {
                  from: {
                    opacity: 0,
                    transform:
                      "translateY(18px) scale(0.96)",
                  },
                  to: {
                    opacity: 1,
                    transform:
                      "translateY(0px) scale(1)",
                  },
                },

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-120%",
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(120deg, transparent, rgba(255,255,255,0.25), transparent)",
                  transition: "all 0.8s ease",
                },

                "&:hover": {
                  transform:
                    "translateY(-4px) scale(1.03)",
                  boxShadow:
                    "0 16px 35px rgba(0,0,0,0.16)",
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
              {category}
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
}