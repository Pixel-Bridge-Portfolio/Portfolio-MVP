import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Back-compat for older links that pointed to `/projects/*`.
// This is especially helpful for static exports + external links.
const legacySlugMap: Record<string, string> = {
  "creative-portfolio": "celune-watch-brand",
  startup: "foodie-hub",
  dashboard: "fast-food-brand",
  ecommerce: "bear-and-bean",
};

export async function generateStaticParams() {
  return Object.keys(legacySlugMap).map((slug) => ({ slug }));
}

export default async function LegacyProjectsRedirectPage({ params }: Props) {
  const { slug } = await params;

  const mapped = legacySlugMap[slug] ?? slug;
  redirect(`/work/${mapped}/`);
}
