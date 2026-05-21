import { Grid } from "@mui/material";
import { services } from "@/data/services";
import SkillCard from "./SkillCard";

export default function SkillGrid() {
  return (
    <Grid container spacing={3}>
      {services.map((skill) => (
        <Grid key={skill.id} size={{ xs: 12, md: 6, lg: 4 }}>
          <SkillCard skill={skill} />
        </Grid>
      ))}
    </Grid>
  );
}
