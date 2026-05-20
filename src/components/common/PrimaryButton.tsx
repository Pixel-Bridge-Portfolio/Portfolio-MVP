import { Button, type ButtonProps } from "@mui/material";

export default function PrimaryButton({ children, ...props }: ButtonProps) {
  return (
    <Button variant="contained" color="primary" disableElevation {...props}>
      {children}
    </Button>
  );
}
