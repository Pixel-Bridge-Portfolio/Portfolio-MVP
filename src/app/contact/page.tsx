"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PublicIcon from "@mui/icons-material/Public";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const serviceOptions = [
  "Backend",
  "Frontend",
  "Graphic Design",
  "Branding",
  "Video",
  "Communications",
  "Social Media",
  "AI",
  "Product Design",
];

const budgetOptions = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $8,000",
  "$8,000+",
];

export default function ContactPage() {
  const [fileName, setFileName] = useState("No file selected");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : "No file selected");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Box component="main" className="section-padding">
      <Container maxWidth="lg">
        <Stack spacing={4.5}>
          <Box sx={{ textAlign: "center", maxWidth: 780, mx: "auto" }}>
            <Typography variant="h2" sx={{ mb: 1.5 }}>
              Let&apos;s Build Your Next Project
            </Typography>
            <Typography className="text-muted" sx={{ lineHeight: 1.75 }}>
              Tell us what you are building and we will help bridge strategy, design, and development into one clear delivery plan.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.35fr 1fr" },
              gap: 3,
              alignItems: "start",
            }}
          >
            <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, border: "1px solid", borderColor: "divider" }}>
              <Stack component="form" spacing={2} onSubmit={handleSubmit}>
                <TextField label="Name" name="name" required fullWidth />
                <TextField label="Email" name="email" type="email" required fullWidth />
                <TextField select label="Service Needed" name="serviceNeeded" required fullWidth defaultValue="">
                  <MenuItem value="" disabled>
                    Select a service
                  </MenuItem>
                  {serviceOptions.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField select label="Budget" name="budget" required fullWidth defaultValue="">
                  <MenuItem value="" disabled>
                    Select budget range
                  </MenuItem>
                  {budgetOptions.map((budget) => (
                    <MenuItem key={budget} value={budget}>
                      {budget}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  minRows={5}
                  placeholder="Share your goals, timeline, and any references we should review."
                  required
                  fullWidth
                />

                <Box>
                  <Button component="label" variant="outlined" sx={{ borderRadius: 2 }}>
                    Upload Brief Attachment
                    <input type="file" hidden name="brief" onChange={handleFileChange} />
                  </Button>
                  <Typography sx={{ fontSize: "0.82rem", color: "text.secondary", mt: 0.8 }}>
                    {fileName}
                  </Typography>
                </Box>

                <Button type="submit" variant="contained" size="large" className="submit-pulse" sx={{ alignSelf: "flex-start", px: 3.5 }}>
                  Submit Request
                </Button>
              </Stack>
            </Paper>

            <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, border: "1px solid", borderColor: "divider" }}>
              <Stack spacing={2.25}>
                <Box sx={{ display: "flex", gap: 1.4, alignItems: "flex-start" }}>
                  <EmailOutlinedIcon sx={{ color: "text.secondary", mt: 0.2 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 700, mb: 0.4 }}>Email</Typography>
                    <Typography className="text-muted">hello@pixelbridge.studio</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 1.4, alignItems: "flex-start" }}>
                  <PublicIcon sx={{ color: "text.secondary", mt: 0.2 }} />
                  <Box sx={{ width: "100%" }}>
                    <Typography sx={{ fontWeight: 700, mb: 0.6 }}>Social</Typography>
                    <Stack direction="row" spacing={1}>
                      <IconButton component="a" href="https://x.com/pixelbridge" target="_blank" rel="noreferrer" aria-label="X">
                        <XIcon />
                      </IconButton>
                      <IconButton component="a" href="https://instagram.com/pixelbridge.studio" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <InstagramIcon />
                      </IconButton>
                      <IconButton component="a" href="https://linkedin.com/company/pixelbridge" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton component="a" href="https://github.com/pixelbridge-studio" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <GitHubIcon />
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: 1.4, alignItems: "flex-start" }}>
                  <FmdGoodOutlinedIcon sx={{ color: "text.secondary", mt: 0.2 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 700, mb: 0.4 }}>Location</Typography>
                    <Typography className="text-muted">Herat, Afghanistan</Typography>
                  </Box>
                </Box>
              </Stack>
            </Paper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
