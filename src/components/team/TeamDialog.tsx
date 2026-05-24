"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Button,
  Dialog,
  DialogContent,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkIcon from "@mui/icons-material/Work";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { TeamMember } from "@/data/teamMembers";

type Props = {
  member: TeamMember | null;
  onClose: () => void;
};

function DetailContent({
  selectedMember,
  handleClose,
}: {
  selectedMember: TeamMember;
  handleClose: () => void;
}) {
  return (
    <div className="relative overflow-hidden mx-4 my-2 md:mx-0 md:my-0 rounded-[1.4rem] border border-white/10 bg-[#000000] text-white shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_35%)]" />

      <div className="relative p-6 md:p-10">
        <div className="flex items-start justify-between gap-5">
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center">
            <div className="group/avatar relative h-32 w-32 overflow-hidden rounded-full border border-white/10 bg-black shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-105">
              <div
                className="absolute -inset-1 animate-spin rounded-full bg-conic/[from_90deg] from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover/avatar:opacity-100"
                style={{ animationDuration: "6s" }}
              />

              <div className="absolute inset-1 z-10 overflow-hidden rounded-full">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/avatar:scale-110"
                />
              </div>
            </div>
            <div>
              <Typography variant="h4" sx={{ fontWeight: 800, color: "#ffffff" }}>
                {selectedMember.name}
              </Typography>

              <Typography sx={{ color: "rgba(255,255,255,0.65)", mt: 1 }}>
                {selectedMember.role}
              </Typography>

              <div className="mt-4 flex flex-wrap gap-3">
                {selectedMember.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      title={skill.name}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
                    >
                      <Icon size={18} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <IconButton
            onClick={handleClose}
            sx={{
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "rgba(255,255,255,0.04)",
              transition: "all 0.35s ease",
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#000000",
                transform: "rotate(90deg)",
              },
            }}
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </div>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.9,
            mt: 5,
            fontSize: "1rem",
          }}
        >
          {selectedMember.bio}
        </Typography>

        <div className="mt-8 flex flex-wrap gap-3">
          {selectedMember.socials.github && (
            <Button
              component="a"
              href={selectedMember.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<GitHubIcon sx={{ fontSize: 18 }} />}
              sx={{
                borderColor: "rgba(255,255,255,0.12)",
                color: "#ffffff",
                borderRadius: "999px",
                px: 2.5,
                py: 1,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#ffffff",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  transform: "translateY(-3px)",
                },
              }}
            >
              GitHub
            </Button>
          )}

          {selectedMember.socials.linkedin && (
            <Button
              component="a"
              href={selectedMember.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<LinkedInIcon sx={{ fontSize: 18 }} />}
              sx={{
                borderColor: "rgba(255,255,255,0.12)",
                color: "#ffffff",
                borderRadius: "999px",
                px: 2.5,
                py: 1,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#ffffff",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  transform: "translateY(-3px)",
                },
              }}
            >
              LinkedIn
            </Button>
          )}

          {selectedMember.socials.portfolio && (
            <Button
              component="a"
              href={selectedMember.socials.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<WorkIcon sx={{ fontSize: 18 }} />}
              sx={{
                borderColor: "rgba(255,255,255,0.12)",
                color: "#ffffff",
                borderRadius: "999px",
                px: 2.5,
                py: 1,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#ffffff",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  transform: "translateY(-3px)",
                },
              }}
            >
              Portfolio
            </Button>
          )}
        </div>

        <div className="mt-10">
          <Button
            component={Link}
            href={`/contact?member=${encodeURIComponent(
              selectedMember.name
            )}&role=${encodeURIComponent(selectedMember.role)}`}
            variant="contained"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
            sx={{
              backgroundColor: "#ffffff",
              color: "#000000",
              borderRadius: "999px",
              px: 4,
              py: 1.4,
              fontWeight: 700,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#f4f4f5",
                transform: "translateY(-3px)",
              },
            }}
          >
            Let’s Work Together
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function TeamDialog({ member, onClose }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (!member) return null;

  return isMobile ? (
    <Drawer
      anchor="bottom"
      open={!!member}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "transparent",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            overflow: "hidden",
            boxShadow: "none",
          },
        },
      }}
    >
      <DetailContent selectedMember={member} handleClose={onClose} />
    </Drawer>
  ) : (
    <Dialog
      open={!!member}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            background: "transparent",
            boxShadow: "none",
            borderRadius: "20px",
          },
        },
      }}
    >
      <DialogContent sx={{ p: 0, backgroundColor: "transparent" }}>
        <DetailContent selectedMember={member} handleClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}