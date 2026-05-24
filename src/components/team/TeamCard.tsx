"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import { TeamMember } from "@/data/teamMembers";

type Props = {
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
};

export default function TeamCard({ member, onSelect }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-[1.8rem] bg-black text-white transition-all duration-500 hover:-translate-y-2">
      <div className="relative flex justify-center pt-8">
        <div className="group/avatar relative h-32 w-32 overflow-hidden rounded-full border border-white/10 bg-black transition-all duration-500 group-hover:scale-105">
          <div
            className="absolute -inset-1 animate-spin rounded-full bg-conic/[from_90deg] from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover/avatar:opacity-100"
            style={{ animationDuration: "6s" }}
          />

          <div className="absolute inset-1 z-10 overflow-hidden rounded-full">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-700 group-hover/avatar:scale-110"
            />
          </div>
        </div>
      </div>

      <div className="p-6 pt-5 text-center">
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="mt-1 text-sm text-white/60">{member.role}</p>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {member.skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                title={skill.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-black">
                <Icon size={20} />
              </div>
            );
          })}
        </div>

        <div className="mt-6">
          <Button
            onClick={() => onSelect(member)}
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#ffffff",
              color: "#000000",
              borderRadius: "999px",
              py: 1.2,
              textTransform: "none",
              fontWeight: 700,
              transition: "all 0.35s ease",

              "&:hover": {
                backgroundColor: "#f4f4f5",
                transform: "translateY(-2px)",
              },
            }}
          >
            Say Hi
          </Button>
        </div>
      </div>
    </article>
  );
}