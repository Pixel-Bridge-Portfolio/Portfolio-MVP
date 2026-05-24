
"use client";

import { skills } from "@/data/skills";

import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";

export default function SkillCarousel() {
  return (
    <Box
      sx={{
        paddingTop: "80px",
        paddingBottom: "80px",
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Core Skills
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            paddingBottom: "16px",
            scrollbarWidth: "none",

            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {skills.map((skill) => (
            <Card
              key={skill.id}
              sx={{
                minWidth: "280px",
                borderRadius: "20px",
                border: "1px solid #eaeaea",
                backgroundColor: "#ffffff",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",

                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                },
              }}
            >
              <CardContent>
                <Stack spacing={2}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    {skill.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#666666",
                    }}
                  >
                    {skill.description}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}