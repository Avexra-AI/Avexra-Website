import { SolutionDetail } from "@/types/solution"
import { image } from "framer-motion/client";
import { text } from "stream/consumers";

export const solutionDetails: SolutionDetail[] = [

    //Business intelligence
    {
        slug: "business-intelligence",
        hero:{
            titleParts: [
                 {text: "Business Intelligence AI"},
                 {text: "Data that talks and guides instantly."},
            ],
        description: [
          "Empower your enterprise with intelligent agents that transform complex raw data into actionable insights.Resolve bottlenecks automously and scale decision-making."
        ],
        primaryCta: "Deploy Your Data Engine",
        secondaryCta: "Watch Demo",
    },
    
        features: [
          {
            icon: "query_stats",
            
            title: "Real-time Analytics",
            description:
              "Monitor your business pulse in real-time.Our AI processes millions of events per second to give you live visibility."
          },
          {
            icon: "psychology",
           
            title: "Predictive Modeling",
            description:
              "Don't just react to the past. Forecast future trends, demand, and risks eith 98% accuracy using proprietary ML models."
          },
          {
            icon: "dashboard_customize",
            
            title: "Data Visualization",
            description:
              "Beautiful, interactive charts and dashboards generated automatically from natural language prompts."
          }
        ],
        experiment:[
           { 
    
            tag: "LIVE PREVIEW",
            title: "Experience intelligence firsthand",
            exampleimage: "bar_chart",
            exampletitle: "Example: Revenue Analysis",
            description:
                  "Ask 'Show me the correlation between marketing   spend and customer retention by RegexIcon.' ",
           image:""
           }
        ],
    
        bestFor: [
          {
            icon: "corporate_fare",
            title: "Executive Teams",
            description: 
            "High-level strategic insights and quarterly performance forecasting."
          },
          {
            icon: "science",
            title: "Data Analysts",
            description: 
            "Automate SQL generation and cleaning to focus on deep discovery."
          },
          {
            icon: "campaign",
            title: "Marketing",
            description: 
            "Real-time ROAS tracking and audience segmentation intelligence."
          },
          {
            icon: "settings_suggest",
            title: "Operations",
            description: 
            "Optimize supply chains and detect anomalies before they scale."
          }
        ],
        cta: {
            titleParts: [
                {text: "Ready to automate your data conversations?"},
                {text: ""},
            ],
            description: "Join 500+ enterprises using Avexra BI to deliver faster insights and drive more revenue.",
            primary: "Start Free Trial",
            secondary: "Talk to Sales"
        }
    },
      //intelligent-automation

      {
        slug: "intelligent-automation",
        hero:{
            titleParts: [
                 {text: "Intelligent Automation System"},
                 {text: "Workflow that think and executes useInstantLayoutTransition."},
            ],
        description: [
          "  Empower your business with intelligent agents that understand context, resolve issues autonomously, and escalate only when necessary. Automate repetitive tasks with AI precision."
        ],
        primaryCta: " Deploy Your System",
        secondaryCta: "Watch Demo",
    },
    
        features: [
          {
            icon: "troubleshoot",
            
            title: "Process Mining",
            description:
              "Identify inefficiencies in your current manual workflows automatically. Our AI analyzes log data to map out the most optimized path for automation."
          },
          {
            icon: "layers",
           
            title: "Auto-Scaling Workflows",
            description:
              "Scale from 10 to 10,000 tasks per second without breaking a sweat. Our infrastructure dynamically allocates resources based on your real-time demand."
          },
          {
            icon: "verified",
            
            title: "Error Detection",
            description:
              " Proactive monitoring identifies anomalies before they impact your business. Self-healing protocols attempt auto-recovery for minor interruptions."
          }
        ],
        experiment:[
           { 
    
            tag: "LIVE PREVIEW",
            title: "Experience intelligence firsthand",
            exampleimage: "schema",
            exampletitle: "Example: Intelligent Routing",
            description:
           "A logic-based system that parses incoming data, determines intent, and executes corresponding API calls across your tech stack without human intervention.",
           image:""
           }
        ],
    
        bestFor: [
          {
            icon: "groups",
            title: "HR & Internal Ops",
            description:"Automate employee onboarding, benefits inquiries, and internal support tickets instantly."
          },
          {
            icon: "terminal",
            title: "IT Support",
            description: "Resolve common tech issues, password resets, and access requests with autonomous agents."
          },
          {
            icon: "account_balance",
            title: "Finance",
            description: "Streamline invoice processing, expense approvals, and financial reporting with high accuracy."
          },
          {
            icon: "local_shipping",
            title: "Supply Chain",
            description: "Monitor inventory levels, automate replenishment orders, and track shipments in real-time."
          }
        ],
        cta: {
            titleParts: [
                {text: "Ready to automate your conversations?"},
                {text: ""},
            ],
            description: "Join 500+ companies using AutoNexus to deliver faster support and drive more sales.",
            primary: "Start Free Trial",
            secondary: "Talk to Sales"
        }
    },


    // AI -powered Platforms
    
    {
        slug: "ai-powered-platforms",
        hero:{
            titleParts: [
                 {text: "  AI-powered Platforms"},
                 {text: "Infrastructure that scales and learns instantly"},
            ],
        description: [
          "Empower your engineering teams with developer-friendly AI deployment and management. Build, scale, and iterate on production-ready AI models with zero friction."
        ],
        primaryCta: "Deploy Your Bot",
        secondaryCta: "Watch Demo",
    },
    
        features: [
          {
            icon: "api",
            
            title: "API First Design",
            description:
              "Integrate seamlessly with your existing stack. Our robust SDKs and REST APIs make AI deployment a breeze for developers."
          },
          {
            icon: "public",
           
            title: "Global Scalability",
            description:
              " Deploy your AI applications across 20+ regions with automated load balancing and ultra-low latency response times."
          },
          {
            icon: "shield_check",
            
            title: "Security & Compliance",
            description:
              "SOC2, GDPR, and HIPAA compliant infrastructure. Your data is encrypted at rest and in transit with enterprise-grade protocols."
          }
        ],
        experiment:[
           { 
    
            tag: "LIVE PREVIEW",
            title: "Experience intelligence firsthand",
            exampleimage: "code",
            exampletitle: "Developer Experience",
            description:
           "Simple installation, intuitive CLI, and a powerful dashboard to monitor your AI instances in real-time",
           image:""
           }
        ],
    
        bestFor: [
          {
            icon: "rocket",
            title: "SaaS Founders",
            description: "Fast-track your AI product roadmap with out-of-the-box infrastructure."
          },
          {
            icon: "terminal",
            title: "Dev Ops",
            description: "Automated deployment pipelines and detailed monitoring metrics."
          },
          {
            icon: "corporate_fare",
            title: "Enterprise IT",
            description: "Secure, compliant, and scalable AI infrastructure for large organizations."
          },
          {
            icon: "groups",
            title: "Product Team",
            description: "Experiment faster with flexible model hosting and A/B testing tools."
          }
        ],
        cta: {
            titleParts: [
                {text: "Ready to automate your conversations?"},
                {text: ""},
            ],
            description: "Join 500+ companies using Avexera AI to deliver faster support and drive more sales.",
            primary: "Start Free Trial",
            secondary: " Talk to Sales"
        }
    },



    // Reaseach and Advanced AI

    {
        slug: "research-and-advanced-ai",
        hero:{
            titleParts: [
                 {text: " Research & Advanced AI"},
                 {text: "System that innovate and discover instantly."},
            ],
        description: [
          "Empower your institution with cutting-edge neural network research, autonomous discovery agents, and next-generation systems designed to solve the world's most complex challenges."
        ],
        primaryCta: "Satrt Researching",
        secondaryCta: "Watch System Overview",
    },
    
        features: [
          {
            icon: "psychology",
            
            title: "Neural Architecture",
            description:
              "Pioneering transformer-based architectures with sub-millisecond inference and multi-modal integration across sparse data sets."
          },
          {
            icon: "verified_user<",
           
            title: "Ethical AI Frameworks",
            description:
              "Industry-leading safety protocols and bias-mitigation layers embedded directly into the model weights and training pipelines."
          },
          {
            icon: "language",
            
            title: "Large Language Models",
            description:
              "Next-gen LLMs with persistent memory, real-world grounding, and advanced reasoning capabilities beyond standard pattern matching."
          }
        ],
        experiment:[
           { 
    
            tag: " Live Visualization",
            title: "Experience intelligence firsthand",
            exampleimage: "settings_input_component",
            exampletitle: "Synaptic Mapping v4",
            description:
           "Our visualization engine renders millions of neural connections in real-time, showing how the AI processes and synthesizes information.",
           image:""
           }
        ],
    
        bestFor: [
          {
            icon: "science",
            title: "Reasearch Labs",
            description: "High-performance computing and experimentation toolsets for breakthrough discovery."
          },
          {
            icon: "school",
            title: "universities",
            description: "Educational licenses and collaborative frameworks for academic excellence and peer review."
          },
          {
            icon: "precision_manufacturing",
            title: "R & Departments",
            description: "Enterprise-grade AI integration for product innovation and materials science research."
          },
          {
            icon: "rocket_launch",
            title: "Innovation Hubs",
            description: "Scalable infrastructure for rapid prototyping and world-first AI-driven product testing."
          }
        ],
        cta: {
            titleParts: [
                {text: "Ready to automate your conversations?"},
                {text: ""},
            ],
            description: "Join 500+ companies using Avexera AI to deliver faster support and drive more sales.",
            primary: "   Start Free Trial",
            secondary: "    Talk to Sales"
        },
    },
];




     