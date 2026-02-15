import { notFound } from "next/navigation";
import {
  getEducationModuleBySlug,
  getEducationModuleSlugs,
  getPrevNextSlugs,
} from "@/content/educationModules";
import { EducationModuleClient } from "@/components/education/EducationModuleClient";

export function generateStaticParams() {
  return getEducationModuleSlugs().map((slug) => ({ slug }));
}

export default async function EducationModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const module = getEducationModuleBySlug(slug);
  if (!module) notFound();

  const { prev, next } = getPrevNextSlugs(module.slug);
  return <EducationModuleClient module={module} prevSlug={prev} nextSlug={next} />;
}

