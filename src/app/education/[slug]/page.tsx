import { notFound } from "next/navigation";
import {
  getEducationModuleBySlug,
  getEducationModuleSlugs,
  getPrevNextSlugs,
} from "@/content/educationModules";
import { EducationModuleClient } from "@/components/education/EducationModuleClient";
import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return getEducationModuleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const module = getEducationModuleBySlug(slug);
  if (!module) return {};

  const title = module.titleEn;
  const description =
    `${module.descEn} Bilingual Arabic + English menstrual health education focused on Syria.`;

  return {
    title,
    description,
    alternates: { canonical: `/education/${slug}` },
    openGraph: {
      type: "article",
      url: absoluteUrl(`/education/${slug}`),
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    twitter: {
      card: "summary",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: module.titleEn,
    description: module.descEn,
    inLanguage: ["en", "ar"],
    isPartOf: {
      "@type": "CreativeWorkSeries",
      name: "Flow for Her Education Curriculum",
      url: absoluteUrl("/education"),
    },
    mainEntityOfPage: absoluteUrl(`/education/${module.slug}`),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: absoluteUrl("/"),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EducationModuleClient module={module} prevSlug={prev} nextSlug={next} />
    </>
  );
}

