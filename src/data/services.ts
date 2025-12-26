// src/data/services.ts

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  cta: string;
  animationDelay: "delay-1" | "delay-2" | "delay-3";
}

export const services: ServiceItem[] = [
  {
    icon: "neurology",
    title: "Agentic AI Systems",
    description:
      "Autonomous agents designed to plan, reason, and execute complex multi-step workflows without human intervention.",
    cta: "Explore Agents",
    animationDelay: "delay-1",
  },
  {
    icon: "chat_bubble",
    title: "Intelligent Chatbots",
    description:
      "Next-gen conversational AI for 24/7 customer support and internal knowledge retrieval, powered by LLMs.",
    cta: "See Chat Solutions",
    animationDelay: "delay-2",
  },
  {
    icon: "settings_suggest",
    title: "Process Automation",
    description:
      "End-to-end automation of repetitive tasks, streamlining operations to significantly reduce manual overhead and error.",
    cta: "View Workflows",
    animationDelay: "delay-3",
  },
  {
    icon: "ssid_chart",
    title: "Predictive Modeling",
    description:
      "Data-driven insights and forecasting models designed to future-proof strategies and identify market opportunities early.",
    cta: "Analyze Data",
    animationDelay: "delay-1",
  },
  {
    icon: "terminal",
    title: "Custom Software",
    description:
      "Bespoke software solutions architected specifically for your unique business challenges and long-term scalability.",
    cta: "Start Building",
    animationDelay: "delay-2",
  },
  {
    icon: "hub",
    title: "Enterprise Integration",
    description:
      "Seamlessly connecting your fragmented tech stack into a unified, secure, high-performance ecosystem.",
    cta: "Connect Apps",
    animationDelay: "delay-3",
  },
];
