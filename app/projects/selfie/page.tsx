"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import {
  Brain,
  Smartphone,
  Server,
  ShieldCheck,
  Cloud,
  FileCheck,
  AlertTriangle,
  ArrowRight,
  Gauge,
  ServerCog,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Target,
  CheckCircle2,
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
const sections = [
  ["01", "Problem", "problem"],
  ["02", "Solution", "solution"],
  ["03", "Technical", "technical"],
  ["04", "Design", "design"],
  ["05", "Workflow", "workflow"],
  ["06", "Iterations", "iterations"],
  ["07", "Validation", "validation"],
  ["08", "Delivered", "delivered"],
  ["09", "Future", "future"],
  ["10", "Reflection", "reflection"],
];

export default function SelfieCaseStudyPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeSection, setActiveSection] = useState("problem");

  useEffect(() => {
  const handleScroll = () => {
    let currentSection = "problem";

    sections.forEach(([, , id]) => {
      const element = document.getElementById(id);

      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= 180) {
          currentSection = id;
        }
      }
    });

    setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;

  const y = element.getBoundingClientRect().top + window.scrollY - 80;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
  

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

{/* Section Id */}
<section className="sticky top-0 z-50 bg-white/90 backdrop-blur border-y border-slate-200">
  <div className="max-w-7xl mx-auto px-6">

    <nav className="flex gap-8 overflow-x-auto py-4 scrollbar-hide">

      {sections.map(([num, label, id]) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="group flex items-center gap-2 whitespace-nowrap transition-all"
        >
          <span
            className={`
              text-xs font-medium transition-colors
              ${
                activeSection === id
                  ? "text-cyan-600"
                  : "text-slate-400"
              }
            `}
          >
            {num}
          </span>

          <span
            className={`
              text-sm font-medium transition-colors
              ${
                activeSection === id
                  ? "text-slate-950"
                  : "text-slate-500"
              }
            `}
          >
            {label}
          </span>
        </button>
      ))}

    </nav>

  </div>
</section>

{/* Problem & Opportunity */}

<section
  id="problem"
  className="mx-auto max-w-6xl px-6 pt-8 pb-14"
>
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
<section
  id="solution"
  className="mx-auto max-w-6xl px-6 py-20 pt-8 pb-14"
>
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
<section
  id="technical"
  className="mx-auto max-w-6xl px-6 py-24 pt-8 pb-14"
>
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
<section 
  id="design"
  className="relative mx-auto max-w-6xl px-6 py-24 pt-8 pb-14"
>

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

{/* Workflow Design */}
<section
  id="workflow"
  className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24"
>
  <div className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-300/60">
    <div className="grid md:grid-cols-[0.95fr_1.05fr]">
      {/* Left Content */}
      <div className="flex h-full flex-col justify-center p-10 text-white md:p-14">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
          Workflow Design
        </p>

        <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Designing a screening workflow that reduces uncertainty
        </h2>

        <p className="mb-12 max-w-lg leading-7 text-slate-300">
          Many users are unfamiliar with oral health screening and may not know
          how to capture a usable image, what information is important, or how
          to interpret AI-generated results. The workflow was designed to guide
          users through each step and translate technical outputs into
          understandable risk feedback.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Design Challenge
            </p>

            <div className="space-y-3">
              {[
                "Poor-quality oral images reduce reliability",
                "Images alone cannot capture all risk factors",
                "AI outputs can be difficult to interpret",
                "Users need clear guidance after screening",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Design Response
            </p>

            <div className="space-y-3">
              {[
                "Guided image capture",
                "Contextual questionnaire",
                "Combined risk assessment",
                "Visual risk summaries",
                "History tracking and follow-up",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/20 text-xs font-semibold text-cyan-300">
                    {index + 1}
                  </div>

                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Flow */}
      <div className="relative min-h-[620px] overflow-hidden bg-gradient-to-br from-[#E0F2FE] via-white to-[#BFDBFE] p-8 md:p-12">
        <div className="absolute right-[-120px] top-[-120px] h-96 w-96 rounded-full bg-cyan-300/40 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-120px] h-96 w-96 rounded-full bg-blue-400/30 blur-3xl" />

        <div className="relative z-10 flex h-full flex-col justify-center">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">
            User Journey
          </p>

          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Understand",
                desc: "User recognizes a concern or wants to check their oral health.",
              },
              {
                step: "02",
                title: "Capture",
                desc: "Photo guidance helps users submit a clearer oral image.",
              },
              {
                step: "03",
                title: "Assess",
                desc: "Questionnaire context supports risk assessment beyond image data.",
              },
              {
                step: "04",
                title: "Learn",
                desc: "Risk levels and recommendations translate results into understandable feedback.",
              },
              {
                step: "05",
                title: "Track",
                desc: "Scan history helps users revisit previous screenings and recommendations.",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                {index < 4 && (
                  <div className="absolute left-[23px] top-14 h-8 w-px bg-cyan-200" />
                )}

                <div className="flex gap-4 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-sm font-bold text-cyan-700">
                    {item.step}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-950">{item.title}</h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-100 bg-white/80 p-5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              Design Rationale
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              The flow moves from uncertainty to action: helping users capture,
              assess, understand, and revisit screening information without
              treating the app as a diagnostic tool.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* Design Iterations Section */}
<section id="iterations" className="mx-auto max-w-6xl px-6 py-20 pt-8 pb-14">
  <div className="max-w-6xl mx-auto px-6">
    {/* Section Header */}
    <div className="max-w-6xl mb-16">
      <p className="text-cyan-700 font-semibold uppercase tracking-wider mb-4">
        Design Iterations
      </p>

      <h2 className="text-4xl md:text-4xl font-bold text-slate-900 mb-6">
        Refining the experience through feedback
      </h2>

      <p className="text-lg text-slate-600 leading-relaxed">
        Selfie evolved through stakeholder feedback, usability testing, and
        technical integration. Each iteration focused on reducing friction,
        improving clarity, and helping users better understand their
        non-diagnostic oral health risk results.
      </p>
    </div>

    {/* Main Iteration Card */}
    <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Panel */}
        <div className="bg-slate-950 text-white p-10 md:p-12">
          <p className="text-cyan-300 font-semibold uppercase tracking-wider mb-4">
            Key Challenge
          </p>

          <h3 className="text-3xl font-bold mb-6">
            The questionnaire added useful context, but created workflow
            friction.
          </h3>

          <p className="text-slate-300 leading-relaxed text-left mb-8">
            Early versions collected broader lifestyle and demographic
            information. While useful for risk estimation, testing showed that
            the flow felt repetitive and slowed down the scan experience.
          </p>

          <div className="space-y-4">
            <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-cyan-300" />
                <p className="text-sm text-slate-400">Design Goal</p>
              </div>

              <p className="font-semibold leading-relaxed">
                Reduce cognitive load without removing meaningful risk signals.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/10 p-5">
              <div className="flex items-center gap-3 mb-2">
                <ClipboardList className="w-5 h-5 text-cyan-300" />
                <p className="text-sm text-slate-400">Product Decision</p>
              </div>

              <p className="font-semibold leading-relaxed">
                Prioritize observable oral-health indicators over broad
                background questions.
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="p-10 md:p-12 bg-gradient-to-br from-white to-cyan-50/40">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-lg font-bold text-slate-900">Before</h4>

                <span className="text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
                  Longer Flow
                </span>
              </div>

              <ul className="space-y-3 text-slate-600">
                {[
                  "Age group",
                  "Dental visits",
                  "Hygiene habits",
                  "Diet sugar",
                  "Staining habits",
                  "Dry mouth",
                  "Systemic health",
                  "Trauma history",
                  "Bleeding gums",
                  "Pain sensitivity",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="rounded-3xl border border-cyan-200 bg-cyan-50/80 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-lg font-bold text-slate-900">After</h4>

                <span className="text-xs font-semibold text-cyan-700 bg-white border border-cyan-200 px-3 py-1 rounded-full">
                  Refined Flow
                </span>
              </div>

              <ul className="space-y-3 text-slate-700">
                {[
                  "Missing teeth",
                  "Last cleaning",
                  "Red or swollen gums",
                  "Loose teeth",
                  "Hard deposits",
                  "Visible holes",
                  "Bad breath",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Sparkles className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Outcome */}
      <div className="border-t border-slate-200 bg-gradient-to-r from-cyan-50 via-sky-50 to-blue-50 p-8 md:p-10">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-white border border-cyan-200 flex items-center justify-center shrink-0">
            <TrendingUp className="w-6 h-6 text-cyan-600" />
          </div>

          <div>
            <p className="text-cyan-700 text-sm font-semibold uppercase tracking-wider mb-2">
              Outcome
            </p>

            <h4 className="text-2xl font-bold text-slate-900">
              A shorter, clearer, and more focused scan experience
            </h4>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            "Reduced questionnaire complexity",
            "Improved workflow clarity",
            "Focused on observable risk indicators",
            "Created a more streamlined scan experience",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl bg-white/80 border border-white p-4"
            >
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
              <span className="text-slate-700 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    
  </div>
</section>

{/* Validation & Testing */}
<section id="validation" className="scroll-mt-24 py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <div className="max-w-6xl mb-16">
      <p className="text-cyan-700 font-semibold uppercase tracking-wider mb-4">
        Validation & Testing
      </p>

      <h2 className="text-4xl font-bold text-slate-900 mb-6">
        Testing the experience beyond the happy path
      </h2>

      <p className="text-lg text-slate-600 leading-relaxed">
        Beyond implementing the core workflow, the project was validated
        through stakeholder feedback, failure testing, and deployment
        verification to ensure the experience remained understandable,
        recoverable, and reliable.
      </p>
    </div>

    <div className="space-y-12">
      {/* User Feedback */}
      <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="p-10 md:p-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-cyan-600" />
            </div>

            <p className="text-cyan-700 font-semibold uppercase tracking-[0.18em]">
              User Feedback
            </p>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-4xl mb-6">
            Integration demos revealed usability issues in the results experience
          </h3>

          <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mb-12">
            Stakeholders found the original results page difficult to scan.
            Important findings were buried within large blocks of text, making it
            difficult to quickly understand screening outcomes.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-semibold mb-4">
                Problem
              </p>

              <p className="text-slate-600 leading-relaxed">
                Risk information was text-heavy and key findings were buried
                within dense questionnaire answers.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-semibold mb-4">
                Solution
              </p>

              <div className="space-y-3">
                {[
                  "Color-coded risk levels",
                  "Visual risk summaries",
                  "Recommendations instead of raw answers",
                  "Scan timestamps",
                  "Removal of demo-only elements",
                  "Reduced text density",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-sky-50 border border-cyan-100 p-6 h-full">
              <p className="text-xs uppercase tracking-[0.15em] text-cyan-700 font-semibold mb-3">
                Result
              </p>

              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Faster risk recognition
              </h4>

              <p className="text-slate-600 leading-relaxed">
                Users were able to identify key oral health risks more quickly
                while the simplified presentation reduced cognitive load.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border-t border-slate-200 p-4 md:p-6">
          <Image
            src="/selfie/validation/integration-feedback.png"
            alt="Integration Demo Feedback"
            width={2000}
            height={1200}
            className="w-full h-auto rounded-3xl shadow-xl border border-slate-200"
          />
        </div>
      </div>

      {/* Error Recovery */}
      <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="p-10 md:p-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-sky-600" />
            </div>

            <p className="text-sky-700 font-semibold uppercase tracking-[0.18em]">
              Error Recovery
            </p>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-4xl mb-6">
            Users needed clear feedback when submissions failed
          </h3>

          <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mb-12">
            Network interruptions and backend failures can occur in real-world
            conditions. Validation focused on ensuring that users understood what
            happened and how to recover.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-semibold mb-4">
                Scenarios Tested
              </p>

              <p className="text-slate-600 leading-relaxed">
                Simulated endpoint failures, invalid requests, and network
                interruptions during questionnaire submission.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-semibold mb-4">
                Validation
              </p>

              <div className="space-y-3">
                {[
                  "Backend endpoint failures",
                  "Submission request errors",
                  "Network interruption scenarios",
                  "User-facing error messages",
                  "Recovery and retry workflows",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-100 p-6 h-full">
              <p className="text-xs uppercase tracking-[0.15em] text-sky-700 font-semibold mb-3">
                Impact
              </p>

              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Clear recovery path
              </h4>

              <p className="text-slate-600 leading-relaxed">
                Users received actionable feedback and could retry submissions
                instead of being left uncertain about system status.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border-t border-slate-200 p-4 md:p-6">
          <Image
            src="/selfie/validation/error-recovery.png"
            alt="Error Recovery Validation"
            width={2000}
            height={1200}
            className="w-full h-auto rounded-3xl shadow-xl border border-slate-200"
          />
        </div>
      </div>

      {/* Secure Deployment */}
      <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="p-10 md:p-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>

            <p className="text-blue-700 font-semibold uppercase tracking-[0.18em]">
              Secure Deployment
            </p>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-4xl mb-6">
            The deployed system was validated through HTTPS communication
          </h3>

          <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mb-12">
            End-to-end testing verified that image uploads, questionnaire
            responses, and analysis requests could travel securely between the
            mobile application and backend service.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-semibold mb-4">
                What Was Verified
              </p>

              <p className="text-slate-600 leading-relaxed">
                Secure communication between the deployed frontend and backend
                environment using TLS-protected HTTPS endpoints.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-semibold mb-4">
                Validation
              </p>

              <div className="space-y-3">
                {[
                  "TLS / HTTPS verification",
                  "Frontend-backend communication",
                  "Image upload requests",
                  "Questionnaire payload transfer",
                  "End-to-end API workflow",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 p-6 h-full">
              <p className="text-xs uppercase tracking-[0.15em] text-blue-700 font-semibold mb-3">
                Impact
              </p>

              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Secure end-to-end screening workflow
              </h4>

              <p className="text-slate-600 leading-relaxed">
                Successfully validated a complete image-to-result screening
                workflow through a deployed backend service.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border-t border-slate-200 p-4 md:p-6">
          <Image
            src="/selfie/validation/tls-validation.png"
            alt="TLS Validation"
            width={2000}
            height={1200}
            className="w-full h-auto rounded-3xl shadow-xl border border-slate-200"
          />
        </div>
      </div>
    </div>
  </div>
</section>

{/* What Was Delivered */}
<section id="delivered" className="scroll-mt-24 py-28 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="max-w-6xl mb-16">
      <p className="text-cyan-700 font-semibold uppercase tracking-wider mb-4">
        What Was Delivered
      </p>

      <h2 className="text-4xl font-bold text-slate-900 mb-6">
        A complete image-to-result oral health screening workflow
      </h2>

      <p className="text-lg text-slate-600 leading-relaxed">
        The final prototype integrated mobile image capture, questionnaire
        input, AI-assisted risk assessment, result visualization, scan history,
        and secure backend communication.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-6 mb-16">
      {[
        {
          icon: Brain,
          title: "4 Conditions",
          desc: "Calculus, caries, gingivitis, and tooth discoloration screening.",
        },
        {
          icon: Smartphone,
          title: "Mobile Workflow",
          desc: "End-to-end scan flow from image capture to risk results.",
        },
        {
          icon: Server,
          title: "AI + Backend",
          desc: "Image analysis and questionnaire data processed through FastAPI.",
        },
        {
          icon: ShieldCheck,
          title: "Secure API",
          desc: "HTTPS backend communication validated during deployment.",
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
              <Icon className="w-6 h-6 text-cyan-600" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {item.title}
            </h3>

            <p className="text-slate-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>

    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700 mb-3">
        Final Product
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mb-8">
        Key screens from the completed prototype
      </h3>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            src: "/selfie/landing.jpg",
            label: "Landing",
          },
          {
            src: "/selfie/questionnaire.jpg",
            label: "Questionnaire",
          },
          {
            src: "/selfie/results-screen.jpg",
            label: "Risk Results",
          },
          {
            src: "/selfie/feature-history.jpg",
            label: "Scan History",
          },
        ].map((screen) => (
          <div key={screen.label}>
            <Image
              src={screen.src}
              alt={screen.label}
              width={800}
              height={1600}
              className="rounded-2xl border border-slate-200 shadow-md w-full h-auto"
            />

            <p className="mt-3 text-center text-sm text-slate-600">
              {screen.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Future Improvements */}
<section id="delivered" className="scroll-mt-24 py-28 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="max-w-6xl mb-16">
      <p className="text-cyan-700 font-semibold uppercase tracking-wider mb-4">
        Future Improvements
      </p>

      <h2 className="text-4xl font-bold text-slate-900 mb-6">
        Extending Selfie beyond the high-fidelity prototype
      </h2>

      <p className="text-lg text-slate-600 leading-relaxed">
        Several planned features were moved to future iterations to prioritize
        a stable core workflow, validated API integration, and a complete demo
        experience within the project timeline.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          icon: Cloud,
          title: "Cloud Infrastructure",
          current: "Current implementation stores user data locally.",
          items: [
            "Cloud account storage",
            "Cross-device synchronization",
            "Persistent user profiles",
            "Scalable backend architecture",
          ],
        },
        {
          icon: FileCheck,
          title: "Compliance & Privacy",
          current: "Current system includes Terms & Conditions acknowledgement.",
          items: [
            "Timestamped consent records",
            "Version-controlled agreements",
            "Audit trails",
            "Improved regulatory traceability",
          ],
        },
        {
          icon: Accessibility,
          title: "Accessibility Enhancements",
          current: "User feedback highlighted accessibility and comfort needs.",
          items: [
            "Color-blind friendly palettes",
            "Dark mode support",
            "Voice assistance",
            "Expanded WCAG 2.1 AA support",
          ],
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-cyan-50/50 p-8 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-white border border-cyan-100 flex items-center justify-center mb-6">
              <Icon className="w-6 h-6 text-cyan-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {item.title}
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6">
              {item.current}
            </p>

            <div className="space-y-3">
              {item.items.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
      
      {/* Reflection Section */}
      <section id="reflection" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-900">
              Reflection
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              Key lessons learned throughout the design, development, and
              evaluation of Selfie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📊</div>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Data Integrity Matters
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Dataset inconsistencies highlighted how sensitive machine
                learning systems are to labeling quality. Addressing uncertain
                labels required adapting the training process and reinforced
                the importance of early validation and stakeholder alignment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🔄</div>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Iteration Takes Time
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Integrating user feedback, mobile development, backend
                communication, and testing required more time than initially
                planned. Continuous iteration ultimately resulted in a more
                refined and user-centered experience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border border-sky-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💡</div>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Human-Centered AI
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Building Selfie demonstrated that successful healthcare
                technology depends on more than model performance. User trust,
                accessibility, workflow simplicity, and clear communication
                are equally important for creating meaningful experiences.
              </p>
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