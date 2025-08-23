/* 
################################################################
Navigation
################################################################
*/
const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    contents.forEach((c) => (c.style.display = "none"));
    document.getElementById(btn.getAttribute("data-tab")).style.display =
      "block";
  });
});

/* 
################################################################
Modal Logic
################################################################
*/
let modalTimeout;

function openModal(imageContainer, modalId, imgId) {
  clearTimeout(modalTimeout);
  const modal = document.getElementById(modalId);
  const modalImg = document.getElementById(imgId);
  modalImg.src = imageContainer.querySelector("img").src;
  modal.style.display = "flex";
}

function scheduleCloseModal(modalId) {
  modalTimeout = setTimeout(() => {
    document.getElementById(modalId).style.display = "none";
  }, 200);
}

function cancelCloseModal() {
  clearTimeout(modalTimeout);
}

/* 
################################################################
Skills Highlight
################################################################
*/
  const highlights = [
    // Roles / Summary
    "Full Stack Developer",
    "AI & Automation Integration",
    "Backend Development",
    "API Design",
    "Web Development",
    "Machine Learning Developer",
    "Data Analyst",
    "Technical Assistant",
    
    // Languages
    "JavaScript",
    "TypeScript",
    "Python",
    "C++",
    
    // Frameworks & Libraries
    "Django",
    "Django REST Framework",
    "Laravel",
    "React",
    
    // Databases & APIs
    "MySQL",
    "MongoDB",
    "Firebase",
    "RESTful APIs",
    "JWT",
    
    // AI & Automation
    "OpenAI API (GPT models)",
    "Natural Language Processing",
    "Computer Vision",
    "Workflow Automation",
    "Make",
    "n8n",
    
    // Tools & Deployment
    "Git",
    "GitHub Actions (CI/CD)",
    "Docker (basic)",
    "Vercel",
    "Agile Development",
    "Firebase Hosting"
  ];

const track = document.getElementById("highlight-track");

  // Generate highlight spans
  highlights.forEach(text => {
    const span = document.createElement("span");
    span.className = "highlight";
    span.textContent = text;
    track.appendChild(span);
  });

  // Duplicate them for seamless looping
  highlights.forEach(text => {
    const span = document.createElement("span");
    span.className = "highlight";
    span.textContent = text;
    track.appendChild(span);
  });

  // 🔹 Adjust animation duration based on number of items
  const speedPerItem = 4;
  const duration = highlights.length * speedPerItem;
  track.style.animationDuration = `${duration}s`;

/* 
################################################################
Certificates
################################################################
*/
const certificates = [
  {
    src: "images/certificates/Business%20Analysis%20&%20Process%20Management%20(Coursera%202VIN6B2VED4J).jpg",
    title: "Business Analysis & Process Management",
    issuer: "Coursera",
    description: "Mastered the art of analyzing complex business processes to drive efficiency and innovation, empowering data-driven decision-making."
  },
  {
    src: "images/certificates/Data Science Foundations_page-0001.jpg",
    title: "Data Science Foundations",
    issuer: "Great Learning",
    description: "Built a solid foundation in data science fundamentals, unlocking the power of data through statistical analysis and visualization."
  },
  {
    src: "images/certificates/Certificate_of_Completion_NEW(maintaining computer systems and networks).jpg",
    title: "Maintaining Computer Systems and Networks",
    issuer: "TESDA",
    description: "Gained hands-on expertise in maintaining and optimizing computer systems and network infrastructures for seamless operations."
  },
  {
    src: "images/certificates/Certificate_of_Completion_NEW(tesda installing and configuring computer systems).jpg",
    title: "Installing and Configuring Computer Systems",
    issuer: "TESDA",
    description: "Developed practical skills in setting up and configuring diverse computer systems, ensuring optimal performance and reliability."
  },
  {
    src: "images/certificates/Certificate_of_Completion_NEW(tesda setting up computer servers)_page-0001.jpg",
    title: "Setting Up Computer Servers",
    issuer: "TESDA",
    description: "Learned to deploy, configure, and maintain computer servers, laying the foundation for robust IT infrastructure."
  },
  {
    src: "images/certificates/Certificate_of_Completion(settingup computer networks).jpg",
    title: "Setting Up Computer Networks",
    issuer: "TESDA",
    description: "Acquired essential knowledge to design and implement efficient, secure computer networks tailored to organizational needs."
  },
  {
    src: "images/certificates/Certificate_of_Completion(tesda introduction to css).jpg",
    title: "Introduction to Computer Systems Servicing",
    issuer: "TESDA",
    description: "Acquired foundational skills in servicing, troubleshooting, and maintaining computer hardware and software systems for reliable performance."
  },
  {
    src: "images/certificates/Data Analysis with Python (freeCodeCamp).png",
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    description: "Harnessed Python's power to perform insightful data analysis, transforming raw data into actionable intelligence."
  },
  {
    src: "images/certificates/Information Security (OpenLearn)_page-0001.jpg",
    title: "Information Security Fundamentals - Part 1",
    issuer: "OpenLearn",
    description: "Delved into the core principles of information security, understanding threats and defenses in the digital age."
  },
  {
    src: "images/certificates/Information Security (OpenLearn)_page-0002.jpg",
    title: "Information Security Fundamentals - Part 2",
    issuer: "OpenLearn",
    description: "Expanded knowledge on safeguarding information assets through risk management and security best practices."
  }
];

// Generate the certificate cards dynamically
const container = document.getElementById("certificatesWrapper");

certificates.forEach(cert => {
  const card = document.createElement("div");
  card.className = "certificate-card";
  card.innerHTML = `
    <div class="certificate-image"
        onmouseenter="openModal(this, 'certificateModal', 'certificateModalImage')"
        onmouseleave="scheduleCloseModal('certificateModal')">
      <img src="${cert.src}" alt="${cert.title}" />
    </div>
    <div class="certificate-info">
      <h3>${cert.title}</h3>
      <p><strong>Issuer:</strong> ${cert.issuer}</p>
      <p>${cert.description}</p>
    </div>
  `;
  container.appendChild(card);
});

/* 
################################################################
Projects
################################################################
*/
const projects = [
  {
    src: "images/projects/IComprehend.png",
    title: "iComprehend (Undergraduate Thesis)",
    description: "Developed an AI-powered text comprehension tool as part of my undergraduate thesis. Implemented NLP algorithms to analyze, summarize, and provide insights on academic texts, enhancing reading efficiency."
  },
  {
    src: "images/projects/Promis.png",
    title: "Project Monitoring System (OJT Final Project)",
    description: "Created a web-based system to track and monitor ongoing projects within the organization. Integrated automated notifications, dashboards, and real-time progress tracking to improve project visibility."
  },
  {
    src: "images/projects/PeriocareAI.jpg",
    title: "Periocare AI",
    description: "Designed an AI assistant for healthcare applications, leveraging ML models to provide patient monitoring insights, predictive analytics, and personalized recommendations for better care outcomes."
  },
  {
    src: "images/projects/IntegratedCampusSecurity.jpg",
    title: "Integrated Campus Security",
    description: "Built a comprehensive campus security system using AI-driven analytics, real-time monitoring, and alerting mechanisms. The project enhanced safety through automated threat detection and reporting."
  },
  // Add more projects as needed
];


// Generate the portfolio cards dynamically
const portfolioWrapper = document.getElementById("portfolioWrapper");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <div class="project-image"
        onmouseenter="openModal(this, 'projectModal', 'projectModalImage')"
        onmouseleave="scheduleCloseModal('projectModal')">
      <img src="${project.src}" alt="${project.title}" />
    </div>
    <div class="project-info">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>
  `;
  portfolioWrapper.appendChild(card);
});

/* 
################################################################
AI Animation
################################################################
*/
const canvas = document.getElementById("ai-animation");
const ctx = canvas.getContext("2d");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
let radius = Math.min(canvas.width, canvas.height) / 1.8; // movement radius

// ------------------- NODE SETUP -------------------
let nodes = [];
for (let i = 0; i < 30; i++) {
  let angle = Math.random() * Math.PI * 2;
  let r = radius * Math.sqrt(Math.random());
  nodes.push({
    x: centerX + r * Math.cos(angle),
    y: centerY + r * Math.sin(angle),
    radius: 4, // normal node size
    glow: 0,
    dx: (Math.random() - 0.5) * 1, // faster movement
    dy: (Math.random() - 0.5) * 1
  });
}

// ------------------- CPU AND PCB TRACES -------------------
let cpuWidth = 40; 
let cpuHeight = 40;

let pcbTraces = [
  // Top-right trace
  [
    {x: centerX + cpuWidth/2, y: centerY}, 
    {x: centerX + cpuWidth/2 + 25, y: centerY}, 
    {x: centerX + cpuWidth/2 + 25, y: centerY - 20}, 
    {x: centerX + cpuWidth/2 + 30, y: centerY - 20}
  ],
  // Top-left trace
  [
    {x: centerX - cpuWidth/2, y: centerY - 10}, 
    {x: centerX - cpuWidth/2 - 15, y: centerY - 10}, 
    {x: centerX - cpuWidth/2 - 15, y: centerY - 25}, 
    {x: centerX - cpuWidth/2 - 45, y: centerY - 25}
  ],
  // Bottom-right trace
  [
    {x: centerX + cpuWidth/2, y: centerY + 10}, 
    {x: centerX + cpuWidth/2 + 10, y: centerY + 10}, 
    {x: centerX + cpuWidth/2 + 10, y: centerY + 40}, 
    {x: centerX + cpuWidth/2 + 40, y: centerY + 40}
  ],
  // Bottom-left trace
  [
    {x: centerX - cpuWidth/2, y: centerY}, 
    {x: centerX - cpuWidth/2 - 10, y: centerY}, 
    {x: centerX - cpuWidth/2 - 10, y: centerY + 35}, 
    {x: centerX - cpuWidth/2 - 35, y: centerY + 35}
  ],
  // Slight offsets for variety
  [
    {x: centerX, y: centerY + cpuHeight/2}, 
    {x: centerX, y: centerY + cpuHeight/2 + 20}, 
    {x: centerX + 25, y: centerY + cpuHeight/2 + 20}, 
    {x: centerX + 25, y: centerY + cpuHeight/2 + 50}
  ],
  [
    {x: centerX -10 , y: centerY + cpuHeight/2}, 
    {x: centerX -10, y: centerY + cpuHeight/2 + 20}, 
    {x: centerX - 25, y: centerY + cpuHeight/2 + 20}, 
    {x: centerX - 25, y: centerY + cpuHeight/2 + 50}
  ],
  [
    {x: centerX, y: centerY - cpuHeight/2}, 
    {x: centerX, y: centerY - cpuHeight/2 - 20}, 
    {x: centerX - 20, y: centerY - cpuHeight/2 - 20}, 
    {x: centerX - 20, y: centerY - cpuHeight/2 - 45}
  ],
  [
    {x: centerX + 15, y: centerY - cpuHeight/2}, 
    {x: centerX + 15, y: centerY - cpuHeight/2 - 20}, 
    {x: centerX + 20, y: centerY - cpuHeight/2 - 20}, 
    {x: centerX + 20, y: centerY - cpuHeight/2 - 45}
  ],
  [
    {x: centerX + cpuWidth/2, y: centerY - 10}, 
    {x: centerX + cpuWidth/2 + 15, y: centerY - 10}, 
    {x: centerX + cpuWidth/2 + 15, y: centerY - 35}, 
    {x: centerX + cpuWidth/2 + 40, y: centerY - 35}
  ]
];


let traceFlows = pcbTraces.map(() => Math.random());

// ------------------- DRAW FUNCTIONS -------------------
function drawCPU() {
  ctx.fillStyle = "#0f5d0f";
  ctx.fillRect(centerX - cpuWidth/2, centerY - cpuHeight/2, cpuWidth, cpuHeight);
  ctx.strokeStyle = "#00ff00";
  ctx.lineWidth = 2;
  ctx.strokeRect(centerX - cpuWidth/2, centerY - cpuHeight/2, cpuWidth, cpuHeight);

  ctx.fillStyle = "#00ff00";
  ctx.font = "bold 20px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("AI", centerX, centerY);

  ctx.lineWidth = 2;
  pcbTraces.forEach(trace => {
    ctx.strokeStyle = "rgba(0,255,0,0.4)";
    ctx.shadowColor = "#00ff00";
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.moveTo(trace[0].x, trace[0].y);
    for (let j = 1; j < trace.length; j++) ctx.lineTo(trace[j].x, trace[j].y);
    ctx.stroke();
  });
}

function drawBeam() {
  pcbTraces.forEach((trace, i) => {
    traceFlows[i] += 0.001 + Math.random()*0.002;
    if(traceFlows[i] > 1) traceFlows[i] = 0;

    let t = traceFlows[i];
    let totalLength = 0;
    let segments = [];
    for(let j=0;j<trace.length-1;j++){
      let dx = trace[j+1].x - trace[j].x;
      let dy = trace[j+1].y - trace[j].y;
      let len = Math.hypot(dx,dy);
      segments.push({dx, dy, len, x0: trace[j].x, y0: trace[j].y});
      totalLength += len;
    }
    let dist = t * totalLength;
    let startIdx = 0;
    while(startIdx<segments.length && dist>segments[startIdx].len) dist -= segments[startIdx++].len;
    if(startIdx >= segments.length) startIdx = segments.length-1;
    let seg = segments[startIdx];
    let xStart = seg.x0 + (dist/seg.len)*seg.dx;
    let yStart = seg.y0 + (dist/seg.len)*seg.dy;
    let segLength = 5;
    let remaining = seg.len - dist;
    let xEnd = seg.x0 + ((dist+Math.min(segLength,remaining))/seg.len)*seg.dx;
    let yEnd = seg.y0 + ((dist+Math.min(segLength,remaining))/seg.len)*seg.dy;

    ctx.strokeStyle = "rgba(0,255,0,0.9)";
    ctx.lineWidth = 2;
    ctx.shadowBlur = 12;
    ctx.shadowColor = "#00ff00";
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();
    ctx.shadowBlur = 0;
  });
}

// ------------------- MAIN DRAW -------------------
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCPU();
  drawBeam();

  nodes.forEach((a, i) => {
    nodes.forEach((b, j) => {
      if (i !== j) {
        let dxA = a.x - centerX;
        let dyA = a.y - centerY;
        let distA = Math.sqrt(dxA * dxA + dyA * dyA);
        let fadeA = Math.max(0, 1 - distA / radius);

        let dxB = b.x - centerX;
        let dyB = b.y - centerY;
        let distB = Math.sqrt(dxB * dxB + dyB * dyB);
        let fadeB = Math.max(0, 1 - distB / radius);

        let alpha = 0.25 * Math.min(fadeA, fadeB);

        if (alpha > 0 && Math.hypot(a.x - b.x, a.y - b.y) < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(15,98,254,${alpha})`;
          ctx.globalAlpha = 1; // stroke alpha already applied
          ctx.stroke();
        }
      }
    });
  });

  // Draw nodes with fade near edge
  nodes.forEach(n => {
    let dx = n.x - centerX;
    let dy = n.y - centerY;
    let dist = Math.sqrt(dx * dx + dy * dy);
    let fade = Math.max(0, 1 - dist / radius); // fade based on distance

    n.glow = Math.max(0, n.glow - 0.02);
    if (Math.random() < 0.01) n.glow = 1;

    ctx.beginPath();
    ctx.arc(n.x, n.y, n.radius + n.glow * 3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(15,98,254,${(0.7 + n.glow) * fade})`;
    ctx.shadowBlur = 20 * n.glow * fade;
    ctx.shadowColor = "#0f62fe";
    ctx.fill();
    ctx.shadowBlur = 0;

    // Move node
    n.x += n.dx;
    n.y += n.dy;

    // Keep inside circle-ish area
    if (dist > radius) {
      let angle = Math.atan2(dy, dx);
      n.x = centerX + radius * Math.cos(angle);
      n.y = centerY + radius * Math.sin(angle);
      n.dx *= -1;
      n.dy *= -1;
    }
  });

  requestAnimationFrame(draw);
}

draw();

/* 
################################################################
Resume Tab
################################################################
*/
const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "fab fa-js", description: "Built dynamic UIs, interactive features, and full-stack apps." },
      { name: "TypeScript", icon: "fab fa-js", description: "Used for scalable React projects with strong type safety." },
      { name: "Python", icon: "fab fa-python", description: "Applied for automation, scripting, API development, and machine learning." },
      { name: "C++", icon: "fas fa-code", description: "Worked on algorithmic problem solving and systems programming." }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Django", icon: "fas fa-server", description: "Developed full-stack apps and REST APIs with Django ORM." },
      { name: "Django REST Framework", icon: "fas fa-server", description: "Created secure and scalable REST APIs for backend services." },
      { name: "Laravel", icon: "fas fa-cogs", description: "Built backend systems, authentication, and role-based access apps." },
      { name: "React", icon: "fab fa-react", description: "Developed responsive, component-based frontends with React hooks." }
    ]
  },
  {
    category: "Databases & APIs",
    skills: [
      { name: "MySQL", icon: "fas fa-database", description: "Designed relational schemas and optimized queries." },
      { name: "MongoDB", icon: "fas fa-database", description: "Worked with NoSQL databases for flexible document storage." },
      { name: "Firebase", icon: "fas fa-fire", description: "Implemented real-time databases and authentication." },
      { name: "RESTful APIs", icon: "fas fa-network-wired", description: "Developed and consumed REST APIs across multiple projects." },
      { name: "JWT", icon: "fas fa-key", description: "Integrated secure authentication using JWT tokens." }
    ]
  },
  {
    category: "AI / ML & Automation",
    skills: [
      { name: "OpenAI API (GPT Models)", icon: "fas fa-robot", description: "Built AI-driven chatbots and content generation tools." },
      { name: "NLP", icon: "fas fa-brain", description: "Worked with text classification, tokenization, and semantic analysis." },
      { name: "Python Scripting", icon: "fab fa-python", description: "Automated repetitive tasks, data pipelines, and file processing." },
      { name: "Workflow Automation (Make, n8n)", icon: "fas fa-project-diagram", description: "Integrated services and automated workflows using no-code tools." }
    ]
  },
  {
    category: "DevOps & Deployment",
    skills: [
      { name: "Git", icon: "fab fa-git", description: "Version control for collaborative development and branching workflows." },
      { name: "GitHub Actions (CI/CD)", icon: "fab fa-github", description: "Set up automated builds, testing, and deployment pipelines." },
      { name: "Docker", icon: "fab fa-docker", description: "Containerized apps for consistent deployment across environments." },
      { name: "Vercel", icon: "fas fa-cloud", description: "Deployed React/Next.js apps with serverless functions." },
      { name: "Firebase Hosting", icon: "fas fa-fire", description: "Hosted and managed full-stack apps with real-time features." },
      { name: "Agile Development", icon: "fas fa-tasks", description: "Worked in sprints, versioned tasks, and iterative delivery." }
    ]
  }
];

// Color palette
const colors = ["#0f62fe", "#6a5acd", "#20c997", "#ffc107", "#ff6b6b", "#ff7f50", "#8e44ad", "#1abc9c", "#f39c12"];

// Container for skills
const skillsContainer = document.getElementById("skills-container");

// Render skills with random colors
skillCategories.forEach(cat => {
  const catWrapper = document.createElement("div");
  catWrapper.className = "skill-category";

  const h4 = document.createElement("h4");
  h4.textContent = cat.category;
  catWrapper.appendChild(h4);

  const skillRow = document.createElement("div");
  skillRow.className = "skills-horizontal";

  cat.skills.forEach(skill => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.dataset.description = skill.description;

    // Random color per skill
    const color = colors[Math.floor(Math.random() * colors.length)];
    card.style.background = color + "22"; // semi-transparent
    card.style.color = color;

    card.innerHTML = `<i class="${skill.icon}"></i> ${skill.name}`;
    skillRow.appendChild(card);
  });

  catWrapper.appendChild(skillRow);
  skillsContainer.appendChild(catWrapper);
});


// Tooltip for hover
const tooltip = document.getElementById("skill-tooltip");

document.addEventListener("mouseover", (e) => {
  const card = e.target.closest(".skill-card");
  if (card) {
    tooltip.textContent = card.dataset.description;
    tooltip.classList.add("show");

    // Get bounding rect relative to viewport
    const rect = card.getBoundingClientRect();

    // Get scroll offsets
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // Calculate top: place above the skill card
    let top = rect.top + scrollTop - tooltip.offsetHeight - 6; // 6px margin
    // Fallback below if not enough space
    if (top < scrollTop) top = rect.bottom + scrollTop + 6;

    // Calculate horizontal center
    let left = rect.left + scrollLeft + rect.width / 2 - tooltip.offsetWidth / 2;
    // Keep tooltip inside viewport horizontally
    if (left < 8) left = 8;
    if (left + tooltip.offsetWidth > document.body.clientWidth - 8) {
      left = document.body.clientWidth - tooltip.offsetWidth - 8;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.closest(".skill-card")) {
    tooltip.classList.remove("show");
  }
});

// milestone data
// milestone data
const milestones = [
  { 
    year: "2020", 
    title: "Senior High School Graduation", 
    description: "Graduated at South Greenville School with Honors. Received 3 Non-Academic Awards and 4 Academic Awards.", 
    image: "images/placeholders/2020-graduation.jpg" 
  },
  { 
    year: "2021 - Year Start", 
    title: "Start of Undergraduate Studies", 
    description: "Enrolled at Laguna State Polytechnic University, taking Bachelor of Science in Computer Science. Adjusted and thrived in a new environment.", 
    image: "images/placeholders/2024-freelance.png" 
  },
  { 
    year: "2021 - Year End", 
    title: "First Projects & Experience", 
    description: "Began working on small freelance and personal projects to gain experience in web and software development.", 
    image: "images/placeholders/2022-projects.png"
  },
  { 
    year: "2023", 
    title: "Undergraduate Thesis Development", 
    description: "Started developing 'IComprehend', an AI-assisted learning tool, which was later recognized with the “Scholarly Publication Excellence Award.”", 
    image: "images/placeholders/2023-thesis.png"  
  },
  { 
    year: "2024", 
    title: "Freelance Web Development", 
    description: "Took on multiple web development projects, earning income while strengthening skills and helping finance academic needs.", 
    image: "images/placeholders/2021-university.jpg"
  },
  { 
    year: "2025", 
    title: "On-the-Job Training", 
    description: "Started OJT, gathering real-world experience and applying academic knowledge to professional scenarios.", 
    image: "images/placeholders/2025-ojt.jpg"  
  },
  { 
    year: "Present", 
    title: "Expanding Horizons", 
    description: "Currently enhancing my skills, taking on projects, and building a foundation for my future career. I'm eager to land my first professional role — maybe it’s with you?", 
    image: "images/placeholders/present-skills.jpg"  
  }
];


const milestoneContainer = document.getElementById("milestone-container");

milestones.forEach((ms, index) => {
  const item = document.createElement("div");
  item.className = `milestone ${index % 2 === 0 ? "left" : "right"}`;
  item.innerHTML = `
    <div class="milestone-side milestone-image">
      <img src="${ms.image}" alt="${ms.title}">
    </div>
    <div class="milestone-dot"></div>
    <div class="milestone-side milestone-content">
      <span class="milestone-year">${ms.year}</span>
      <h3>${ms.title}</h3>
      <p>${ms.description}</p>
    </div>
  `;
  milestoneContainer.appendChild(item);
});

// === Glow effect when beam passes dots ===
function animateDots() {
  const line = document.querySelector(".road-line-vertical");
  const beam = line.querySelector("::before"); // can't directly select pseudo
  const lineRect = line.getBoundingClientRect();

  const dots = document.querySelectorAll(".milestone-dot");
  const now = Date.now();

  dots.forEach(dot => {
    const dotRect = dot.getBoundingClientRect();
    const dotCenterY = dotRect.top + dotRect.height / 2;

    // compute beam cycle progress (sync with CSS duration)
    const cycle = 3000; // match animation duration (3s)
    const progress = (now % cycle) / cycle;
    const beamY = lineRect.top + progress * lineRect.height;

    if (Math.abs(dotCenterY - beamY) < 30) {
      if (!dot.classList.contains("glow")) {
        dot.classList.add("glow");
        setTimeout(() => dot.classList.remove("glow"), 1500);
      }
    }
  });

  requestAnimationFrame(animateDots);
}
animateDots();

// Lightbox for milestone images
const milestoneImages = document.querySelectorAll(".milestone-image img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".image-modal .close-btn");

milestoneImages.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";   // show modal
    modalImg.src = img.src;        // load clicked image
  });
});

// Close modal when clicking X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }

});
