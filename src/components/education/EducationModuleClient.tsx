"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, BookOpen, CheckCircle2, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type {
  EducationGlossaryEntry,
  EducationModule,
  EducationQuizQuestion,
  EducationStep,
} from "@/content/educationModules";

type Props = {
  module: EducationModule;
  prevSlug: string | null;
  nextSlug: string | null;
};

type StoredProgress = {
  stepIndex: number;
  quizAnswers: Record<string, number>;
  updatedAt: number;
};

function storageKey(slug: string) {
  return `ffh:edu:${slug}`;
}

function safeParseProgress(raw: string | null): StoredProgress | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<StoredProgress>;
    if (typeof parsed.stepIndex !== "number") return null;
    if (!parsed.quizAnswers || typeof parsed.quizAnswers !== "object") return null;
    return {
      stepIndex: Math.max(0, parsed.stepIndex),
      quizAnswers: parsed.quizAnswers as Record<string, number>,
      updatedAt: typeof parsed.updatedAt === "number" ? parsed.updatedAt : Date.now(),
    };
  } catch {
    return null;
  }
}

function getLocalizedStep(step: EducationStep, lang: "en" | "ar") {
  return {
    title: lang === "en" ? step.titleEn : step.titleAr,
    body: lang === "en" ? step.bodyEn : step.bodyAr,
  };
}

function getLocalizedQuiz(q: EducationQuizQuestion, lang: "en" | "ar") {
  return {
    question: lang === "en" ? q.questionEn : q.questionAr,
    options: lang === "en" ? q.optionsEn : q.optionsAr,
    explanation: lang === "en" ? q.explanationEn : q.explanationAr,
  };
}

function getLocalizedGlossary(e: EducationGlossaryEntry, lang: "en" | "ar") {
  return {
    term: lang === "en" ? e.termEn : e.termAr,
    definition: lang === "en" ? e.definitionEn : e.definitionAr,
  };
}

export function EducationModuleClient({ module, prevSlug, nextSlug }: Props) {
  const { language, direction } = useLanguage();
  const reduceMotion = useReducedMotion();
  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-rich-black";

  const [activeStep, setActiveStep] = useState(0);
  const [savedStepIndex, setSavedStepIndex] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [openAccordionIds, setOpenAccordionIds] = useState<Set<string>>(new Set());
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [glossaryKey, setGlossaryKey] = useState<string | null>(null);

  const stepCount = module.steps.length;
  const progress = stepCount > 0 ? (activeStep + 1) / stepCount : 0;

  const glossaryMap = useMemo(() => {
    const map = new Map<string, EducationGlossaryEntry>();
    module.glossary.forEach((g) => map.set(g.key, g));
    return map;
  }, [module.glossary]);

  const activeStepData = module.steps[activeStep];

  // Restore progress
  useEffect(() => {
    const saved = safeParseProgress(localStorage.getItem(storageKey(module.slug)));
    if (!saved) return;
    const clamped = Math.min(Math.max(0, saved.stepIndex), Math.max(0, module.steps.length - 1));
    setSavedStepIndex(clamped);
    setQuizAnswers(saved.quizAnswers ?? {});
  }, [module.slug, module.steps.length]);

  // Persist progress
  useEffect(() => {
    const payload: StoredProgress = {
      stepIndex: activeStep,
      quizAnswers,
      updatedAt: Date.now(),
    };
    try {
      localStorage.setItem(storageKey(module.slug), JSON.stringify(payload));
    } catch {
      // ignore (private mode / quota)
    }
  }, [activeStep, quizAnswers, module.slug]);

  const dirSign = direction === "rtl" ? -1 : 1;

  function openGlossary(key: string) {
    if (!glossaryMap.has(key)) return;
    setGlossaryKey(key);
    setGlossaryOpen(true);
  }

  function toggleAccordion(id: string) {
    setOpenAccordionIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const stepVariants = {
    initial: { opacity: 0, x: reduceMotion ? 0 : 24 * dirSign },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: reduceMotion ? 0 : -24 * dirSign },
  };

  const ui = {
    backToEducation: language === "en" ? "Back to Education" : "العودة إلى التعليم",
    continue: language === "en" ? "Continue" : "متابعة",
    step: language === "en" ? "Step" : "خطوة",
    steps: language === "en" ? "Steps" : "الخطوات",
    next: language === "en" ? "Next" : "التالي",
    previous: language === "en" ? "Previous" : "السابق",
    glossary: language === "en" ? "Glossary" : "مصطلحات",
    keyTerms: language === "en" ? "Key terms" : "مصطلحات مهمة",
    checkpoint: language === "en" ? "Checkpoint" : "تحقق سريع",
    correct: language === "en" ? "Correct" : "صحيح",
    close: language === "en" ? "Close" : "إغلاق",
    videoComingSoon: language === "en" ? "Video coming soon" : "سيتم إضافة الفيديو قريباً",
    videoComingSoonSub:
      language === "en"
        ? "We’ll add a lesson video here. For now, go through the steps below."
        : "سنضيف فيديو الدرس هنا. في الوقت الحالي، تابعي الخطوات أدناه.",
    savedProgress:
      language === "en"
        ? "You have saved progress in this module."
        : "لديكِ تقدّم محفوظ في هذه الوحدة.",
    jumpToSaved:
      language === "en" ? "Jump to where I left off" : "الانتقال إلى آخر نقطة توقفتِ عندها",
    moduleNavPrev: language === "en" ? "Previous module" : "الوحدة السابقة",
    moduleNavNext: language === "en" ? "Next module" : "الوحدة التالية",
    completeStep: language === "en" ? "Mark step complete" : "تأكيد إتمام الخطوة",
  };

  return (
    <div className="min-h-screen bg-brand-rich-black text-white font-sans">
      <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Top bar */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/education"
            className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider opacity-80 hover:opacity-100 transition-opacity ${focusRing}`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>{ui.backToEducation}</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
              <BookOpen className="w-4 h-4 opacity-80" />
              <span className="font-display uppercase text-sm opacity-90">
                {module.id < 10 ? `0${module.id}` : module.id}
              </span>
            </div>
            <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
              <span className="text-xs uppercase tracking-wider opacity-80">{ui.steps}</span>
              <span className="ml-2 font-bold">
                {Math.min(activeStep + 1, stepCount)}/{stepCount}
              </span>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="font-display text-[clamp(2rem,7vw,4.5rem)] uppercase leading-[1] text-balance">
                {language === "en" ? module.titleEn : module.titleAr}
              </h1>
              <p className="mt-4 text-base sm:text-lg opacity-85 leading-relaxed">
                {language === "en" ? module.descEn : module.descAr}
              </p>
            </div>
            <div className="shrink-0 font-display text-3xl sm:text-4xl opacity-40">
              {module.id < 10 ? `0${module.id}` : module.id}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-8">
            <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-white"
                initial={false}
                animate={{ width: `${Math.max(0, Math.min(1, progress)) * 100}%` }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Saved progress banner */}
          {savedStepIndex !== null && savedStepIndex > 0 && savedStepIndex !== activeStep && (
            <div className="mt-6 rounded-3xl border border-white/15 bg-white/5 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="opacity-90">{ui.savedProgress}</p>
              <button
                type="button"
                onClick={() => {
                  setActiveStep(savedStepIndex);
                  setSavedStepIndex(null);
                }}
                className={`inline-flex items-center justify-center rounded-full border border-white/20 bg-white text-brand-rich-black font-bold uppercase tracking-wider text-xs px-5 py-3 hover:bg-white/90 transition-colors ${focusRing}`}
              >
                {ui.jumpToSaved}
              </button>
            </div>
          )}
        </div>

        {/* Video */}
        <div className="mb-10">
          {module.youtubeId ? (
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-black">
              <div className="aspect-video w-full" />
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${module.youtubeId}`}
                title={`${module.titleEn} video`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="rounded-3xl border border-white/15 bg-white/5 p-8">
              <p className="font-display text-xl sm:text-2xl uppercase">{ui.videoComingSoon}</p>
              <p className="mt-2 opacity-80 leading-relaxed">{ui.videoComingSoonSub}</p>
            </div>
          )}
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Step list */}
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-5 sm:p-6">
              <p className="font-display uppercase text-sm opacity-70">{ui.steps}</p>
              <div className="mt-4 flex flex-col gap-2">
                {module.steps.map((s, idx) => {
                  const isActive = idx === activeStep;
                  const title = language === "en" ? s.titleEn : s.titleAr;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={[
                        "text-start rounded-2xl px-4 py-3 border transition-colors",
                        focusRing,
                        isActive
                          ? "border-white/30 bg-white/10"
                          : "border-white/10 hover:border-white/20 hover:bg-white/5",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="font-bold leading-snug">{title}</span>
                        <span className="font-display opacity-40 shrink-0">
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Step content */}
          <main className="lg:col-span-8">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider opacity-70">
                    {ui.step} {activeStep + 1}/{stepCount}
                  </p>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl uppercase leading-tight text-balance">
                    {activeStepData ? getLocalizedStep(activeStepData, language).title : ""}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
                    disabled={activeStep === 0}
                    className={`inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider disabled:opacity-40 hover:bg-white/10 transition-colors ${focusRing}`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    {ui.previous}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStep((s) => Math.min(stepCount - 1, s + 1))}
                    disabled={activeStep >= stepCount - 1}
                    className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white text-brand-rich-black px-4 py-2 text-xs font-bold uppercase tracking-wider disabled:opacity-60 hover:bg-white/90 transition-colors ${focusRing}`}
                  >
                    {ui.next}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStepData?.id ?? "none"}
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" }}
                  >
                    <p className="leading-relaxed opacity-95 text-base sm:text-lg">
                      {activeStepData ? getLocalizedStep(activeStepData, language).body : ""}
                    </p>

                    {/* Step glossary chips */}
                    {activeStepData?.glossaryKeys && activeStepData.glossaryKeys.length > 0 && (
                      <div className="mt-6">
                        <p className="text-xs uppercase tracking-wider opacity-70">{ui.keyTerms}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {activeStepData.glossaryKeys
                            .filter((k) => glossaryMap.has(k))
                            .map((k) => {
                              const entry = glossaryMap.get(k)!;
                              const term = getLocalizedGlossary(entry, language).term;
                              return (
                                <button
                                  key={k}
                                  type="button"
                                  onClick={() => openGlossary(k)}
                                  className={`rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-bold hover:bg-white/10 transition-colors ${focusRing}`}
                                >
                                  {term}
                                </button>
                              );
                            })}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Quiz */}
            {module.quiz.length > 0 && (
              <section className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
                <h3 className="font-display text-xl sm:text-2xl uppercase">{ui.checkpoint}</h3>
                <div className="mt-6 space-y-6">
                  {module.quiz.map((q) => (
                    <QuizCard
                      key={q.id}
                      q={q}
                      lang={language}
                      selected={quizAnswers[q.id]}
                      onSelect={(idx) => setQuizAnswers((prev) => ({ ...prev, [q.id]: idx }))}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Accordions */}
            {module.accordions.length > 0 && (
              <section className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
                <h3 className="font-display text-xl sm:text-2xl uppercase">
                  {language === "en" ? "Explore" : "استكشفي"}
                </h3>
                <div className="mt-6 space-y-3">
                  {module.accordions.map((item) => {
                    const open = openAccordionIds.has(item.id);
                    const title = language === "en" ? item.titleEn : item.titleAr;
                    const body = language === "en" ? item.bodyEn : item.bodyAr;
                    return (
                      <div key={item.id} className="rounded-2xl border border-white/15 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => toggleAccordion(item.id)}
                          aria-expanded={open}
                          className="w-full text-start px-5 py-4 flex items-center justify-between gap-6 hover:bg-white/5 transition-colors"
                        >
                          <span className="font-bold">{title}</span>
                          <span className="font-display opacity-60">{open ? "−" : "+"}</span>
                        </button>
                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={reduceMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }}
                              className="px-5 pb-5"
                            >
                              <p className="opacity-90 leading-relaxed">{body}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Glossary (module-level) */}
            {module.glossary.length > 0 && (
              <section className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-6">
                  <h3 className="font-display text-xl sm:text-2xl uppercase">{ui.glossary}</h3>
                  <button
                    type="button"
                    onClick={() => {
                      setGlossaryKey(module.glossary[0]?.key ?? null);
                      setGlossaryOpen(true);
                    }}
                    className={`rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors ${focusRing}`}
                  >
                    {ui.continue}
                  </button>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {module.glossary.map((g) => {
                    const term = getLocalizedGlossary(g, language).term;
                    return (
                      <button
                        key={g.key}
                        type="button"
                        onClick={() => openGlossary(g.key)}
                        className={`rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-bold hover:bg-white/10 transition-colors ${focusRing}`}
                      >
                        {term}
                      </button>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Module-to-module navigation */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevSlug ? (
                <Link
                  href={`/education/${prevSlug}`}
                  className={`rounded-3xl border border-white/15 bg-white/5 p-6 hover:bg-white/10 transition-colors ${focusRing}`}
                >
                  <p className="text-xs uppercase tracking-wider opacity-70">{ui.moduleNavPrev}</p>
                  <p className="mt-2 font-display text-2xl uppercase">
                    {language === "en" ? "Continue back" : "العودة"}
                  </p>
                </Link>
              ) : (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 opacity-40">
                  <p className="text-xs uppercase tracking-wider">{ui.moduleNavPrev}</p>
                </div>
              )}

              {nextSlug ? (
                <Link
                  href={`/education/${nextSlug}`}
                  className={`rounded-3xl border border-white/15 bg-white/5 p-6 hover:bg-white/10 transition-colors ${focusRing}`}
                >
                  <p className="text-xs uppercase tracking-wider opacity-70">{ui.moduleNavNext}</p>
                  <p className="mt-2 font-display text-2xl uppercase">
                    {language === "en" ? "Keep going" : "تابعي"}
                  </p>
                </Link>
              ) : (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 opacity-40">
                  <p className="text-xs uppercase tracking-wider">{ui.moduleNavNext}</p>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      <GlossaryDrawer
        open={glossaryOpen}
        onClose={() => setGlossaryOpen(false)}
        entry={glossaryKey ? glossaryMap.get(glossaryKey) ?? null : null}
        lang={language}
        closeLabel={ui.close}
      />
    </div>
  );
}

function QuizCard({
  q,
  lang,
  selected,
  onSelect,
}: {
  q: EducationQuizQuestion;
  lang: "en" | "ar";
  selected: number | undefined;
  onSelect: (idx: number) => void;
}) {
  const { question, options, explanation } = getLocalizedQuiz(q, lang);
  const answered = typeof selected === "number";
  const correct = answered ? selected === q.correctIndex : false;

  return (
    <div className="rounded-2xl border border-white/15 bg-black/10 p-5">
      <p className="font-bold leading-relaxed">{question}</p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((opt, idx) => {
          const isSelected = selected === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelect(idx)}
              className={[
                "text-start rounded-2xl border px-4 py-3 transition-colors",
                isSelected ? "border-white/35 bg-white/10" : "border-white/10 hover:border-white/20 hover:bg-white/5",
              ].join(" ")}
            >
              <span className="font-medium">{opt}</span>
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-4 flex items-start gap-3">
          <CheckCircle2 className={["w-5 h-5 shrink-0 mt-0.5", correct ? "text-white" : "text-white/50"].join(" ")} />
          <div>
            <p className="font-bold">{lang === "en" ? (correct ? "Correct" : "Not quite") : correct ? "صحيح" : "ليست الإجابة الصحيحة"}</p>
            <p className="mt-1 opacity-85 leading-relaxed">{explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function GlossaryDrawer({
  open,
  onClose,
  entry,
  lang,
  closeLabel,
}: {
  open: boolean;
  onClose: () => void;
  entry: EducationGlossaryEntry | null;
  lang: "en" | "ar";
  closeLabel: string;
}) {
  const reduceMotion = useReducedMotion();
  const localized = entry ? getLocalizedGlossary(entry, lang) : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.15 }}
          aria-modal="true"
          role="dialog"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute inset-0 bg-black/60"
            aria-label={closeLabel}
          />
          <motion.div
            className="absolute left-0 right-0 bottom-0 mx-auto max-w-3xl rounded-t-[2rem] border border-white/15 bg-brand-rich-black text-white p-6 sm:p-8"
            initial={{ y: reduceMotion ? 0 : 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: reduceMotion ? 0 : 40, opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-wider opacity-70">{lang === "en" ? "Glossary" : "مصطلحات"}</p>
                <h4 className="mt-2 font-display text-3xl uppercase leading-tight">
                  {localized?.term ?? (lang === "en" ? "Select a term" : "اختاري مصطلحاً")}
                </h4>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/20 p-2 hover:bg-white/10 transition-colors"
                aria-label={closeLabel}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="mt-4 opacity-90 leading-relaxed text-base sm:text-lg">
              {localized?.definition ??
                (lang === "en"
                  ? "Tap a key term in the lesson to see its definition here."
                  : "اضغطي على المصطلحات المهمة في الدرس لرؤية تعريفها هنا.")}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

