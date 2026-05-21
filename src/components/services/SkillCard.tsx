import Link from "next/link";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  type SxProps,
  type Theme,
} from "@mui/material";

type Skill = {
  id: number;
  slug: string;
  name: string;
  description: string;
  deliverable: string;
  icon: React.ElementType;
};

const cardStyles: SxProps<Theme> = {
  height: "100%",
  borderRadius: 3,
  transition: "transform 220ms ease, box-shadow 220ms ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 16px 28px rgba(17, 17, 17, 0.12)",
  },
};

export default function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <Card sx={cardStyles}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.25 }}>
          <Icon style={{ color: "#111111" }} />
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
