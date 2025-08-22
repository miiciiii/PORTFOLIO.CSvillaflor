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
