import { Blog } from "@/types/blog";

export const blogs: Blog[] = [
	/* =====================================================
	   FEATURED LONG-FORM BLOG (REFERENCE LEVEL)
	===================================================== */
	{
		title:
			"Building Autonomous Agents: A Complete Guide for Enterprise Architects",
		slug: "building-autonomous-agents",
		excerpt:
			"A deep, practical guide to designing, deploying, and governing agentic AI systems in large enterprises.",
		categories: ["Agentic AI", "Engineering", "Enterprise"],
		tags: [
			"AgenticAI",
			"AutonomousAgents",
			"LLMs",
			"Python",
			"EnterpriseArchitecture",
			"Automation",
		],
		publishedAt: "2023-10-24",
		featured: true,

		coverImage:
			"https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1600",

		content: [
			/* ---------- INTRO ---------- */
			{
				_type: "block",
				style: "normal",
				children: [
					{
						_type: "span",
						text: "Artificial intelligence is undergoing a fundamental shift. We are moving from passive systems that respond to prompts to autonomous agents capable of planning, reasoning, and acting independently across complex environments.",
					},
				],
			},

			{
				_type: "block",
				style: "normal",
				children: [
					{
						_type: "span",
						text: "For enterprise architects, this transition introduces both enormous opportunity and serious architectural responsibility.",
					},
				],
			},

			/* ---------- H2 ---------- */
			{
				_type: "block",
				style: "h2",
				children: [{ _type: "span", text: "What Is an Autonomous Agent?" }],
			},

			{
				_type: "block",
				style: "normal",
				children: [
					{ _type: "span", text: "Traditional automation follows rigid " },
					{ _type: "span", text: "if X then Y", marks: ["code"] },
					{
						_type: "span",
						text: " rules. Autonomous agents operate differently.",
					},
				],
			},

			{
				_type: "block",
				style: "blockquote",
				children: [
					{
						_type: "span",
						text: "An autonomous agent is a system that can perceive its environment, reason about goals, plan actions, and execute those actions with minimal human intervention.",
					},
				],
			},

			/* ---------- CODE ---------- */
			{
				_type: "code",
				language: "python",
				filename: "agent_loop.py",
				code: `def run_agent(goal):
    plan = planner.create(goal)
    while not plan.complete():
        action = plan.next_step()
        tools.execute(action)
    return "Goal achieved"`,
			},

			/* ---------- H2 ---------- */
			{
				_type: "block",
				style: "h2",
				children: [{ _type: "span", text: "Core Architectural Components" }],
			},

			/* ---------- ORDERED LIST ---------- */
			{
				_type: "block",
				style: "normal",
				listItem: "number",
				level: 1,
				children: [
					{ _type: "span", text: "Perception Layer (inputs, events, signals)" },
				],
			},
			{
				_type: "block",
				style: "normal",
				listItem: "number",
				level: 1,
				children: [
					{ _type: "span", text: "Reasoning Engine (LLMs + policies)" },
				],
			},
			{
				_type: "block",
				style: "normal",
				listItem: "number",
				level: 1,
				children: [
					{ _type: "span", text: "Planning Module (task decomposition)" },
				],
			},
			{
				_type: "block",
				style: "normal",
				listItem: "number",
				level: 1,
				children: [
					{ _type: "span", text: "Action Layer (tools, APIs, workflows)" },
				],
			},

			/* ---------- H3 ---------- */
			{
				_type: "block",
				style: "h3",
				children: [{ _type: "span", text: "Why Enterprises Must Be Careful" }],
			},

			{
				_type: "block",
				style: "normal",
				children: [
					{
						_type: "span",
						text: "Without proper guardrails, autonomous agents can create cascading failures, security breaches, and compliance risks.",
					},
				],
			},

			{
				_type: "block",
				style: "normal",
				children: [
					{
						_type: "span",
						text: "Enterprise-grade agentic systems require governance, observability, and human-in-the-loop mechanisms.",
					},
				],
			},
		],
	},

	/* =====================================================
	   REGULAR BLOGS
	===================================================== */

	{
		title: "Vector Databases Explained: A Primer for CTOs",
		slug: "vector-databases-primer",
		excerpt: "What every CTO should know about vector search and embeddings.",
		categories: ["Generative AI"],
		tags: ["VectorDB", "RAG", "Embeddings"],
		publishedAt: "2023-07-20",
		coverImage:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
		content: [],
	},

	{
		title: "Designing Human-in-the-Loop AI Systems",
		slug: "human-in-the-loop-ai",
		excerpt: "Why fully autonomous systems still need humans in the loop.",
		categories: ["AI Safety", "Enterprise"],
		tags: ["HITL", "AI Safety", "Governance"],
		publishedAt: "2023-08-02",
		coverImage:
			"https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200",
		content: [],
	},

	{
		title: "LLM Observability: Monitoring Reasoning at Scale",
		slug: "llm-observability",
		excerpt: "How to monitor, debug, and audit large language model decisions.",
		categories: ["Engineering"],
		tags: ["LLM", "Observability", "Monitoring"],
		publishedAt: "2023-09-01",
		coverImage:
			"https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200",
		content: [],
	},

	{
		title: "RAG vs Fine-Tuning: Choosing the Right Strategy",
		slug: "rag-vs-finetuning",
		excerpt: "A practical comparison for enterprise AI teams.",
		categories: ["Generative AI"],
		tags: ["RAG", "FineTuning", "LLMs"],
		publishedAt: "2023-09-15",
		coverImage:
			"https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200",
		content: [],
	},

	{
		title: "Securing AI Agents in Production",
		slug: "securing-ai-agents",
		excerpt: "Threat models and security practices for autonomous AI systems.",
		categories: ["Security", "AI Safety"],
		tags: ["Security", "AI Agents", "ThreatModeling"],
		publishedAt: "2023-10-05",
		coverImage:
			"https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200",
		content: [],
	},
];
