"use client";

import Link from "next/link";

export default function SkillCard({ skill }: any) {
  const Icon = skill.icon;

  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition transform hover:scale-[1.02]">
      <Icon className="text-blue-600 mb-3" />

      <h2 className="text-xl font-bold mb-2">{skill.name}</h2>

      <p className="text-gray-600 text-sm mb-3">
        {skill.description}
      </p>

      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
        {skill.deliverable}
      </span>

      <div className="mt-4">
        <Link
          href={`/work?skill=${skill.slug}`}
          className="text-blue-600 font-semibold"
        >
          See Project Examples →
        </Link>
      </div>
    </div>
  );
}