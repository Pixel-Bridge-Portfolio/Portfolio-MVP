import Link from "next/link";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";

type Skill = {
  id: number;
  slug: string;
  name: string;
  description: string;
  deliverable: string;
  icon: React.ElementType;
};

export default function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <Card
      sx={{
        transition: "0.3s",
        "&:hover": { transform: "scale(1.02)", boxShadow: 5 },
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Icon />
          <Typography variant="h6">{skill.name}</Typography>
        </Box>

        <Typography variant="body2" sx={{ mb: 2 }}>
          {skill.description}
        </Typography>

        <Chip label={skill.deliverable} size="small" />

        <Box sx={{ mt: 2 }}>
          <Link href={`/work?skill=${skill.slug}`}>
            See Project Examples →
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}