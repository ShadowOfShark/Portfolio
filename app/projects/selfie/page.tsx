"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Wallet,
  ShieldAlert,
  MapPin,
  SearchCheck,
  Users,
  Baby,
  PersonStanding,
  Trees,
  BrainCircuit,
  ClipboardList,
  Layers3,
  Accessibility,
  Building2,
  ImagePlus,
  Camera,
  BarChart3,
  History,
  Download,
  Check,
} from "lucide-react";

const techStack = [
  "React Native",
  "Expo",
  "TypeScript",
  "FastAPI",
  "Python",
  "MobileNetV3",
  "OpenCV",
  "AsyncStorage",
];

const infoCards = [
  {
    label: "My Role",
    value: "Product Design, UX Research, Frontend Development, Backend Integration",
  },
  {
    label: "Focus Area",
    value: "Healthcare Accessibility, Mobile UX, AI Workflow",
  },
  {
    label: "Project Type",
    value: "Capstone Project, End-to-End Product Prototype",
  },
];

const features = [
  {
    title: "Guided Image Capture",
    label: "Capture",
    description:
      "Guides users to take clearer oral photos with visual instructions before submission.",
    image: "/selfie/upload-screen.png",
  },
  {
    title: "Questionnaire Input",
    label: "Context",
    description:
      "Collects oral-health context to support risk estimation beyond image analysis alone.",
    image: "/selfie/questionnaire-screen.png",
  },
  {
    title: "AI Risk Screening",
    label: "Analyze",
    description:
      "Combines image preprocessing, CNN probabilities, questionnaire scoring, and triage fusion.",
    image: "/selfie/architecture-diagram.png",
  },
  {
    title: "Risk Results",
    label: "Feedback",
    description:
      "Displays color-coded risk feedback and educational recommendations in a non-diagnostic format.",
    image: "/selfie/results-screen.png",
  },
  {
    title: "Scan History",
    label: "Track",
    description:
      "Allows users to revisit previous scans, timestamps, detected risks, and saved recommendations.",
    image: "/selfie/history-screen.png",
  },
];


export default function SelfieCaseStudyPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <main className="min-h-screen bg-[#F7FBFF] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F7FBFF] via-white to-[#E0F2FE]">
        <div className="absolute right-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-cyan-200/50 blur-3xl" />
        <div className="absolute bottom-[-200px] left-[-120px] h-[420px] w-[420px] rounded-full bg-blue-200/50 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 md:py-16">
          <Link
            href="/"
            className="mb-10 inline-block text-sm font-medium text-cyan-700 hover:text-cyan-900"
          >
            ← Back to Home
          </Link>

          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            {/* Left Content */}
            <div>
              <img
                src="/selfie/selfie_logo.png"
                alt="Selfie Dental Health AI logo"
                className="mb-8 h-auto w-[300px] max-w-full object-contain"
              />

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
                Capstone Case Study
              </p>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Selfie Dental Health AI
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                A mobile oral-health screening app that combines smartphone
                image analysis and guided questionnaires to provide
                non-diagnostic risk assessment and educational feedback.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/ShadowOfShark/SFWRBME-5P06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  View GitHub Repository →
                </a>

                <p className="text-sm text-slate-500">
                  Team 9 · Ruidi Liu · Jasmine Wang
                </p>
              </div>

              <div className="mt-10 grid gap-6 border-t border-slate-200 pt-6 md:grid-cols-3">
                {infoCards.map((card) => (
                  <div key={card.label}>
                    <p className="text-sm font-bold text-slate-950">
                      {card.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="mb-3 text-sm font-bold text-slate-950">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Phone Mockup */}
            <div className="relative mx-auto h-[520px] w-full max-w-[600px]">
              <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/30 blur-3xl" />

              <div className="absolute left-8 top-24 w-[235px] rounded-[3rem] bg-slate-950 p-3 shadow-2xl shadow-slate-400/40">
                <div className="overflow-hidden rounded-[2.35rem] bg-white">
                  <img
                    src="/selfie/upload-screen.jpg"
                    alt="Upload screen"
                    className="h-[465px] w-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute right-8 top-4 w-[270px] rounded-[3rem] bg-slate-950 p-3 shadow-2xl shadow-slate-500/50">
                <div className="overflow-hidden rounded-[2.35rem] bg-white">
                  <img
                    src="/selfie/results-screen.jpg"
                    alt="Results screen"
                    className="h-[525px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="absolute right-200 top-210"> 
        <a
        href="\files\Selfie_AI_Dental_Assistant_Report.pdf"
        download
        className="relative z-50 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 hover:bg-slate-50 transition"
        >
        <Download size={18} />
        Capstone Report
</a>
</div>

</section>

        {/* Problem & Opportunity */}

<section className="mx-auto max-w-6xl px-6 pt-8 pb-14">
  <div className="max-w-6xl">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-600">
      Problem & Opportunity
    </p>

    <h2 className="text-4xl font-bold tracking-tight text-slate-950">
      Why Early Oral Health Screening Matters
    </h2>

    <p className="mt-5 text-lg leading-8 text-slate-600">
      Many individuals delay dental care due to financial, geographic,
      and awareness-related barriers. Early self-screening tools can
      support earlier intervention and better oral-health outcomes.
    </p>
  </div>

  <div className="mt-14 grid gap-8 lg:grid-cols-2">

    {/* Problem Card */}

    <div
      className="
      rounded-[2rem]
      border
      border-slate-200
      bg-gradient-to-br
      from-white
      to-cyan-50/40
      p-8
      shadow-sm
    "
    >
      <div className="mb-8 flex items-center gap-3">
        <div className="h-10 w-1 rounded-full bg-cyan-500" />
        <h3 className="text-3xl font-bold text-slate-950">
          The Problem
        </h3>
      </div>

      <div className="space-y-7">

        <ProblemItem
          icon={<Wallet className="h-5 w-5" />}
          title="Cost"
          body="Dental care remains difficult to afford for many people, delaying preventive visits and routine treatment."
        />

        <ProblemItem
          icon={<ShieldAlert className="h-5 w-5" />}
          title="Dental Anxiety"
          body="Fear and uncertainty often discourage people from seeking care until symptoms become severe."
        />

        <ProblemItem
          icon={<MapPin className="h-5 w-5" />}
          title="Limited Access"
          body="Rural and underserved communities frequently face reduced access to dental professionals."
        />

        <ProblemItem
          icon={<SearchCheck className="h-5 w-5" />}
          title="Lack of Early Awareness"
          body="Many individuals struggle to recognize oral-health concerns before they become urgent."
        />

      </div>
    </div>

    {/* Affected Card */}

    <div
      className="
      rounded-[2rem]
      border
      border-cyan-100
      bg-gradient-to-br
      from-cyan-50
      via-white
      to-sky-50
      p-8
      shadow-sm
    "
    >
      <div className="mb-8 flex items-center gap-3">
        <div className="h-10 w-1 rounded-full bg-cyan-500" />
        <h3 className="text-3xl font-bold text-slate-950">
          Who Is Most Affected?
        </h3>
      </div>

      <div className="space-y-7">

        <AffectedItem
          icon={<Users className="h-5 w-5" />}
          title="Lower-Income Communities"
          body="Financial barriers can limit access to preventive dental care and routine checkups."
        />

        <AffectedItem
          icon={<Baby className="h-5 w-5" />}
          title="Children"
          body="Children from lower-income households experience significantly higher rates of untreated cavities."
        />

        <AffectedItem
          icon={<Accessibility className="h-5 w-5" />}
          title="Older Adults"
          body="Mobility, accessibility, and literacy challenges can limit oral-health care access."
        />

        <AffectedItem
          icon={<Building2 className="h-5 w-5" />}
          title="Rural Populations"
          body="Provider shortages and geographic distance can reduce access to timely dental services."
        />

      </div>
    </div>
  </div>
</section>

        {/* Solution Overview */}
<section className="mx-auto max-w-6xl px-6 py-20 pt-8 pb-14">
  {/* Section Header */}
  <div className="max-w-6xl">
    <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
      Solution Overview
    </p>

    <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
      A Mobile-First Oral Health Screening Experience
    </h2>

    <p className="mt-5 text-lg leading-8 text-slate-600">
      Selfie combines smartphone image analysis and contextual questionnaires to
      provide non-diagnostic oral-health risk assessments and educational
      recommendations.
    </p>
  </div>

  {/* Workflow Process */}
  <div className="mt-14 overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-200/70">
    <div className="grid md:grid-cols-5">
      {[
        {
          step: "01",
          title: "Capture",
          desc: "Upload or take an oral photo.",
          color: "from-cyan-50 to-cyan-100",
        },
        {
          step: "02",
          title: "Questionnaire",
          desc: "Answer guided health questions.",
          color: "from-cyan-100 to-sky-100",
        },
        {
          step: "03",
          title: "AI Analysis",
          desc: "Analyze image and context data.",
          color: "from-sky-100 to-blue-100",
        },
        {
          step: "04",
          title: "Risk Report",
          desc: "Generate non-diagnostic risk scores.",
          color: "from-blue-100 to-blue-200",
        },
        {
          step: "05",
          title: "Guidance",
          desc: "Provide educational next steps.",
          color: "from-blue-200 to-cyan-200",
        },
      ].map((item, index) => (
        <div
          key={item.step}
          className={`relative bg-gradient-to-br ${item.color} p-7 md:min-h-[210px]`}
        >
          {index < 4 && (
            <div className="absolute right-[-18px] top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 rotate-45 bg-inherit md:block" />
          )}

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
            {item.step}
          </p>

          <h3 className="mt-4 text-xl font-bold text-slate-950">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Technical Foundation */}
<section className="mx-auto max-w-6xl px-6 py-24 pt-8 pb-14">
  <div className="max-w-6xl">
    <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
      HOW THE SCREENING ENGINE WORKS
    </p>

    <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">
      How Selfie Generates Risk Assessments
    </h2>

    <p className="mt-5 text-lg leading-8 text-slate-600">
      Rather than relying solely on image recognition, Selfie combines
      visual analysis with questionnaire-based context to generate more
      meaningful oral-health risk assessments and educational guidance.
    </p>
  </div>

  <div className="mt-14 grid gap-6 md:grid-cols-[1fr_1fr_1.15fr]">
    <TechnicalCard
      icon={<BrainCircuit className="h-6 w-6" />}
      title="Image Intelligence"
      body="Analyzes oral photographs using computer vision models to identify visible signs of common dental conditions."
      items={[
        "Image quality validation",
        "Visual feature extraction",
        "Multi-condition prediction",
      ]}
      variant="cyan"
    />

    <TechnicalCard
      icon={<ClipboardList className="h-6 w-6" />}
      title="Context Awareness"
      body="Captures risk factors that cannot be determined from images alone."
      items={[
        "Oral hygiene habits",
        "Dental history",
        "Symptoms and discomfort",
      ]}
      variant="sky"
    />

    <TechnicalCard
      icon={<Layers3 className="h-6 w-6" />}
      title="Combined Assessment"
      body="Combines visual and contextual signals to provide clearer screening feedback."
      items={[
        "Risk scores",
        "Educational guidance",
        "Personalized recommendations",
      ]}
      variant="highlight"
    />
  </div>
</section>

{/* Key Design Decisions */}
<section className="relative mx-auto max-w-6xl px-6 py-24 pt-8 pb-14">

  <div
    className="
      absolute
      inset-0
      -z-10
      rounded-[3rem]
      bg-gradient-to-r
      from-cyan-100/60
      via-sky-50/40
      to-blue-100/60
      blur-3xl
    "
  />

  <div>
    <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
      Key Design Decisions
    </p>

    <h2 className="mt-4 max-w-6xl text-xl font-bold tracking-tight text-slate-950 md:text-4xl">
      Designing for Trust, Usability, and Meaningful Screening
    </h2>

    <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
      Product decisions were informed by stakeholder interviews,
      prototype testing, and technical feasibility constraints.
      Each decision aimed to improve trust, usability, and the
      practical value of oral-health screening.
    </p>
  </div>

  <div className="mt-14 grid gap-6 md:grid-cols-2">

    <DecisionCard
      number="01"
      title="Image + Questionnaire"
      challenge="Images alone cannot capture symptoms, dental history, or daily oral-health habits."
      decision="Combine image analysis with a guided questionnaire."
      impact="Provides richer context and more meaningful risk assessments."
    />

    <DecisionCard
      number="02"
      title="Guided Photo Capture"
      challenge="Poor image quality significantly reduces analysis reliability."
      decision="Add photo guidelines and image-quality validation."
      impact="Improves submission consistency and reduces invalid scans."
    />

    <DecisionCard
      number="03"
      title="Visual Risk Communication"
      challenge="Raw probability values were difficult for users to interpret."
      decision="Use color-coded risk levels, summaries, and recommendation cards."
      impact="Allows users to quickly understand key findings."
      featured
    />

    <DecisionCard
      number="04"
      title="Actionable Scan History"
      challenge="Questionnaire answers were not useful during later review."
      decision="Store recommendations and risk summaries instead of raw responses."
      impact="Makes scan history easier to revisit and understand."
    />

  </div>

</section>

      {/* Key Workflow */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-300/60">
          <div className="grid md:grid-cols-[0.9fr_1.2fr]">
            <div className="p-8 text-white md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Product Workflow
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                How Selfie Works
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
                Selfie connects guided image capture, questionnaire input,
                AI-assisted analysis, risk feedback, and scan history into one
                mobile-first screening flow.
              </p>

              <div className="mt-10 space-y-1">
                {features.map((feature, index) => (
                  <button
                    key={feature.title}
                    onClick={() => setActiveFeature(index)}
                    className={`w-full rounded-2xl px-5 py-4 text-left transition ${
                      activeFeature === index
                        ? "bg-white text-slate-950"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 text-xs font-bold tracking-widest ${
                          activeFeature === index
                            ? "text-cyan-600"
                            : "text-slate-500"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p className="text-sm font-semibold">{feature.title}</p>

                        {activeFeature === index && (
                          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                            {feature.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative min-h-[560px] overflow-hidden bg-gradient-to-br from-[#E0F2FE] via-white to-[#BFDBFE]">
              <div className="absolute right-[-120px] top-[-120px] h-96 w-96 rounded-full bg-cyan-300/40 blur-3xl" />
              <div className="absolute bottom-[-120px] left-[-120px] h-96 w-96 rounded-full bg-blue-400/30 blur-3xl" />

              <div className="relative z-10 flex h-full items-center justify-center p-10">
                <img
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="max-h-[500px] w-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function ProblemItem({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-slate-950">
          {title}
        </h4>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          {body}
        </p>
      </div>
    </div>
  );
}

function AffectedItem({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-slate-950">
          {title}
        </h4>

        <p className="mt-1 text-sm leading-6 text-slate-600">
          {body}
        </p>
      </div>
    </div>
  );
}

function PipelineStep({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white">
      {title}
    </div>
  );
}

function PipelineArrow() {
  return <div className="text-center text-cyan-300">↓</div>;
}

function TechnicalCard({
  icon,
  title,
  body,
  items,
  variant,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  items: string[];
  variant: "cyan" | "sky" | "highlight";
}) {
  const styles = {
    cyan: {
      accent: "bg-cyan-400",
      icon: "bg-cyan-50 text-cyan-700",
      card: "border-slate-200 bg-white",
      check: "text-cyan-600",
    },
    sky: {
      accent: "bg-sky-400",
      icon: "bg-sky-50 text-sky-700",
      card: "border-slate-200 bg-white",
      check: "text-sky-600",
    },
    highlight: {
      accent: "bg-blue-500",
      icon: "bg-blue-50 text-blue-700",
      card: "border-blue-200 bg-blue-50/40 shadow-lg shadow-blue-100/60",
      check: "text-blue-600",
    },
  };

  const s = styles[variant];

  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border p-7 ${s.card}`}
    >
      <div className={`absolute left-0 top-0 h-1 w-full ${s.accent}`} />

      <div
        className={`mb-6 flex h-11 w-11 items-center justify-center rounded-2xl ${s.icon}`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-950">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>

      <ul className="mt-7 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${s.check}`} />
            <span className="leading-6 text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DecisionCard({
  number,
  title,
  challenge,
  decision,
  impact,
  featured = false,
}: {
  number: string;
  title: string;
  challenge: string;
  decision: string;
  impact: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`
        rounded-[2rem]
        border
        p-7
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        ${
          featured
            ? "border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50"
            : "border-slate-200 bg-white"
        }
      `}
    >
        <div className="flex items-center gap-4">
        <span
        className={`
        text-3xl font-bold leading-none
        ${
                featured
                ? "text-cyan-500"
                : "text-slate-300"
        }
        `}
        >
        {number}
        </span>

        <h3 className="text-xl font-bold text-slate-950">
        {title}
        </h3>
        </div>  

      <div className="mt-6 space-y-5">

        <DecisionPoint
          label="Challenge"
          text={challenge}
        />

        <DecisionPoint
          label="Decision"
          text={decision}
        />

        <DecisionPoint
          label="Impact"
          text={impact}
        />

      </div>
    </article>
  );
}

function DecisionPoint({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <div className="border-l-2 border-cyan-200 pl-4">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-700">
        {label}
      </p>

      <p className="mt-1 text-sm leading-6 text-slate-600">
        {text}
      </p>
    </div>
  );
}