export interface solutionItem {
	slug: string,
  tag: string,
  title: string,
  desc: string,
  gradient: string,
  cta: string,
  icon: string,
  animationDelay: string
}


 export const solutions  : solutionItem[]=[
  {
    slug: "business-intelligence",
    tag: "CORE OFFERING",
    title: "Agentic AI Systems",
    desc: "Autonomous, goal-driven AI agents that can reason, plan, and execute complex multi-step workflows with minimal human intervention across enterprise systems.",
    gradient: "from-indigo-600/90 via-indigo-500 to-blue-600/90",
    // image: "/illustrations/agentic-ai.png",
    cta: "Explore Agentic AI",
    icon: "neurology",
    animationDelay: "delay-100",

  },
  {
    slug: "intelligent-automation",
    tag: "CUSTOMER & INTERNAL",
    title: "AI Chatbots",
    desc: "Intelligent, context-aware chatbots powered by large language models for customer support, internal knowledge retrieval, onboarding, and real-time assistance.",
    gradient: "from-violet-600/90 via-indigo-500 to-indigo-600/90",
    // image: "/illustrations/ai-chatbot.png",
    cta: "View Chatbot Solutions",
    icon: "chat_bubble",
    animationDelay: "delay-200",

  },
  {
    slug: "ai-powered-platforms",
    tag: "OPERATIONS",
    title: "Business Automation",
    desc: "End-to-end automation of repetitive and decision-heavy business processes, reducing manual effort, improving accuracy, and accelerating operational efficiency.",
    gradient: "from-cyan-600/90 via-blue-500 to-indigo-600/90",
    // image: "/illustrations/automation.png",
    cta: "Automate Your Business",
    icon: "settings_suggest",
    animationDelay: "delay-300",

  },
  {
    slug: "research-and-advanced-ai",
    tag: "DATA & INSIGHTS",
    title: "Predictive Modeling",
    desc: "Advanced machine learning models that forecast trends, detect risks, and uncover actionable insights to support smarter, data-driven business decisions.",
    gradient: "from-purple-600/90 via-fuchsia-500 to-indigo-600/90",
    // image: "/illustrations/predictive.png",
    cta: "Discover Predictive Models",
    icon: "ssid_chart",
    animationDelay: "delay-400",

  },
];