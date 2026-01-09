import { ServiceDetail } from "@/types/service";

export const serviceDetails: ServiceDetail[] = [
	// =========================
	// Agentic AI Systems
	// =========================
	{
		slug: "agentic-ai",
		hero: {
			titleParts: [
				{ text: "Agentic AI Systems for " },
				{ text: "Autonomous Business Operations", highlight: true },
			],
			description: [
				"Avexra AI specializes in building Agentic AI Systems that enable autonomous decision-making, complex planning, and tool-driven execution.",
				"Our agents move beyond traditional automation to orchestrate workflows, systems, and decisions with minimal human intervention.",
			],
			primaryCta: "Build Your Agent",
			secondaryCta: "Explore Technical Docs",
			image: "/services/agentic-ai.png",
		},
		capabilities: [
			{
				icon: "neurology",
				title: "Autonomous Task Planning",
				description:
					"Agents break down high-level goals into actionable tasks and execute them independently without constant supervision.",
			},
			{
				icon: "hub",
				title: "Multi-Agent Orchestration",
				description:
					"Hierarchical agent collaboration where multiple agents coordinate to solve complex enterprise workflows.",
			},
			{
				icon: "psychology",
				title: "Context-Aware Reasoning",
				description:
					"Agents reason using business logic, historical data, and evolving constraints to make informed decisions.",
			},
			{
				icon: "settings",
				title: "Tool Usage",
				description:
					"Seamless interaction with APIs, databases, SaaS platforms, and internal tools to take real-world actions.",
			},
			{
				icon: "security",
				title: "Fault Tolerance",
				description:
					"Self-healing workflows with fallback strategies and recovery mechanisms to ensure reliability.",
			},
		],
		useCases: [
			{
				tag: "STRATEGY",
				title: "Analytics & Reporting Agents",
				description:
					"Deploy autonomous agents that pull data from multiple sources, perform statistical analysis, and generate executive-ready reports with contextual insights.",
				image: "/services/usecases/image1.png",
				tools: ["Tableau", "SQL", "Python"],
			},
			{
				tag: "INFRA",
				title: "Autonomous Data Pipelines",
				description:
					"Agents monitor data quality, autonomously resolve schema mismatches, deduplicate records, and route data automatically in real time.",
				image: "/services/usecases/image2.png",
				tools: ["Snowflake", "DBT", "Airflow"],
			},
			{
				tag: "OPERATIONS",
				title: "Intelligent Workflow Coordination",
				description:
					"Orchestrate complex cross-departmental workflows.Our AI Agents manage dependencies, request approvals only when necessary, and ensure milestones are hit autonomously.",
				image: "/services/usecases/image3.png",
				tools: ["Slack", "Asana", "Salesforce"],
			},
			{
				tag: "OPS",
				title: "Decision Support Agents",
				description:
					"AI-powered decision-support agents that analyze real-time operational data, identify patterns, and recommend optimal actions to assist operations teams in high-impact scenarios.",
				image: "/services/usecases/image1.png",
				tools: ["LLMs", "Vector DBs", "Dashboards"],
			},
			{
				tag: "INTERNAL",
				title: "Internal AI Assistants",
				description:
					"AI assistants designed to support internal teams by retrieving knowledge, automating repetitive tasks, and improving collaboration across departments.",
				image: "/services/usecases/image2.png",
				tools: ["Slack", "Notion", "Internal APIs"],
			},
		],
		cta: {
			titleParts: [
				{ text: "Ready to deploy your " },
				{ text: "Autonomous Workforce?", highlight: true },
			],
			description:
				"Move beyond automation and let intelligent agents run your operations.",
			primary: "Book a Strategy Session",
			secondary: "Talk to Experts",
		},
	},

	// =========================
	// Intelligent Chatbots
	// =========================
	{
		slug: "intelligent-chatbots",
		hero: {
			titleParts: [
				{ text: "Intelligent AI Chatbots " },
				{ text: "Built for Real ", highlight: true },
				{ text: "Business Conversations" },
			],
			description: [
				"Avexra AI builds enterprise-grade chatbots that deliver accurate, context-aware, and human-like interactions.",
				"Powered by LLMs and Retrieval-Augmented Generation (RAG), our chatbots integrate seamlessly with enterprise systems.",
			],
			primaryCta: "Build a Chatbot",
			secondaryCta: "View Demo",
			image: "/services/intelligent-chatbots.png",
		},
		capabilities: [
			{
				icon: "psychology",
				title: "LLM Intelligence",
				description:
					"Powered by GPT-4 and custom fine-tuned LLMs optimized for business-specific conversational logic.",
			},
			{
				icon: "search",
				title: "RAG Retrieval",
				description:
					"Grounded responses using Retrieval-Augmented Generation from your provided data.",
			},
			{
				icon: "language",
				title: "Multilingual",
				description:
					"Native multilingual conversations with cultural and contextual accuracy in over 95 languages.",
			},
			{
				icon: "lock",
				title: "Secure Access",
				description:
					"Enterprise-grade security with SOC2 compliant data handling with strict PII masking protocols.",
			},
			{
				icon: "analytics",
				title: "Analytics",
				description:
					"Real-time insights into conversations, sentiment, and resolution performance.",
			},
		],
		useCases: [
			{
				tag: "ENGAGEMENT",
				title: "Omnichannel Customer Engagement",
				description:
					"Meet your customers where they are. We integrate AI agents  seamlessly into WhatsApp, Instagram, and Telegram to provide instant support and drive sales through conversational commerce.",
				image: "/services/usecases/image1.png",
				tools: ["WhatsApp API", "Instagram", "Meta Business"],
			},
			{
				tag: "SUPPORT",
				title: "Autonomous 24/7 Global Support",
				description:
					"Always-on AI support handling Tier-1 and Tier-2 queries, escalating only complex cases to human agents. Deliver premium support across all time zones without increasing headcount.",
				image: "/services/usecases/image2.png",
				tools: ["Zendesk", "CRM", "Helpdesk"],
			},
			{
				tag: "INTERNAL",
				title: "Internal Knowledge Assistants",
				description:
					"Empower your employees with an internal 'Brain'. Secure internal chatbots that index company knowledge from Notion, Slack, and internal documents to answer operational questions instantly.",
				image: "/services/usecases/image3.png",
				tools: ["Notion", "Slack", "Vector DB"],
			},
			{
				tag: "SALES",
				title: "Sales & Lead Qualification Bots",
				description:
					"Conversational agents that qualify leads, answer product questions, capture intent signals, and route prospects to the appropriate sales teams.",
				image: "/services/usecases/image1.png",
				tools: ["CRM", "HubSpot", "Salesforce"],
			},
			{
				tag: "HR",
				title: "Employee Onboarding Assistants",
				description:
					"Guided onboarding experiences delivered through chat interfaces to help new hires complete documentation and training efficiently.",
				image: "/services/usecases/image2.png",
				tools: ["HRMS", "Slack", "Notion"],
			},
			{
				tag: "DATA",
				title: "Conversational Dashboards",
				description:
					"Chat-based analytics interfaces that allow users to query business data using natural language, generate real-time insights, and interact with dashboards without writing queries or navigating complex BI tools.",
				image: "/services/usecases/image3.png",
				tools: ["LLMs", "BI Tools", "APIs"],
			},
		],
		cta: {
			titleParts: [
				{ text: "Transform your " },
				{ text: "Customer Experience", highlight: true },
				{ text: " today." },
			],
			description:
				"Deploy intelligent agents that speak your brand's language and know your business inside out?",
			primary: "Start Chatbot Project",
			secondary: "Contact Sales",
		},
	},

	// =========================
	// Process Automation
	// =========================
	{
		slug: "process-automation",
		hero: {
			titleParts: [
				{ text: "AI-Driven " },
				{ text: "Process Automation", highlight: true },
				{ text: " for Scalable Efficiency" },
			],
			description: [
				"Avexra AI delivers AI-powered process automation solutions that eliminate repetitive tasks and reduce operational friction.",
				"By combining automation workflows with intelligent decision-making, we help organizations scale efficiently.",
			],
			primaryCta: "Audit Processes",
			secondaryCta: "View Workflows",
			image: "/services/process-automation.png",
		},
		capabilities: [
			{
				icon: "settings_suggest",
				title: "Workflow Automation",
				description:
					"End-to-End intelligent automation pipelines that eliminate manual handoffs and bottlenecks.",
			},
			{
				icon: "hub",
				title: "System Integration",
				description:
					"Seamless integration with enterprise systems and APIs for automated actions.",
			},
			{
				icon: "psychology",
				title: "Adaptive Decision Logic",
				description:
					"AI-driven logic that dynamically adapts workflows based on conditions and data.",
			},
			{
				icon: "error",
				title: "Monitoring & Error Handling",
				description:
					"Self-healing pipelines with automated retries and human-in-the-loop escalations.",
			},
			{
				icon: "trending_up",
				title: "Scalable Automation Pipelines",
				description:
					"Automation designed to scale with increasing data and process complexity without latency.",
			},
		],
		useCases: [
			{
				tag: "FINANCE OPS",
				title: "Intelligent Invoice Processing",
				description:
					"Say goodbye to manual data entry. Our systems use advanced OCR and NLP to extract data from incoming invoices, validate against POs, and sync directly with your accounting software—reducing processing time from days to seconds.",
				image: "/services/usecases/image1.png",
				tools: ["ERP", "OCR", "Accounting Systems"],
			},
			{
				tag: "ONBOARDING",
				title: "Customer Onboarding Automation",
				description: `Zero-touch onboarding workflows automate the entire journey from contract signature eto product setup. Orchestrate DocuSign executions, CRM updates, Slack alerts, and automated welcome sequences to ensure every client starts their journey with a "wow" experience.`,
				image: "/services/usecases/image2.png",
				tools: ["CRM", "Email Automation", "APIs"],
			},
			{
				tag: "OPERATIONS",
				title: "Operational Task Automation",
				description:
					"Automate day-to-day operational tasks across logistics and inventory to improve efficiency.",
				image: "/services/usecases/image3.png",
				tools: ["Workflow Engines", "Schedulers"],
			},
			{
				tag: "HR OPS",
				title: "HR & Compliance Automation",
				description:
					"Automation of HR and compliance processes including document verification, policy enforcement, employee records management, and regulatory reporting to reduce manual effort and ensure consistency.",
				image: "/services/usecases/image1.png",
				tools: ["HRMS", "Document Systems"],
			},
			{
				tag: "REPORTING",
				title: "Reporting & Alert Systems",
				description:
					"Automated reporting and alerting systems that generate scheduled reports, monitor key metrics, and notify stakeholders in real time when predefined thresholds or anomalies are detected.",
				image: "/services/usecases/image2.png",
				tools: ["BI Tools", "Dashboards", "Email"],
			},
		],
		cta: {
			titleParts: [
				{ text: "Eliminate " },
				{ text: "manual processes", highlight: true },
			],
			description:
				"Join the forward-thinking enterprises building the future of work with Avexra AI's intelligent automation frameworks.",
			primary: "Start Automation",
			secondary: "Talk to Us",
		},
	},

	// =========================
	// Predictive Modeling
	// =========================
	{
		slug: "predictive-modeling",
		hero: {
			titleParts: [
				{ text: "Predictive Modeling & " },
				{ text: "Analytics ", highlight: true },
				{ text: "for Decisions" },
			],
			description: [
				"Avexra AI builds predictive systems that transform raw data into actionable foresight.",
				"Anticipate trends, detect risks, and optimize outcomes before they happen.",
			],
			primaryCta: "Explore Predictive AI",
			secondaryCta: "View Methodology",
			image: "/services/predictive-modeling.png",
		},
		capabilities: [
			{
				icon: "ssid_chart",
				title: "ML Model Development",
				description:
					"Custom-trained machine learning models tailored to your proprietary datasets.",
			},
			{
				icon: "timeline",
				title: "Forecasting & Trend Analysis",
				description:
					"Time-series forecasting to identify patterns and anticipate shifts.",
			},
			{
				icon: "warning",
				title: "Risk & Anomaly Detection",
				description:
					"Instant detection of unusual patterns and risk signals to enable proactive mitigation strategies.",
			},
			{
				icon: "monitoring",
				title: "Model Evaluation & Monitoring",
				description:
					"Real-time health checks to prevent model drift and ensure continued prediction accuracy.",
			},
			{
				icon: "insights",
				title: "Decision Support",
				description:
					"Actionable dashboards and decision-support systems that help stakeholders make informed, data-driven choices.",
			},
		],
		useCases: [
			{
				tag: "REVENUE",
				title: "Sales & Demand Forecasting",
				description:
					"Move beyond simple averages. Our models analyze seasonality, market indices, and CRM velocity to predict quarterly revenue with high accuracy, enabling better resource allocation.",
				image: "/services/usecases/image1.png",
				tools: ["Time-Series Models", "CRM Data", "Python"],
			},
			{
				tag: "MARKETING",
				title: "Customer Behavior Prediction",
				description:
					"Understand the 'why' before the 'what'. We model individual customer lifecycles to predict churn probability and lifetime value, allowing for hyper-personalized engagement.",
				image: "/services/usecases/image2.png",
				tools: ["CLV Models", "Segmentation"],
			},
			{
				tag: "RETENTION",
				title: "Proactive Churn & Risk Analysis",
				description:
					"Stop churn before it starts. Our AI identifies subtle, early disengagement signals and flags at-risk accounts weeks before they cancel, triggering automated retention workflows.",
				image: "/services/usecases/image3.png",
				tools: ["Risk Scoring", "Automation", "Dashboards"],
			},
			{
				tag: "OPS",
				title: "Operational Optimization",
				description:
					"Predictive systems that identify customers, transactions, or operations at risk by detecting early warning signals, allowing teams to take proactive actions before issues escalate.",
				image: "/services/usecases/image1.png",
				tools: ["Optimization Models", "Data Pipelines"],
			},
			{
				tag: "MARKET",
				title: "Market Trend Identification",
				description:
					"Advanced analytics systems that analyze market data, competitor signals, and external indicators to identify emerging trends, opportunities, and strategic risks ahead of time.",
				image: "/services/usecases/image2.png",
				tools: ["Analytics Tools", "External Data"],
			},
		],
		cta: {
			titleParts: [
				{ text: "Ready to turn data into " },
				{ text: "future foresight", highlight: true },
			],
			description:
				"Don't react to the market—predict it. Let Avexra AI build the mathematical foundation for your next decade of growth.",
			primary: "Start Modeling",
			secondary: "Consult Experts",
		},
	},

	// =========================
	// Custom Software
	// =========================
	{
		slug: "custom-software",
		hero: {
			titleParts: [
				{ text: "Custom Software Solutions for " },
				{ text: "Long-Term Scale", highlight: true },
			],
			description: [
				"Avexra AI offers custom software development tailored to unique business requirements.",
				"Our solutions are engineered for performance, scalability, and maintainability.",
			],
			primaryCta: "Start a Project",
			secondaryCta: "View Capabilities",
			image: "/services/custom-software.png",
		},
		capabilities: [
			{
				icon: "terminal",
				title: "Custom AI Platforms",
				description:
					"Bespoke AI-powered platforms aligned with unique business workflows.",
			},
			{
				icon: "api",
				title: "Backend & API Development",
				description:
					"Secure, scalable backend systems and APIs built for enterprise performance.",
			},
			{
				icon: "dashboard",
				title: "Data-Driven Dashboards",
				description:
					"Real-time dashboards that surface operational and business insights.",
			},
			{
				icon: "architecture",
				title: "Scalable System Architecture",
				description:
					"Architectures designed for growth, reliability, and high availability.",
			},
			{
				icon: "cloud",
				title: "Cloud-Native Deployment",
				description:
					"Cloud-native applications optimized for modern infrastructure, scalability, and cost efficiency.",
			},
		],
		useCases: [
			{
				tag: "ENTERPRISE",
				title: "Enterprise Web Applications",
				description:
					"Secure, high-availability enterprise applications supporting complex workflows, deep integrations, and heavy traffic loads for global organizations.",
				image: "/services/usecases/image1.png",
				tools: ["React", "Node.js", "Cloud Platforms"],
			},
			{
				tag: "AI TOOLS",
				title: "AI-Powered Internal Tools",
				description:
					"Internal tools enhanced with AI capabilities such as automation, recommendations, and intelligent insights to improve productivity and decision-making across teams.",
				image: "/services/usecases/image2.png",
				tools: ["LLMs", "Internal APIs"],
			},
			{
				tag: "ANALYTICS",
				title: "Analytics & Reporting Platforms",
				description:
					"Custom analytics and reporting platforms that aggregate data from multiple sources, provide real-time dashboards, and enable data-driven decision-making at all organizational levels.",
				image: "/services/usecases/image3.png",
				tools: ["Dashboards", "Data Pipelines"],
			},
			{
				tag: "WORKFLOWS",
				title: "Workflow Management Systems",
				description:
					"Custom workflow management systems that digitize, automate, and monitor business processes, ensuring transparency, accountability, and operational efficiency.",
				image: "/services/usecases/image1.png",
				tools: ["Workflow Engines"],
			},
			{
				tag: "SAAS",
				title: "Custom SaaS Products",
				description:
					"End-to-end development of scalable SaaS products, including architecture design, multi-tenant systems, billing workflows, and long-term platform scalability, optimized for conversion and retention.",
				image: "/services/usecases/image2.png",
				tools: ["Multi-Tenant Architecture"],
			},
		],
		cta: {
			titleParts: [
				{ text: "Ready to build the " },
				{ text: "next big thing?", highlight: true },
			],
			description:
				"Let's discuss your custom requirements and build systems that scale with your growth.",
			primary: "Build With Us",
			secondary: "Contact Team",
		},
	},

	// =========================
	// Enterprise Integration
	// =========================
	{
		slug: "enterprise-integration",
		hero: {
			titleParts: [
				{ text: "Enterprise Integration for " },
				{ text: "Unified Digital Ecosystems", highlight: true },
			],
			description: [
				"Avexra AI provides enterprise integration solutions that connect disparate systems.",
				"We enable seamless data flow across platforms and applications.",
			],
			primaryCta: "Integrate Systems",
			secondaryCta: "See Architecture",
			image: "/services/enterprise-integration.png",
		},
		capabilities: [
			{
				icon: "hub",
				title: "API & System Integration",
				description:
					"Seamless integration of APIs and enterprise systems to unify fragmented platforms into a cohesive ecosystem.",
			},
			{
				icon: "storage",
				title: "Database Connectivity",
				description:
					"Secure and efficient connectivity across databases and data sources to ensure consistency and availability.",
			},
			{
				icon: "model_training",
				title: "AI Model Integration",
				description:
					"Deploy AI models directly into enterprise workflows and systems.",
			},
			{
				icon: "security",
				title: "Secure Data Pipelines",
				description:
					"Encrypted pipelines with access control and compliance safeguards.",
			},
			{
				icon: "architecture",
				title: "Scalable Integration Design",
				description:
					"Architectures optimized for performance, reliability, and scale.",
			},
		],
		useCases: [
			{
				tag: "SALES & OPS",
				title: "CRM & ERP Integration",
				description:
					"Sync customer data and resource planning in real-time. Ensure your sales team sees the same inventory, billing, and fulfillment data as your operations desk, reducing friction and doubling throughput.",
				image: "/services/usecases/image1.png",
				tools: ["Salesforce", "SAP", "APIs"],
			},
			{
				tag: "MLOPS",
				title: "AI Model Deployment Pipelines",
				description:
					"Automate the lifecycle of enterprise AI models. From data ingestion and fine-tuning to production monitoring, our pipelines ensure your AI is always relevant and performing at peak accuracy.",
				image: "/services/usecases/image2.png",
				tools: ["CI/CD", "MLOps", "Kubernetes"],
			},
			{
				tag: "DATA",
				title: "Cross-Platform Data Synchronization",
				description:
					"Real-time synchronization of data across multiple platforms and databases to ensure consistency, accuracy, and availability throughout the enterprise ecosystem.",
				image: "/services/usecases/image3.png",
				tools: ["ETL Tools", "Message Queues"],
			},
			{
				tag: "CLOUD",
				title: "Cloud & On-Prem Connectivity",
				description:
					"Secure hybrid connectivity solutions that bridge cloud infrastructure with on-premise systems, enabling flexible and scalable enterprise architectures.",
				image: "/services/usecases/image1.png",
				tools: ["AWS", "Azure", "VPN"],
			},
			{
				tag: "ANALYTICS",
				title: "Unified Analytics Systems",
				description:
					"Break down data silos. We aggregate data from every touchpoint in your organization to create a single source of truth, giving leadership the visibility needed to make data-driven decisions.",
				image: "/services/usecases/image2.png",
				tools: ["Data Warehouses", "BI Tools", "BigQuery"],
			},
		],
		cta: {
			titleParts: [
				{ text: "Ready to unify your" },
				{ text: "Digital Ecosystem?", highlight: true },
			],
			description:
				"Don't let legacy fragmentation hold back your innovation. Let's architect a future-proof integration strategy today.",
			primary: "Start Integration",
			secondary: "Talk to Architects",
		},
	},
];
