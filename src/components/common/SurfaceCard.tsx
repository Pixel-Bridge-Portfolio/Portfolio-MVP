import { Card, CardContent, type CardProps } from "@mui/material";

type SurfaceCardProps = CardProps & {
  children: React.ReactNode;
};

export default function SurfaceCard({ children, ...props }: SurfaceCardProps) {
  return (
    <Card className="hover-lift" {...props}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
