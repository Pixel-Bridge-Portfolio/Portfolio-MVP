import Link from "next/link";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import type { ServiceItem } from "@/data/services";
import { motionTokens, motionTransition } from "@/lib/animations";

export default function SkillCard({ skill }: { skill: ServiceItem }) {
  const Icon = skill.icon;

  return (
    <Card
      className="hover-lift"
      sx={{
        height: "100%",
        borderRadius: 3,
        transition: motionTransition.card,
        "&:hover": {
          transform: `translateY(-${motionTokens.distance.hoverY}px)`,
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
