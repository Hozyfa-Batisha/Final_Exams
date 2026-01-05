// Systems Analysis and Design Question Bank - Ready for Website Integration
// This file contains all MCQ and True/False questions

const sadQuestionsData = `
SAD|Which implementation approach replaces the old system with the new one at once?|Pilot|Parallel|Direct|C
SAD|Which implementation approach runs both old and new systems simultaneously?|Parallel|Direct|Pilot|A
SAD|The phased approach to system implementation:|Replaces all components at once|Introduces the system in modules or stages|Runs both systems together|B
SAD|The pilot implementation is best described as:|Installing the system company-wide|Testing the system in a limited area first|Replacing both systems at once|B
SAD|Which of the following has the highest implementation risk?|Direct implementation|Parallel implementation|Phased implementation|A
SAD|The most expensive implementation approach is generally:|Pilot|Parallel|Direct|B
SAD|A packaged system is best suited when:|Requirements are unique|Budget is low and speed is critical|Full customization is required|B
SAD|A custom-developed system is preferred when:|Standard features are sufficient|High level of flexibility is required|The company lacks technical staff|B
SAD|Which type of system offers vendor support and periodic updates?|Custom system|Packaged system|Legacy system|B
SAD|A disadvantage of a packaged system is:|Long development time|Limited customization|High technical risk|B
SAD|Enterprise system integration mainly aims to:|Eliminate old software|Synchronize data across systems|Reduce hardware usage|B
SAD|Middleware is used in enterprise integration to:|Manage physical networks|Facilitate communication between applications|Backup databases|B
SAD|Data integration ensures:|Visualized workflows|Consistent data across systems|Fast code compilation|B
SAD|Which integration level aligns business workflows across departments?|Application integration|Data integration|Process integration|C
SAD|Which of the following is a major benefit of outsourcing development?|Full control over the process|Access to specialized expertise|Elimination of vendor dependence|B
SAD|Offshore outsourcing means:|Outsourcing within the same country|Hiring vendors abroad|Hiring freelancers temporarily|B
SAD|The most important document in outsourcing agreements is the:|Test report|SLA (Service-Level Agreement)|Feasibility study|B
SAD|A key risk in outsourcing is:|Cost reduction|Enhanced flexibility|Loss of control|C
SAD|Nearshore outsourcing refers to vendors:|Located nearby countries|Operating on the same campus|Working inside the client's office|A
SAD|Which outsourcing type provides best communication and cultural alignment?|Offshore|Nearshore|Onshore|C
SAD|In-house development is suitable when:|Requirements are generic|Specialized security control is required|Rapid deployment is needed|B
SAD|Maintenance includes all of the following except:|Corrective actions|Adaptive changes|Testing design prototypes|C
SAD|Which maintenance type deals with fixing bugs?|Corrective|Adaptive|Preventive|A
SAD|A weighted scoring model helps:|Identify risks|Compare implementation alternatives|Test user interfaces|B
SAD|The best implementation option provides:|Lowest cost only|Maximum technical complexity|Optimal balance of cost, risk, and value|C
SAD|SDLC stands for:|System Design and Logical Components|Structured Development Life Cycle|Systems Development Life Cycle|C
SAD|Which SDLC phase identifies user requirements?|Planning|Analysis|Design|B
SAD|The main deliverable of the design phase is:|Test plan|Code|System architecture|C
SAD|The final phase of SDLC is:|Deployment|Development|Maintenance|C
SAD|Unified Process (UP) emphasizes which approach?|Procedural|Object-Oriented|Functional|B
SAD|In the Unified Process, the first phase is:|Elaboration|Construction|Inception|C
SAD|Which UML diagram represents data structure?|Sequence|Class|Activity|B
SAD|Which UML diagram shows message flow between objects?|Class|Use Case|Sequence|C
SAD|UML stands for:|Unified Management Language|Universal Modeling Language|Unified Modeling Language|C
SAD|The Unified Process is best described as:|Linear|Iterative|Random|B
SAD|Agile development values:|Documentation over interaction|Following plans over adaptation|Individuals and collaboration over processes|C
SAD|Scrum iterations are called:|Blocks|Sprints|Phases|B
SAD|In Scrum, the person who manages workflow and removes obstacles is the:|Product Owner|Scrum Master|Developer|B
SAD|XP (Extreme Programming) focuses mainly on:|Cost control|Code quality|UI design|B
SAD|Kanban primarily uses:|Timelines|Workflow boards|UML diagrams|B
SAD|Traditional SDLC is best for:|Rapidly changing requirements|Fixed, well-defined requirements|Uncertain customer input|B
SAD|Agile suits projects that require:|Long-term documentation|Continuous feedback and flexibility|One-time delivery|B
SAD|A hybrid model combines:|Two Agile methods|Agile and Waterfall|Scrum and Kanban only|B
SAD|Which model follows strict sequential phases?|Agile|Waterfall|Scrum|B
SAD|The V-Model emphasizes:|Testing at each development stage|Only final testing|No testing|A
SAD|Prototyping is useful for:|Fixed requirements|Unclear or evolving requirements|No user involvement|B
SAD|RAD (Rapid Application Development) focuses on:|Long development cycles|Quick delivery using prototypes and tools|Extensive documentation|B
SAD|In incremental development:|The system is delivered all at once|The system is built and delivered in parts|No testing is done|B
SAD|The Spiral model is characterized by:|No risk analysis|Iterative risk assessment and prototyping|Linear progression|B
SAD|Which development model is risk-driven?|Waterfall|Spiral|Agile|B
SAD|DevOps integrates:|Development and Operations|Design and Testing|Analysis and Maintenance|A
SAD|Continuous Integration (CI) involves:|Manual code deployment|Automated code integration and testing|No version control|B
SAD|The main goal of DevOps is:|Slower releases|Faster, more reliable releases|Eliminating testing|B
SAD|Which phase comes after Analysis in SDLC?|Planning|Design|Testing|B
SAD|Feasibility study is conducted during:|Analysis|Planning|Design|B
SAD|Which is NOT a type of feasibility?|Technical|Operational|Decorative|C
SAD|Economic feasibility assesses:|Technical requirements|Cost-benefit analysis|User training needs|B
SAD|A system proposal is created in which phase?|Planning|Analysis|Design|B
SAD|JAD (Joint Application Development) involves:|Solo developer work|Collaborative sessions with stakeholders|Only management decisions|B
SAD|Data flow diagrams (DFD) are used in:|Design|Analysis|Testing|B
SAD|Context diagrams show:|Detailed processes|System boundary and external entities|Database schema|B
SAD|Entity-Relationship Diagrams (ERD) model:|Processes|Data and relationships|User interfaces|B
SAD|Normalization is used to:|Design user interfaces|Eliminate data redundancy|Test software|B
SAD|The highest normal form commonly used is:|1NF|2NF|3NF|C
SAD|Denormalization is done to:|Increase redundancy for performance|Remove all redundancy|Create more tables|A
SAD|A primary key:|Can have null values|Uniquely identifies a record|Is optional|B
SAD|A foreign key:|Links tables together|Must be unique in its table|Cannot be null|A
SAD|Cardinality in ERD refers to:|Data types|Relationship quantities (one-to-many, etc.)|Table names|B
SAD|Which diagram shows system components and their deployment?|Use Case|Class|Deployment|C
SAD|Pseudocode is used for:|Database design|Algorithm description|Network configuration|B
SAD|A decision table is useful for:|Complex business logic|Simple calculations|Data storage|A
SAD|System testing verifies:|Individual units|The entire integrated system|Only user interface|B
SAD|Unit testing focuses on:|Complete system|Individual components or modules|User acceptance|B
SAD|Integration testing checks:|How modules work together|Only database connections|User training|A
SAD|UAT stands for:|Unit Acceptance Testing|User Acceptance Testing|Unified Application Testing|B
SAD|Alpha testing is performed by:|End users|Internal testers|Clients in production|B
SAD|Beta testing is conducted by:|Developers only|Selected external users|Quality assurance team only|B
SAD|Black-box testing focuses on:|Code structure|Functionality without knowing internal code|Only syntax errors|B
SAD|White-box testing examines:|User interface only|Internal code structure and logic|Only output|B
SAD|Regression testing ensures:|New features work|Changes don't break existing functionality|User satisfaction|B
SAD|Which is NOT a system conversion method?|Direct|Parallel|Reverse|C
SAD|System documentation should be:|Created only at the end|Maintained throughout SDLC|Optional|B
SAD|User training is part of:|Development|Implementation|Analysis|B
SAD|Change management helps:|Resist all changes|Manage transitions smoothly|Eliminate user input|B
SAD|Post-implementation review evaluates:|Initial requirements only|System performance after deployment|Design documents|B
SAD|Corrective maintenance addresses:|Future enhancements|Current bugs and errors|Performance optimization|B
SAD|Adaptive maintenance involves:|Fixing bugs|Adjusting to new environments|Improving performance|B
SAD|Perfective maintenance aims to:|Fix errors|Enhance features or performance|Adapt to environment|B
SAD|Preventive maintenance is done to:|React to failures|Prevent future problems|Add new features|B
SAD|The Agile Manifesto was created in:|1995|2001|2010|B
SAD|Which is NOT an Agile principle?|Customer collaboration|Responding to change|Comprehensive documentation over working software|C
SAD|Daily stand-ups are a practice in:|Waterfall|Scrum|Spiral|B
SAD|A product backlog contains:|Completed features|Prioritized list of requirements|Test results|B
SAD|Sprint planning occurs:|Once per project|At the start of each sprint|Only during inception|B
SAD|Sprint retrospective focuses on:|Product features|Team process improvement|Customer feedback|B
SAD|Velocity in Agile measures:|Code quality|Team's work completion rate|Budget usage|B
SAD|Burndown charts show:|Remaining work over time|Team structure|Budget allocation|A
SAD|The Definition of Done ensures:|Work meets quality standards|Projects never finish|Documentation is optional|A
SAD|Pair programming is a practice in:|Waterfall|Extreme Programming (XP)|Spiral|B
SAD|Test-Driven Development (TDD) means:|Testing after coding|Writing tests before code|No testing needed|B
SAD|Refactoring improves:|Code structure without changing functionality|Only comments|User interface|A
SAD|Continuous delivery enables:|Manual deployments|Frequent, automated releases|Yearly updates|B
SAD|Technical debt refers to:|Financial costs|Future costs of quick/poor coding decisions|Hardware expenses|B
SAD|Which role prioritizes the product backlog in Scrum?|Scrum Master|Product Owner|Developer|B
SAD|Kanban limits:|Team size|Work in progress (WIP)|Number of projects|B
SAD|Lean methodology focuses on:|Adding features|Eliminating waste|Increasing meetings|B
SAD|INVEST criteria apply to:|User stories|Test cases|Database design|A
SAD|A user story format is:|As a [role], I want [feature] so that [benefit]|Technical specification|Code comment|A
SAD|Acceptance criteria define:|Team roles|Conditions for a feature to be complete|Project budget|B
SAD|The Scrum framework includes:|Roles, events, artifacts|Only documentation|Just coding standards|A
SAD|A sprint typically lasts:|1 day|1-4 weeks|6 months|B
SAD|Which is NOT a Scrum event?|Sprint Planning|Daily Scrum|Monthly Review|C
SAD|The increment is:|The product owner's role|Sum of completed backlog items in a sprint|A type of diagram|B
SAD|Cross-functional teams:|Specialize in one area|Have all skills needed to deliver|Work in silos|B
SAD|Self-organizing teams:|Need constant supervision|Manage their own work|Have no structure|B
SAD|Timeboxing means:|Unlimited time for tasks|Fixed time periods for activities|No deadlines|B
SAD|SAFe stands for:|Scaled Agile Framework|Software Architecture Framework|System Analysis Foundation|A
SAD|Scrum of Scrums is used for:|Single teams|Coordinating multiple Scrum teams|Documentation|B
SAD|The Iron Triangle of project management includes:|Scope, time, cost|Only budget|People, process, technology|A
SAD|Scope creep refers to:|Reducing features|Uncontrolled expansion of requirements|Budget increases|B
SAD|A Gantt chart displays:|Code structure|Project schedule and tasks over time|Database schema|B
SAD|PERT charts show:|Task dependencies|Only costs|User interfaces|A
SAD|Critical path is:|The longest path determining project duration|Shortest path|Any random path|A
SAD|Stakeholder analysis identifies:|Code bugs|People affected by or affecting the project|System requirements|B
SAD|A RACI matrix defines:|Responsible, Accountable, Consulted, Informed|Risk assessment|Code standards|A
SAD|Which is NOT a project constraint?|Scope|Time|Creativity|C
SAD|Risk management involves:|Ignoring risks|Identifying, assessing, and mitigating risks|Only budgeting|B
SAD|A risk register:|Lists team members|Documents identified risks and responses|Contains code|B
SAD|Quality assurance focuses on:|Process quality|Product testing only|Budget management|A
SAD|Quality control involves:|Process improvement|Testing and inspecting deliverables|Planning|B
SAD|Configuration management tracks:|Budget only|Changes to system components|User behavior|B
SAD|Version control systems:|Delete old code|Track code changes and enable collaboration|Are optional|B
SAD|Git is an example of:|Database|Version control system|Operating system|B
SAD|A baseline is:|Initial plan|Approved version of a deliverable|Final product|B
SAD|Change control board:|Approves changes|Writes code|Tests systems|A
SAD|Requirements elicitation involves:|Writing code|Gathering requirements from stakeholders|Testing|B
SAD|Which is a requirements gathering technique?|Coding|Interviews|Deployment|B
SAD|Brainstorming is used for:|Testing|Generating ideas|Maintenance|B
SAD|Questionnaires help:|Gather info from many people|Write code|Design databases|A
SAD|Observation involves:|Asking questions only|Watching users work|Reading documentation only|B
SAD|Document analysis examines:|Existing documentation for requirements|Only new documents|Code files|A
SAD|Functional requirements describe:|System behavior and features|Hardware specs|Budget constraints|A
SAD|Non-functional requirements specify:|What the system does|Quality attributes (performance, security)|Only costs|B
SAD|A requirement should be:|Ambiguous|Clear, testable, and traceable|Complex|B
SAD|Requirements validation ensures:|Code is written|Requirements are correct and complete|Budget is set|B
SAD|A requirements traceability matrix:|Links requirements to design, code, tests|Lists only bugs|Contains user names|A
SAD|MoSCoW prioritization stands for:|Must, Should, Could, Won't|Only must-haves|Major, Small, Complex, Optional|A
SAD|A software architecture defines:|User interface only|High-level system structure|Database only|B
SAD|Layered architecture organizes:|Code randomly|System into layers (presentation, business, data)|Only files|B
SAD|Microservices architecture uses:|One large application|Small, independent services|Only databases|B
SAD|Monolithic architecture has:|Separate services|All components in one unit|No structure|B
SAD|SOA stands for:|Service-Oriented Architecture|Software Operation Analysis|System Optimization Approach|A
SAD|APIs enable:|Communication between software components|Only databases|Hardware control|A
SAD|RESTful APIs use:|SOAP only|HTTP methods and stateless communication|Only GET requests|B
SAD|Design patterns are:|Random code|Reusable solutions to common problems|Only for databases|B
SAD|The MVC pattern separates:|Nothing|Model, View, Controller|Only data|B
SAD|Singleton pattern ensures:|Multiple instances|Only one instance of a class|No instances|B
SAD|Interface design focuses on:|Database structure|User interaction and experience|Server configuration|B
SAD|Usability refers to:|Code quality|Ease of use|Cost|B
SAD|Wireframes are:|Database schemas|Low-fidelity UI sketches|Test cases|B
SAD|Mockups provide:|Code|Visual design representation|Budget plans|B
SAD|Prototypes are:|Final products|Working models for testing and feedback|Documentation|B
SAD|Responsive design ensures:|Fixed layouts|UI adapts to different screen sizes|Only desktop view|B
SAD|Accessibility in design means:|Limited access|Usable by people with disabilities|Complex navigation|B
SAD|WCAG stands for:|Web Content Accessibility Guidelines|Website Configuration and Graphics|Web Coding Application Guide|A
SAD|Security by design means:|Adding security later|Integrating security from the start|Ignoring security|B
SAD|The CIA triad in security stands for:|Cost, Investment, Assets|Confidentiality, Integrity, Availability|Code, Interface, Application|B
SAD|Encryption protects:|Nothing|Data confidentiality|Only networks|B
SAD|Authentication verifies:|System performance|User identity|Data storage|B
SAD|Authorization determines:|Who you are|What you can access|System speed|B
SAD|SQL injection is:|A feature|A security vulnerability|A database type|B
SAD|Cross-site scripting (XSS) is:|A language|A web security vulnerability|A testing method|B
SAD|Firewalls:|Store data|Control network traffic|Speed up systems|B
SAD|Penetration testing:|Ignores security|Simulates attacks to find vulnerabilities|Only tests UI|B
SAD|Code review involves:|Ignoring code|Examining code for quality and issues|Only testing|B
SAD|Static analysis examines:|Running code|Code without execution|Only output|B
SAD|Dynamic analysis tests:|Code structure only|Code during execution|Documentation|B
SAD|Debugging is:|Writing new code|Finding and fixing errors|Designing|B
SAD|A bug tracking system:|Ignores bugs|Records and manages defects|Only tests|B
SAD|Technical specifications describe:|User needs only|Detailed technical design|Budget|B
SAD|System architecture documentation shows:|Budget|Structure and components|Only code|B
SAD|Deployment involves:|Planning only|Releasing system to production|Analysis|B
SAD|Rollback is:|Moving forward|Reverting to previous version after failure|Testing|B
SAD|Blue-green deployment uses:|One environment|Two environments for zero-downtime deployment|No environment|B
SAD|Canary deployment:|Deploys to all users at once|Gradually deploys to small user groups first|Skips testing|B
SAD|Load balancing:|Decreases performance|Distributes traffic across servers|Stops traffic|B
SAD|Scalability refers to:|Fixed capacity|Ability to handle growth|Cost reduction|B
SAD|Vertical scaling means:|Adding more machines|Adding resources to existing machine|Reducing capacity|B
SAD|Horizontal scaling involves:|Upgrading one server|Adding more machines|Removing servers|B
SAD|Cloud computing provides:|Only local resources|On-demand computing resources over internet|No resources|B
SAD|IaaS stands for:|Internet as a Service|Infrastructure as a Service|Integration as a Service|B
SAD|PaaS stands for:|Product as a Service|Platform as a Service|Programming as a Service|B
SAD|SaaS stands for:|System as a Service|Software as a Service|Security as a Service|B
SAD|Virtualization enables:|Physical machines only|Multiple virtual machines on one physical machine|No machines|B
SAD|Containers are:|Hardware|Lightweight, isolated environments for applications|Databases|B
SAD|Docker is:|An operating system|A containerization platform|A programming language|B
SAD|Kubernetes:|Is a database|Orchestrates and manages containers|Writes code|B
SAD|Disaster recovery involves:|Preventing all disasters|Planning for system restoration after failure|Ignoring risks|B
SAD|A disaster recovery plan includes:|Only budgets|Procedures to restore systems|Code only|B
SAD|RTO stands for:|Real-Time Operation|Recovery Time Objective|Random Testing Option|B
SAD|RPO stands for:|Recovery Point Objective|Real Performance Output|Random Process Order|A
SAD|Backup strategies include:|Ignoring data|Full, incremental, differential backups|Only one type|B
SAD|Full backup copies:|Only new files|All data|No data|B
SAD|Incremental backup copies:|All data|Only changes since last backup|Nothing|B
SAD|The 3-2-1 backup rule means:|3 copies, 2 media types, 1 offsite|1 copy only|No backups|A
SAD|Business continuity planning ensures:|System stops during crisis|Operations continue during disruptions|Only IT works|B
SAD|A service level agreement (SLA) defines:|Code standards|Expected service quality and responsibilities|Only costs|B
SAD|Metrics measure:|Nothing|System performance and quality|Only time|B
SAD|KPIs are:|Code snippets|Key Performance Indicators|Database keys|B
SAD|Mean Time Between Failures (MTBF) measures:|System reliability|Cost|User satisfaction|A
SAD|Mean Time To Repair (MTTR) measures:|How often failures occur|Time to fix a failure|Budget|B
SAD|System monitoring:|Is optional|Tracks system performance and health|Only tracks bugs|B
SAD|Log files record:|Nothing|System events and errors|Only code|B
SAD|Performance testing evaluates:|User satisfaction|System speed, scalability, stability|Only design|B
SAD|Load testing assesses:|UI design|System behavior under expected load|Documentation|B
SAD|Stress testing determines:|Normal operation|System limits under extreme conditions|User preferences|B
SAD|Usability testing involves:|Developers only|Real users evaluating ease of use|No users|B
SAD|A/B testing compares:|Database schemas|Two versions to see which performs better|Code styles|B
SAD|End-user computing refers to:|Developers using systems|Users creating/modifying applications|Only IT use|B
SAD|Shadow IT means:|Official IT systems|Unauthorized IT solutions by users|Legal software|B
SAD|Digital transformation involves:|Resisting technology|Integrating digital tech to change business|Only hardware upgrades|B
SAD|Legacy systems are:|New systems|Older systems still in use|Future systems|B
SAD|System migration involves:|Keeping everything same|Moving to a new system/platform|Only testing|B
SAD|Data migration transfers:|Nothing|Data from old to new system|Only code|B
SAD|API integration connects:|Isolated systems|Different systems via APIs|Only databases|B
SAD|Webhooks enable:|Manual updates|Real-time event notifications between systems|Slow communication|B
SAD|ETL stands for:|Examine, Test, Launch|Extract, Transform, Load|Enter, Transfer, List|B
SAD|Data warehouse is:|Temporary storage|Central repository for analysis|Random data|B
SAD|Business intelligence involves:|Guessing|Analyzing data for insights|Ignoring data|B
SAD|Data analytics examines:|Nothing|Data to discover patterns and insights|Only storage|B
SAD|Machine learning in systems:|Requires manual rules|Enables systems to learn from data|Is impossible|B
SAD|AI in systems analysis can:|Do nothing|Automate requirements analysis|Only store data|B
SAD|Chatbots provide:|No interaction|Automated conversational interfaces|Only emails|B
SAD|IoT (Internet of Things) connects:|Only computers|Physical devices to the internet|Nothing|B
SAD|Edge computing processes:|Only in cloud|Data near the source|No data|B
SAD|Blockchain in systems provides:|Central control|Distributed, tamper-proof records|No security|B
SAD|Agile at scale refers to:|Single teams|Applying Agile to large organizations|Small projects only|B
SAD|Portfolio management involves:|One project|Managing multiple projects/programs|No management|B
SAD|Program management oversees:|One task|Related projects toward strategic goals|Nothing|B
SAD|Ethics in systems development includes:|Ignoring rules|Considering privacy, security, fairness|Only profits|B
SAD|Bias in systems can:|Be ignored|Lead to unfair outcomes|Only affect speed|B
SAD|Transparency in AI means:|Hiding processes|Understanding how decisions are made|Complexity|B
SAD|Green IT focuses on:|Any technology|Environmentally sustainable computing|Only hardware|B
SAD|The right to be forgotten involves:|Keeping all data forever|Users requesting data deletion|No data control|B
SAD|GDPR is:|A programming language|General Data Protection Regulation|A database|B
`;
