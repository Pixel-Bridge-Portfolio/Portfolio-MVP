import Link from "next/link";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import type { ServiceItem } from "@/data/services";

export default function SkillCard({ skill }: { skill: ServiceItem }) {
  const Icon = skill.icon;

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        transition: "transform 220ms ease, box-shadow 220ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 16px 28px rgba(17, 17, 17, 0.12)",
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.25 }}>
          <Icon sx={{ color: "#111111" }} fontSize="small" />
          <Typography variant="h6">{skill.name}</Typography>
        </Box>

        <Typography variant="body2" className="text-muted" sx={{ mb: 2 }}>
          {skill.description}
        </Typography>

        <Chip label={skill.deliverable} size="small" sx={{ borderRadius: 2 }} />

        <Box sx={{ mt: 2.5 }}>
          <Link href={`/work?skill=${skill.slug}`} style={{ fontWeight: 600 }}>
            See Project Examples {"->"}
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}
