import { Box } from "@mui/material";
import { services } from "@/data/services";
import SkillCard from "./SkillCard";

export default function SkillGrid() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 340px))",
        justifyContent: "center",
        gap: 3,
      }}
    >
      {services.map((skill) => (
        <Box key={skill.id}>
          <SkillCard skill={skill} />
        </Box>
      ))}
    </Box>
  );
}
