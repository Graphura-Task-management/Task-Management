import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Footer from "../components/common/Footer";

const FACTS = [
  "Role-based task assignment and visibility",
  "Clear task ownership across teams",
  "Structured task lifecycle management",
  "Deadline-driven task tracking",
  "Admin, leader, and employee role separation",
  "Designed for multi-team environments",
  "Consistent workflows across projects",
  "Optimized for daily operational use",
  "Centralized task visibility for all roles",
  "Standardized task status handling",
  "Predictable task progression across stages",
  "Clear separation of responsibility and execution",
  "Task-level accountability enforcement",
  "Calendar-aligned deadline management",
  "Unified task and schedule synchronization",
  "Controlled task updates and modifications",
  "Scalable task architecture for growing teams",
  "Designed for long-term operational stability",
  "Minimal cognitive overhead for daily usage",
  "Structured task metadata management",
  "Consistent task behavior across modules",
  "Clear distinction between active and completed tasks",
  "Support for parallel project execution",
  "Reliable task state consistency",
  "Optimized for cross-functional collaboration",
  "Clear task assignment traceability",
  "Support for task review and completion validation",
  "Predictable navigation between task views",
  "Reduced ambiguity in task execution",
  "Improved visibility into workload distribution",
  "Designed for enterprise-grade workflows",
  "Task handling aligned with organizational hierarchy",
  "Structured execution without unnecessary complexity",
  "Optimized for professional work environments",
  "Reliable deadline visibility for employees",
  "Consistent user experience across task states",
  "Clear task ownership handoff mechanisms",
  "Built for disciplined execution tracking",
  "Supports operational clarity at scale",
  "Focused on execution rather than noise",
  "Designed for accountability-driven teams",
  "Stable task workflows across releases",
  "Aligned with real-world organizational processes",
  "Supports measurable task progress tracking",
];

export default function Landing() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % FACTS.length), 2800);
    return () => clearInterval(id);
  }, []);

  const visibleFacts = useMemo(() => {
    return Array.from(
      { length: 4 },
      (_, i) => FACTS[(index + i) % FACTS.length],
    );
  }, [index]);

  return (
    <div className="min-h-screen bg-white text-[#0F2F2C]">
      <Topbar />

      {/* HERO */}
      <section className="border-b border-[#E6ECEA]">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#235857]">
              Task Management
              <br />
              built for structured execution
            </h1>

            <p className="mt-6 text-lg text-[#5B6B68] max-w-xl">
              Graphura enables teams to plan, assign, and execute work through
              structured workflows that create accountability and operational
              clarity.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                to="/signup"
                className="
                bg-[#235857]
                text-white
                px-7 py-3.5
                rounded-lg
                font-semibold
                transition-all duration-300
                hover:-translate-y-[2px]
                hover:shadow-lg
                hover:bg-[#1B4441]
                active:translate-y-0
                "
              >
                Create workspace
              </Link>

              <Link
                to="/login"
                className="
                border border-[#D4DFDC]
                px-7 py-3.5
                rounded-lg
                font-semibold
                transition-all duration-300
                hover:-translate-y-[2px]
                hover:shadow-md
                hover:bg-[#F6FAF9]
                "
              >
                Sign in
              </Link>
            </div>
          </div>

          {/* RIGHT — IMPORTANT */}
          <div
            className="
            bg-white
            border border-[#E6ECEA]
            rounded-2xl
            p-7
            transition-all duration-300
            hover:shadow-xl
            hover:-translate-y-1
            "
          >
            <div className="flex justify-between mb-5">
              <h3 className="font-semibold text-[#235857]">
                Platform capabilities
              </h3>

              <span className="text-xs bg-[#EEF4F3] px-3 py-1 rounded-full">
                Live
              </span>
            </div>

            <ul className="space-y-4">
              {visibleFacts.map((fact, i) => (
                <li key={i} className="flex gap-3 text-[#4F6360]">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#235857]" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <Feature
            title="Role-based access"
            desc="Permissions and visibility are defined by role to ensure responsibility clarity."
          />

          <Feature
            title="Structured workflows"
            desc="Tasks move through defined stages, maintaining consistency from assignment to completion."
          />

          <Feature
            title="Operational readiness"
            desc="Built to support growing teams with disciplined execution and long-term scalability."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div
      className="
      border border-[#E6ECEA]
      rounded-2xl
      p-7
      transition-all duration-300
      hover:-translate-y-2
      hover:shadow-xl
      cursor-pointer
      "
    >
      <h4 className="font-semibold text-[#235857] mb-2">{title}</h4>

      <p className="text-[#5B6B68] leading-relaxed">{desc}</p>
    </div>
  );
}
