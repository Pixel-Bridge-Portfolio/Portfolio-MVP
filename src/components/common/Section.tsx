import { Container, Stack, type SxProps, type Theme } from "@mui/material";

type SectionProps = {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
};

export default function Section({ children, sx }: SectionProps) {
  return (
    <Stack component="section" className="section-padding" sx={sx}>
      <Container maxWidth="lg">{children}</Container>
    </Stack>
  );
}
