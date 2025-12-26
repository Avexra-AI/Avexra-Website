export interface WhyChooseFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseStat {
  value: number;
  label: string;
  suffix?: string;
}

export const whyChooseFeatures: WhyChooseFeature[] = [
  {
    icon: "psychology",
    title: "AI-First Architecture",
    description:
      "LLMs and autonomous agents form the core — not plugins, but intelligence itself.",
  },
  {
    icon: "code",
    title: "Founder-Led Engineering",
    description:
      "Direct collaboration with senior engineers who design and build your system.",
  },
  {
    icon: "terminal",
    title: "Custom-Built Core",
    description:
      "Bespoke engines designed for your workflows. No templates. No shortcuts.",
  },
  {
    icon: "shield_lock",
    title: "Enterprise Security",
    description:
      "SOC2-ready, isolated, and compliant infrastructure by design.",
  },
  {
    icon: "rocket_launch",
    title: "Rapid Deployment",
    description:
      "Production systems delivered in weeks, not months.",
  },
];

export const whyChooseStats: WhyChooseStat[] = [
  {
    value: 98,
    label: "Retention Rate",
    suffix: "%",
  },
  {
    value: 40,
    label: "Deployments",
    suffix: "+",
  },
];
