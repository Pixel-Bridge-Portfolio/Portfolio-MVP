"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@mui/material";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import TeamCard from "@/components/team/TeamCard";
import TeamDialog from "@/components/team/TeamDialog";

import {
  teamMembers,
  TeamMember,
} from "@/data/teamMembers";

export default function TeamPage() {
  const [selectedMember, setSelectedMember] =
    useState<TeamMember | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-white px-6 pb-24 pt-15 text-black">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-4xl bg-white px-6 py-5 text-black md:px-14 md:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />

          <div className="relative max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/25 px-4 py-2 text-sm text-black/70">
              <AutoAwesomeIcon sx={{ fontSize: 16 }} />
              Meet Our Team
            </div>

            <h1 className="text-4xl font-black leading-tight md:text-7xl">
              Creative minds building meaningful digital experiences.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/70 md:text-lg">
              We are designers, developers, and strategists working together to
              craft scalable products with beautiful user experiences.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                sx={{ backgroundColor: "#000000", color: "#ffffff", px: 4, py: 1.4, borderRadius: "999px", fontWeight: 700, textTransform: "none", transition: "all 0.35s ease", "& .MuiSvgIcon-root": { transition: "transform 0.3s ease" }, "&:hover": { transform: "translateY(-3px)" }, "&:hover .MuiSvgIcon-root": { transform: "translateX(4px)" } }}
              >
                Let’s work together
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-black md:text-5xl">
              Team Members
            </h2>

            <p className="mt-3 text-black/60">
              A passionate team focused on building exceptional products.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                onSelect={setSelectedMember}
              />
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="relative overflow-hidden rounded-4xl border border-black/10 bg-black px-8 py-16 text-white md:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

            <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-black md:text-6xl">
                  Have a project in mind?
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/70">
                  Let’s collaborate and turn your ideas into a powerful digital
                  experience.
                </p>
              </div>

              <Button
                component={Link}
                href="/contact"
                variant="contained"
                endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                sx={{ backgroundColor: "#ffffff", color: "#000000", borderRadius: "999px", px: 4, py: 1.5, textTransform: "none", fontWeight: 700, transition: "all 0.35s ease", "& .MuiSvgIcon-root": { transition: "transform 0.3s ease" }, "&:hover": { backgroundColor: "#f0f0f0", transform: "translateY(-3px)" }, "&:hover .MuiSvgIcon-root": { transform: "translateX(4px)" } }}
              >
                Let’s work together
              </Button>
            </div>
          </div>
        </section>
      </div>

      <TeamDialog
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </main>
  );
}