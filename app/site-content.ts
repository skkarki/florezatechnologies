export const divisions = [
  {
    id: "software-development", icon: "code", title: "Software Development",
    tagline: "Enterprise software engineered for scale and longevity",
    metric: "500+ enterprise applications delivered across 40+ countries",
    description: "Our software development division delivers bespoke enterprise applications built to the highest standards of architecture, security, and performance. From core banking systems to complex workflow platforms, we engineer software that powers critical operations for organisations worldwide.",
    features: ["Custom enterprise application development", "Legacy system modernisation and migration", "API design, development, and integration", "Microservices and distributed system architecture", "Quality assurance and automated testing", "Ongoing maintenance and managed support"],
  },
  {
    id: "mobile-applications", icon: "phone", title: "Mobile Applications",
    tagline: "Native and cross-platform mobile experiences at global scale",
    metric: "Applications deployed across iOS and Android in 30+ markets",
    description: "We design and build mobile applications that serve millions of users across diverse markets, devices, and connectivity conditions. Our mobile division combines deep platform expertise with a rigorous approach to performance, accessibility, and security.",
    features: ["Native iOS and Android application development", "Cross-platform development with React Native and Flutter", "Mobile UX design and accessibility compliance", "Offline-first architecture for low-connectivity markets", "App Store and Play Store deployment and management", "Mobile security and data protection implementation"],
  },
  {
    id: "digital-platforms", icon: "globe", title: "Digital Platforms",
    tagline: "Scalable ecosystems that become the infrastructure of industries",
    metric: "Platforms processing millions of transactions daily",
    description: "Our digital platforms division designs and operates large-scale digital ecosystems — connecting businesses, services, and users through robust, high-availability infrastructure. We build platforms that clients depend on as the operational backbone of their business.",
    features: ["Multi-tenant SaaS platform architecture and development", "Marketplace and ecosystem platform engineering", "High-availability infrastructure design and operation", "Real-time data processing and event-driven systems", "Platform security, compliance, and governance", "Scalability planning and performance optimisation"],
  },
  {
    id: "online-services", icon: "cloud", title: "Online Services",
    tagline: "End-to-end digital service delivery, built for continuous availability",
    metric: "99.9% uptime SLA across all managed service offerings",
    description: "From managed SaaS products to fully operated digital services, our online services division delivers reliable, secure, and scalable service offerings. We take responsibility for the full lifecycle — from development through to 24/7 operations and support.",
    features: ["Managed SaaS product development and operation", "Digital service design and delivery", "24/7 operations, monitoring, and incident response", "Service level agreement management and reporting", "Continuous improvement and feature evolution", "Customer support infrastructure and tooling"],
  },
  {
    id: "technology-solutions", icon: "chip", title: "Technology Solutions",
    tagline: "Strategic technology consulting and bespoke implementation",
    metric: "Trusted advisor to financial institutions and government agencies globally",
    description: "Our technology solutions division works with organisations facing complex technology challenges — providing strategic advisory, architecture consulting, and hands-on implementation. We translate strategic vision into operational reality, working alongside client teams to deliver lasting change.",
    features: ["Technology strategy and digital transformation advisory", "Enterprise architecture design and review", "Technology vendor selection and programme management", "Cybersecurity strategy and risk assessment", "AI and emerging technology integration consulting", "Organisational capability building and knowledge transfer"],
  },
];

export const regions = [
  { title: "Asia Pacific", text: "Primary delivery centres and regional headquarters serving clients across South Asia, Southeast Asia, and the broader Asia Pacific region." },
  { title: "Europe", text: "Strategic offices supporting enterprise clients across the United Kingdom, continental Europe, and the Nordic markets." },
  { title: "Middle East & Africa", text: "Established presence serving financial institutions, government agencies, and enterprise clients across the GCC and African markets." },
  { title: "Americas", text: "Growing operations serving North American and Latin American clients requiring global technology delivery and support." },
];

export const capabilities = [
  { icon: "chip", title: "Enterprise Software Engineering", text: "Custom software built for scale, resilience, and longevity. We architect and deliver systems that underpin critical business operations — from core banking platforms to enterprise resource management.", tags: ["Architecture", "Backend", "APIs", "Microservices"] },
  { icon: "phone", title: "Mobile Application Development", text: "Native iOS, Android, and cross-platform applications engineered for performance and global reach. We build mobile experiences that serve millions of users across diverse markets and connectivity conditions.", tags: ["iOS", "Android", "React Native", "Flutter"] },
  { icon: "cloud", title: "Cloud Infrastructure & DevOps", text: "Cloud-native architecture, infrastructure automation, and continuous delivery pipelines that enable rapid, reliable deployment at any scale. We design for availability, cost efficiency, and operational resilience.", tags: ["AWS", "Azure", "GCP", "Kubernetes", "CI/CD"] },
  { icon: "chart", title: "Artificial Intelligence & Machine Learning", text: "Applied AI solutions integrated across our service portfolio — from intelligent automation and predictive analytics to natural language processing and computer vision. We build AI that delivers measurable business outcomes.", tags: ["Machine Learning", "NLP", "Computer Vision", "Automation"] },
  { icon: "shield", title: "Cybersecurity & Compliance", text: "End-to-end security architecture, penetration testing, and compliance frameworks aligned to ISO 27001, SOC 2, and GDPR. Security is embedded into every layer of our delivery process.", tags: ["ISO 27001", "SOC 2", "GDPR", "Pen Testing"] },
  { icon: "server", title: "Data Engineering & Analytics", text: "Scalable data pipelines, warehousing, and analytics platforms that transform raw data into strategic intelligence. We enable organisations to make faster, better-informed decisions.", tags: ["Data Pipelines", "Warehousing", "BI", "Real-time Analytics"] },
];

export const platforms = [
  { label: "Enterprise Platform", title: "Floreza Core", text: "A modular enterprise application framework that provides pre-built components for authentication, workflow orchestration, audit logging, and multi-tenancy — reducing time-to-market for complex enterprise systems.", features: ["Modular architecture", "Multi-tenant by design", "Audit-ready compliance layer", "API-first integration"] },
  { label: "Integration Platform", title: "Floreza Connect", text: "An enterprise integration platform enabling seamless connectivity between legacy systems, third-party services, and modern cloud infrastructure. Supports REST, SOAP, GraphQL, and event-driven architectures.", features: ["500+ pre-built connectors", "Real-time event streaming", "Legacy system adapters", "Low-latency message routing"] },
  { label: "Analytics Platform", title: "Floreza Insight", text: "A real-time analytics and business intelligence platform delivering operational dashboards, predictive models, and automated reporting across complex, multi-source data environments.", features: ["Real-time data ingestion", "Predictive analytics engine", "Configurable dashboards", "Automated report generation"] },
  { label: "Security Platform", title: "Floreza Shield", text: "A comprehensive security monitoring and compliance management platform providing continuous threat detection, vulnerability assessment, and regulatory compliance tracking across distributed infrastructure.", features: ["Continuous threat monitoring", "Automated compliance reporting", "Vulnerability management", "Incident response workflows"] },
];

export const industries = [
  { title: "Financial Services", text: "Core banking systems, payment platforms, regulatory reporting, and digital banking experiences built to the exacting standards of global financial institutions.", features: ["Core banking modernisation", "Payment gateway integration", "Regulatory compliance systems", "Digital onboarding platforms"] },
  { title: "Government & Public Sector", text: "Secure, scalable digital government platforms that improve citizen services, streamline operations, and meet the highest standards of data sovereignty and security.", features: ["Citizen service portals", "Case management systems", "Secure data infrastructure", "Identity & access management"] },
  { title: "Healthcare & Life Sciences", text: "Clinical information systems, patient engagement platforms, and healthcare data infrastructure designed for interoperability, privacy, and regulatory compliance.", features: ["Electronic health records", "Patient engagement apps", "Clinical data pipelines", "HIPAA & GDPR compliance"] },
  { title: "Telecommunications", text: "BSS/OSS modernisation, network management platforms, and customer experience systems for telecommunications operators managing complex, high-volume environments.", features: ["BSS/OSS transformation", "Network analytics", "Customer self-service platforms", "Revenue assurance systems"] },
];

export const roles = [
  ["Senior Software Engineer", "Software Development", "Remote / Asia Pacific"],
  ["Mobile Application Developer (iOS)", "Mobile Applications", "Remote / Europe"],
  ["Platform Architect", "Digital Platforms", "Remote / Global"],
  ["DevOps Engineer", "Technology Solutions", "Remote / Middle East & Africa"],
  ["AI/ML Engineer", "Technology Solutions", "Remote / Global"],
  ["Cybersecurity Analyst", "Technology Solutions", "Remote / Europe"],
  ["Technical Project Manager", "All Divisions", "Remote / Global"],
  ["Business Analyst — Financial Services", "Software Development", "Remote / Asia Pacific"],
];

export const news = [
  { slug: "middle-east-africa-expansion", category: "Company News", title: "Floreza Technologies Expands Operations Across the Middle East & Africa Region", date: "2026-09-15", text: "Floreza Technologies has announced a significant expansion of its operations across the Middle East and Africa, establishing new delivery partnerships and client relationships in key markets including the UAE, Saudi Arabia, Kenya, and South Africa." },
  { slug: "artificial-intelligence-practice", category: "Technology", title: "Floreza Launches Dedicated Artificial Intelligence Practice Across All Five Divisions", date: "2026-08-28", text: "Building on years of applied AI development, Floreza Technologies has formalised a dedicated AI practice to accelerate the integration of machine learning, natural language processing, and intelligent automation across its full service portfolio." },
  { slug: "iso-27001-recertification", category: "Press Release", title: "Floreza Technologies Achieves ISO 27001 Recertification Across All Operating Entities", date: "2026-08-10", text: "Floreza Technologies has successfully completed its ISO 27001 recertification audit across all operating entities, reaffirming the company's commitment to the highest standards of information security management." },
  { slug: "500th-project-milestone", category: "Company News", title: "Floreza Technologies Marks 500th Project Delivery Milestone", date: "2026-07-22", text: "Floreza Technologies has reached a significant milestone, completing its 500th project delivery since the company's founding in 2009. The milestone reflects the company's sustained growth and the trust placed in it by clients across more than forty countries." },
  { slug: "insight-platform-benchmark", category: "Technology", title: "Floreza Insight Platform Achieves Real-Time Processing of 10 Million Daily Events", date: "2026-07-08", text: "The Floreza Insight analytics platform has reached a new performance benchmark, processing more than ten million data events per day in production deployments — demonstrating the platform's readiness for the most demanding enterprise analytics workloads." },
  { slug: "financial-institution-partnership", category: "Press Release", title: "Floreza Technologies Announces Strategic Partnership with Leading Financial Institution", date: "2026-06-18", text: "Floreza Technologies has announced a strategic technology partnership to support enterprise software modernisation and digital transformation in financial services." },
];

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}
