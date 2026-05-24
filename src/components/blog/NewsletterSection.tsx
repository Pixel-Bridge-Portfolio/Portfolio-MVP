import {
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import SurfaceCard from "@/components/common/SurfaceCard";
import PrimaryButton from "@/components/common/PrimaryButton";

export default function NewsletterSection() {
  return (
    <SurfaceCard>
      <Stack
        spacing={4}
        sx={{
          textAlign: "center",
          py: {
            xs: 2,
            md: 4,
          },
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h3">
            Join Our Newsletter
          </Typography>

          <Typography
            variant="body1"
            className="text-muted"
            sx={{
              maxWidth: 620,
              mx: "auto",
            }}
          >
            Monthly insights on design,
            development, AI workflows,
            and modern digital products.
          </Typography>
        </Stack>

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
          sx={{
            maxWidth: 620,
            mx: "auto",
            width: "100%",
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter your email"
            type="email"
          />

          <PrimaryButton>
            Subscribe
          </PrimaryButton>
        </Stack>
      </Stack>
    </SurfaceCard>
  );
}