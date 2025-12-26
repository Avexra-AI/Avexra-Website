export interface MethodologyStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  icon: string;
}

export const methodologySteps: MethodologyStep[] = [
  {
    id: 1,
    title: "Discover & Audit",
    description:
      "We analyze your data infrastructure and identify high-impact automation opportunities.",
    duration: "Week 1–2",
    icon: "travel_explore",
  },
  {
    id: 2,
    title: "Intelligent Architecture",
    description:
      "Blueprinting agentic workflows and selecting the optimal LLM stack for your needs.",
    duration: "Week 3",
    icon: "architecture",
  },
  {
    id: 3,
    title: "Build & Integrate",
    description:
      "Developing custom agents, vector databases, and secure API integrations.",
    duration: "Week 4–6",
    icon: "terminal",
  },
  {
    id: 4,
    title: "Deploy & Optimize",
    description:
      "Live deployment with monitoring, analytics, and continuous optimization.",
    duration: "Ongoing",
    icon: "rocket_launch",
  },
];
