/* ============================================
   YIP IN TSOI LAB — Main JavaScript
   ============================================ */

// ===== PROJECT DATA =====
const projects = [
  {
    id: 1,
    title: "Agent Office",
    desc: "Coming Soon — Agentic AI solution for Watsons Thailand.",
    team: "Watsons Thailand",
    domain: "Agentic AI",
    target: "Agentic AI",
    status: "sandbox",
    votes: 0,
    date: "2026-05-01",
    deployment: "Try Out",
    comingSoon: false,
    icon: "🤖",
    tags: [],
    features: [],
    refLink: "#"
  },
  {
    id: 2,
    title: "Rider Uniform Verifier",
    desc: "ส่งรูปไรเดอร์เข้ามา AI จะบอกได้ทันทีว่าคนในภาพใส่เสื้อยูนิฟอร์มสีม่วง-เหลืองของ Robinhood ถูกต้องหรือไม่ พร้อมระบุ Confidence Score และเหตุผลประกอบ",
    team: "Robinhood — Operations",
    domain: "Delivery",
    target: "Delivery",
    status: "internal",
    votes: 34,
    date: "2026-03-10",
    icon: "🛵",
    tags: ["Gemini 2.5 Pro", "Vision AI", "FastAPI"],
    features: ["ตรวจสีเสื้อ + โลโก้ อัตโนมัติ", "ลดภาระ QC ของทีม Operations", "ตอบกลับภายใน 2-3 วินาที", "แสดงค่า Confidence score 0-100%"],
    deployment: "Try Out",
    refLink: "#"
  },
  {
    id: 3,
    title: "Food Delivery Verifier",
    desc: "แก้ปัญหาลูกค้าสั่ง \"ข้าวมันไก่\" แต่ได้ \"ข้าวหมูแดง\" ระบบจะรับรูปอาหารที่จัดส่งจริงเทียบกับชื่อเมนูที่สั่ง แล้วตัดสินว่าตรงกันหรือไม่ พร้อมบอกว่า AI มองเห็นอาหารอะไรในรูป",
    team: "Robinhood — Quality Assurance",
    domain: "Delivery",
    target: "Delivery",
    status: "internal",
    votes: 28,
    date: "2026-02-20",
    icon: "📦",
    tags: ["Gemini 2.5 Pro", "Multimodal", "Cloud Run"],
    features: ["เทียบรูปจริง vs ชื่อเมนู", "ลด Complaint จากลูกค้า", "แสดง Similarity score 0-100%", "บอกชื่ออาหารที่ AI เห็นในรูป"],
    deployment: "Try Out",
    refLink: "#"
  },
  {
    id: 4,
    title: "Food Auto-Tagger",
    desc: "ร้านค้าแค่อัปโหลดรูปเมนู AI จะติ๊กหมวดหมู่ให้อัตโนมัติจาก 39 หมวดของ Robinhood (เช่น \"อาหารจานเดียว\", \"อาหารญี่ปุ่น\", \"ของทอด\") โดยสามารถเลือกได้หลายหมวดพร้อมกัน",
    team: "Robinhood — Merchant Tools",
    domain: "Delivery",
    target: "Delivery",
    status: "internal",
    votes: 45,
    date: "2026-01-15",
    icon: "🏷️",
    tags: ["Gemini 2.5 Pro", "Schema Enforcement", "39 Categories"],
    features: ["มี 39 หมวดหมู่ครอบคลุมทุกประเภท", "Multi-tag ติ๊กได้หลายหมวด", "ช่วยเรื่อง Search Optimization บนแอป", "ร้านค้าแค่ตรวจความถูกต้องแล้วกดยืนยัน"],
    deployment: "Try Out",
    refLink: "#"
  },
  {
    id: 5,
    title: "YIP AI Chatbot",
    desc: "Chatbot ที่เข้าถึงข้อมูลภายในองค์กรได้โดยตรง ไม่ว่าจะเป็นเอกสาร ระเบียบ หรือข้อมูลจากฐานข้อมูล พนักงานแค่ถามเป็นภาษาธรรมชาติ AI จะค้นหาและตอบพร้อมอ้างอิงแหล่งที่มา รองรับการพิมพ์ด้วยเสียงภาษาไทย",
    team: "Enterprise — Knowledge Management",
    domain: "Chatbot",
    target: "Chatbot",
    status: "internal",
    votes: 52,
    date: "2025-12-01",
    icon: "💬",
    tags: ["RAG", "Private Knowledge Base", "Speech-to-Text", "Thai NLP"],
    features: ["RAG Pipeline: ค้นหาข้อมูลจากเอกสารภายในแบบ Semantic Search แล้วนำมาสร้างคำตอบ", "Database Connect: ดึงข้อมูลจาก Database มาตอบคำถามเชิงตัวเลขและสถิติได้แบบ Real-time", "Voice Input: พูดภาษาไทยใส่ไมค์ได้เลย ไม่ต้องพิมพ์", "Source Citation: ทุกคำตอบบอกแหล่งอ้างอิง ตรวจสอบได้ว่า AI ดึงข้อมูลมาจากไหน"],
    deployment: "Try Out",
    refLink: "#"
  },
  {
    id: 6,
    title: "YIP AI AML",
    desc: "ระบบตรวจจับธุรกรรมต้องสงสัยด้วย Behavioral AI แทนที่ระบบ Rule-Based แบบเดิม โดย AI จะเรียนรู้พฤติกรรมปกติของลูกค้าแต่ละคน แล้วจับ \"ความผิดปกติ\" ที่ระบบเดิมมองข้าม พร้อมอธิบายเหตุผลให้เจ้าหน้าที่ ปปง. (AML) เข้าใจได้",
    team: "Banking — Anti-Money Laundering",
    domain: "Finance",
    target: "Finance",
    status: "internal",
    votes: 38,
    date: "2026-01-20",
    icon: "🛡️",
    tags: ["XGBoost", "SHAP", "MLOps", "Behavioral AI"],
    features: ["ลด False Positive ได้อย่างมีนัยสำคัญ", "Explainable AI อธิบายเหตุผลได้ทุกเคส", "มีระบบ Human-in-the-Loop Feedback", "รองรับการทำรายงาน ปปง. 1-03"],
    deployment: "Try Out",
    refLink: "#"
  },
  {
    id: 7,
    title: "Customs HS Code Classifier",
    desc: "ถ่ายรูปสินค้าหรือพิมพ์ชื่อสินค้าเข้ามา AI จะระบุพิกัด HS Code 8 หลักตามระบบของกรมศุลกากรไทย พร้อมอธิบายเหตุผลว่าทำไมถึงจัดเข้าพิกัดนั้น",
    team: "กรมศุลกากร — Trade Compliance",
    domain: "Finance",
    target: "Finance",
    status: "commercial",
    votes: 63,
    date: "2025-11-05",
    icon: "📋",
    tags: ["Gemini 2.5 Pro", "Multimodal", "Customs"],
    features: ["รับได้ทั้งรูปภาพและข้อความ", "ระบุ HS Code 8 หลักของไทย", "อธิบายตามหลักพิกัดศุลกากร (GIR)", "มีคำอธิบายทั้งภาษาไทย-อังกฤษ"],
    deployment: "Try Out",
    refLink: "#"
  },
  {
    id: 8,
    title: "Contact Center Analytics",
    desc: "ระบบแปลงไฟล์เสียงจาก Call Center เป็นข้อความ สามารถแยกผู้พูดได้ 2 ฝั่ง (Agent / Customer) แล้ววิเคราะห์ Sentiment (อารมณ์ความรู้สึก) อัตโนมัติ เพื่อให้ทีม CX คัดกรองเคสที่ต้องดูแลเร่งด่วน",
    team: "Enterprise — Customer Service",
    domain: "Customer Service",
    target: "Customer Service",
    status: "commercial",
    votes: 41,
    date: "2025-10-15",
    icon: "📞",
    tags: ["Speech-to-Text", "Sentiment", "Batch Processing", "Local Deployment"],
    features: ["รองรับภาษาไทยโดยเฉพาะ", "Speaker Diarization แยกผู้พูด 2 ฝั่ง", "Sentiment Analysis วิเคราะห์อารมณ์อัตโนมัติ", "สามารถ Export ข้อมูลเป็น CSV"],
    deployment: "Try Out",
    refLink: "#"
  },
  {
    id: 9,
    title: "BDI AI Report Writer",
    desc: "ระบบรับข้อมูลดิบหลายร้อยหัวข้อจากไฟล์ CSV แล้วให้ AI เขียนรายงานฉบับเต็มออกมาเป็นไฟล์ Word อัตโนมัติ ครอบคลุมทั้งรายงานผลการศึกษาและรายงานมาตรฐาน ตามรูปแบบเอกสารราชการไทย",
    team: "BDI — Document Automation",
    domain: "Document",
    target: "Document",
    status: "commercial",
    votes: 55,
    date: "2025-09-20",
    icon: "📄",
    tags: ["Gemini 2.5 Pro", "Vertex AI", "python-docx", "50+ TOR Topics", "Local Deployment"],
    features: ["Dual Micro-Chunking ป้อนข้อมูลให้ AI ทีละหัวข้อ", "ได้ทั้งผลการศึกษา + ข้อเสนอแนะ + Gap Analysis", "ใช้ภาษาเชิงบรรทัดฐานทางการ (ต้อง/ควร/อาจ)", "สร้างอภิธานศัพท์และบรรณานุกรมให้อัตโนมัติ"],
    deployment: "Try Out",
    refLink: "#"
  },
  {
    id: 10,
    title: "AI OCR Scanner",
    desc: "AI-powered OCR scanning solution for Brother Thailand.",
    team: "Brother Thailand",
    domain: "Document",
    target: "Document",
    status: "commercial",
    votes: 0,
    date: "2026-04-01",
    comingSoon: false,
    icon: "🖨️",
    tags: ["OCR", "Vision AI", "Automation"],
    features: ["Extract text from scanned documents", "Support multiple languages", "Export to structured data", "Brother Thailand Integration"],
    deployment: "Try Out",
    refLink: "#"
  }
];

// ===== SUCCESS STORIES DATA (Commercialized products) =====
const successStories = [
  {
    emoji: "📋",
    title: "Customs HS Code Classifier",
    desc: "AI ที่ระบุ HS Code 8 หลักจากรูปภาพหรือชื่อสินค้า ใช้งานจริงกับกรมศุลกากรไทย",
    result: "Commercialized — กรมศุลกากร"
  },
  {
    emoji: "📞",
    title: "Contact Center Analytics",
    desc: "แปลงเสียง Call Center เป็นข้อความพร้อม Sentiment Analysis ใช้งานจริงในองค์กร",
    result: "Commercialized — Enterprise"
  },
  {
    emoji: "📄",
    title: "BDI AI Report Writer",
    desc: "สร้างรายงานวิจัยภาษาไทยอัตโนมัติจากข้อมูล CSV ส่งออกเป็น Word พร้อมบรรณานุกรม",
    result: "Commercialized — BDI"
  }
];

// ===== DISCUSSION DATA =====
const discussionMessages = {
  default: [
    { name: "Niran W.", role: "Solution Architect", team: "DAS TEAM", text: "โครงสร้างระบบรองรับการขยายตัวในอนาคตเรียบร้อยครับ", time: "2 hours ago", color: "blue" },
    { name: "Somchai T.", role: "Domain Expert", team: "Robinhood", text: "ต้องการให้ระบบรองรับการแสดงผลภาษาไทยอย่างสมบูรณ์ครับ", time: "1 hour ago", color: "purple" },
    { name: "Sarisa K.", role: "Product Owner", team: "Watsons", text: "ดีไซน์ดูทันสมัยและใช้งานง่ายมากค่ะ!", time: "30 mins ago", color: "green" }
  ]
};

// ===== STATE =====
let activeRole       = "All";
let currentProjectId = null;
let activePage       = "home";
let dashChartsInitialized = false;

// Upvote persistence
const votedKey = "yip_voted";
function getVoted()    { try { return JSON.parse(localStorage.getItem(votedKey)) || {}; } catch { return {}; } }
function setVoted(obj) { localStorage.setItem(votedKey, JSON.stringify(obj)); }

// ===== DYNAMIC METRICS CALCULATION =====
function getMetrics() {
  const sandbox = projects.filter(p => p.status === "sandbox").length;
  const internal = projects.filter(p => p.status === "internal").length;
  const commercial = projects.filter(p => p.status === "commercial").length;
  return { total: projects.length, sandbox, internal, commercial };
}

function updateAllMetrics() {
  const m = getMetrics();
  // Home stats
  const statTotal = document.getElementById("statTotal");
  const statSandbox = document.getElementById("statSandbox");
  const statInternal = document.getElementById("statInternal");
  const statCommercialized = document.getElementById("statCommercialized");
  if (statTotal) { statTotal.dataset.count = m.total; statTotal.textContent = m.total; }
  if (statSandbox) { statSandbox.dataset.count = m.sandbox; statSandbox.textContent = m.sandbox; }
  if (statInternal) { statInternal.dataset.count = m.internal; statInternal.textContent = m.internal; }
  if (statCommercialized) { statCommercialized.dataset.count = m.commercial; statCommercialized.textContent = m.commercial; }
  // Dashboard stats
  const dashTotal = document.getElementById("dashTotal");
  const dashSandbox = document.getElementById("dashSandbox");
  const dashInternal = document.getElementById("dashInternal");
  const dashCommercialized = document.getElementById("dashCommercialized");
  if (dashTotal) dashTotal.textContent = m.total;
  if (dashSandbox) dashSandbox.textContent = m.sandbox;
  if (dashInternal) dashInternal.textContent = m.internal;
  if (dashCommercialized) dashCommercialized.textContent = m.commercial;
}

// ===== DOM REFERENCES =====
const projectGridEl    = document.getElementById("projectGrid");
const successGridEl    = document.getElementById("successGrid");
const roleFilter       = document.getElementById("roleFilter");
const searchInput      = document.getElementById("searchInput");
const navbar           = document.getElementById("navbar");
const hamburgerBtn     = document.getElementById("hamburgerBtn");
const mobileNav        = document.getElementById("mobileNav");
const mobileNavClose   = document.getElementById("mobileNavClose");
const scrollProgress   = document.getElementById("scrollProgress");
const btnDeploy        = document.getElementById("btnDeploy");

// Project Modal
const projectModal     = document.getElementById("projectModal");
const modalClose       = document.getElementById("modalClose");
const modalBadges      = document.getElementById("modalBadges");
const modalStatus      = document.getElementById("modalStatus");
const modalTitle       = document.getElementById("modalTitle");
const modalDesc        = document.getElementById("modalDesc");
const modalTeam        = document.getElementById("modalTeam");
const modalDomain      = document.getElementById("modalDomain");
const modalDate        = document.getElementById("modalDate");
const modalVotes       = document.getElementById("modalVotes");
const btnVote          = document.getElementById("btnVote");
const btnVoteText      = document.getElementById("btnVoteText");
const modalShareBtn    = document.getElementById("modalShareBtn");

// Submit Modal
const submitModal      = document.getElementById("submitModal");
const submitModalClose = document.getElementById("submitModalClose");
const ideaForm         = document.getElementById("ideaForm");
const ideaTitleEl      = document.getElementById("ideaTitle");
const ideaDomainEl     = document.getElementById("ideaDomain");
const cancelSubmit     = document.getElementById("cancelSubmit");
const formSuccess      = document.getElementById("formSuccess");
const successClose     = document.getElementById("successClose");

// Discussion Hub
const discussionThread = document.getElementById("discussionThread");
const discussionInput  = document.getElementById("discussionInput");
const discussionSend   = document.getElementById("discussionSend");

// ===== PAGE NAVIGATION =====
function switchPage(page, scrollTarget) {
  activePage = page;
  document.querySelectorAll(".page-view").forEach(el => el.classList.remove("active"));
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add("active");

  // Update nav links active state
  document.querySelectorAll(".nav-links a, .mobile-nav-overlay a").forEach(a => {
    a.classList.toggle("active", a.dataset.page === page && !a.dataset.scroll);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Init dashboard charts
  if (page === "dashboard") {
    updateAllMetrics();
    renderDashboardTable();
    if (!dashChartsInitialized) {
      setTimeout(initDashboardCharts, 300);
      dashChartsInitialized = true;
    }
  }

  // Re-trigger scroll animations
  setTimeout(() => initScrollAnimations(), 100);

  // Scroll to section if specified
  if (scrollTarget) {
    setTimeout(() => {
      const el = document.getElementById(scrollTarget);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }
}

// Bind nav clicks
document.querySelectorAll("[data-page]").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    const page = el.dataset.page;
    const scroll = el.dataset.scroll || null;
    switchPage(page, scroll);
    // Close mobile nav
    mobileNav.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// ===== RENDER PROJECTS (HOME) =====
function statusLabel(s) {
  return s === 'sandbox' ? 'In Sandbox' : s === 'internal' ? 'Internal Used' : 'Commercialized';
}

function renderProjects() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  let filtered = projects.filter(p => {
    if (activeRole !== "All") {
      const stageMap = { "In Sandbox": "sandbox", "Internal Use": "internal", "Commercialized": "commercial" };
      if (stageMap[activeRole] && p.status !== stageMap[activeRole]) return false;
    }
    if (searchTerm) {
      return p.title.toLowerCase().includes(searchTerm) ||
             p.desc.toLowerCase().includes(searchTerm) ||
             (p.team || "").toLowerCase().includes(searchTerm) ||
             p.domain.toLowerCase().includes(searchTerm);
    }
    return true;
  });

  const ctaCard = `
    <div class="card-add" onclick="handleAddIdea()">
      <div class="card-add-icon">+</div>
      <div class="card-add-title">Add Your Innovation</div>
      <div class="card-add-sub">Submit a new AI idea</div>
    </div>`;

  const voted = getVoted();
  const cards = filtered.map((p, idx) => `
    <div class="project-card fade-up${p.darkCard ? ' project-card--dark' : ''}" data-id="${p.id}">
      <div class="card-top">
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="status-tag status-${p.status}">${statusLabel(p.status)}</span>
          <span class="card-num">${String(idx + 1).padStart(2, '0')}</span>
        </div>
        <div class="card-actions">
          <button class="btn-card-action btn-edit" title="Edit" onclick="event.stopPropagation(); editProject(${p.id})"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></button>
          <button class="btn-card-action btn-delete" title="Delete" onclick="event.stopPropagation(); deleteProject(${p.id})"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
        </div>
      </div>
      <div class="card-icon-wrapper">
        <span class="card-icon">${p.icon || '💡'}</span>
      </div>
      <h3 class="card-title">${p.title}</h3>
      <div class="card-team">${p.team || ''}</div>
      <p class="card-desc">${p.desc}</p>
      ${p.features && p.features.length ? `
        <div class="card-features">
          ${p.features.map(f => `<div class="card-feature-item">— ${f}</div>`).join('')}
        </div>
      ` : ''}
      ${p.tags && p.tags.length ? `
        <div class="card-tags">
          ${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
        </div>
      ` : ''}
      <div class="card-badges">
        <span class="badge badge-domain">DAS TEAM</span>
        <span class="badge badge-role">${p.target || p.domain}</span>
      </div>
      <div class="card-footer">
        <div class="card-votes ${voted[p.id] ? 'voted' : ''}" onclick="event.stopPropagation(); toggleVote(${p.id})">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.757c1.246 0 2.25 1.004 2.25 2.25 0 .393-.105.759-.286 1.077l-1.933 3.383A4.5 4.5 0 0114.88 19H7.5v-7.5l2.121-2.121a3 3 0 00.879-2.121V6.5a1.5 1.5 0 113 0V10zM7.5 19H4.5A1.5 1.5 0 013 17.5V13a1.5 1.5 0 011.5-1.5h3" /></svg>
          <span class="vote-count-num">${p.votes + (voted[p.id] ? 1 : 0)}</span>
        </div>
        <button class="btn-try-out" onclick="event.stopPropagation(); window.open('${p.refLink || '#'}', '_blank');">
          Try Out →
        </button>
      </div>
    </div>`).join("");

  projectGridEl.innerHTML = ctaCard + cards;
  projectGridEl.querySelectorAll(".project-card").forEach(el => {
    el.addEventListener("click", () => openProjectModal(parseInt(el.dataset.id, 10)));
  });
  requestAnimationFrame(() => {
    projectGridEl.querySelectorAll(".fade-up").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 80);
    });
  });
  updateAllMetrics();
}

// ===== RENDER SUCCESS STORIES =====
function renderSuccessStories() {
  successGridEl.innerHTML = successStories.map(s => `
    <div class="success-card">
      <div class="success-emoji">${s.emoji}</div>
      <h3 class="success-title">${s.title}</h3>
      <p class="success-desc">${s.desc}</p>
      <div class="success-result">✓ ${s.result}</div>
    </div>`).join("");
}

// ===== ROLE FILTER =====
roleFilter.addEventListener("change", () => {
  activeRole = roleFilter.value;
  renderProjects();
});

// ===== SEARCH =====
let searchTimeout;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(renderProjects, 200);
});

// ===== PROJECT DETAIL MODAL =====
function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function openProjectModal(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  currentProjectId = id;
  modalBadges.innerHTML = `<span class="badge badge-role">${p.target || p.domain}</span><span class="badge badge-domain">DAS TEAM</span>`;
  modalStatus.className = `status-tag status-${p.status}`;
  modalStatus.textContent = statusLabel(p.status);
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  modalTeam.textContent = p.team || '';
  modalDomain.textContent = p.domain;
  modalDate.textContent = formatDate(p.date);

  // Features
  const modalFeatures = document.getElementById("modalFeatures");
  if (modalFeatures) {
    modalFeatures.innerHTML = (p.features || []).map(f => `<div class="modal-feature-item">→ ${f}</div>`).join('');
  }
  // Tags
  const modalTags = document.getElementById("modalTags");
  if (modalTags) {
    modalTags.innerHTML = (p.tags || []).map(t => `<span class="card-tag">${t}</span>`).join('');
  }

  updateVoteUI(id, p.votes);
  renderDiscussion();
  projectModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateVoteUI(id, baseVotes) {
  const voted = getVoted();
  const v = !!voted[id];
  modalVotes.textContent = v ? baseVotes + 1 : baseVotes;
  btnVoteText.textContent = v ? "Voted ✓" : "Upvote";
  btnVote.classList.toggle("voted", v);
}

function closeProjectModal() {
  projectModal.classList.remove("active");
  document.body.style.overflow = "";
  currentProjectId = null;
}

modalClose.addEventListener("click", closeProjectModal);
projectModal.addEventListener("click", e => { if (e.target === projectModal) closeProjectModal(); });

btnVote.addEventListener("click", () => {
  if (currentProjectId === null) return;
  const voted = getVoted();
  if (voted[currentProjectId]) delete voted[currentProjectId];
  else voted[currentProjectId] = true;
  setVoted(voted);
  const p = projects.find(x => x.id === currentProjectId);
  updateVoteUI(currentProjectId, p.votes);
  renderProjects();
});

modalShareBtn.addEventListener("click", () => {
  const p = projects.find(x => x.id === currentProjectId);
  if (!p) return;
  const text = `"${p.title}" on YIP IN TSOI LAB — ${p.desc}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      const orig = modalShareBtn.innerHTML;
      modalShareBtn.innerHTML = "✓ Copied!";
      setTimeout(() => { modalShareBtn.innerHTML = orig; }, 2000);
    });
  }
});

// ===== DISCUSSION HUB =====
function renderDiscussion() {
  const msgs = discussionMessages.default;
  // Newest first: reverse the array before mapping
  discussionThread.innerHTML = [...msgs].reverse().map((m) => {
    const isLatest = m === msgs[msgs.length - 1];
    return `
      <div class="discussion-msg ${isLatest ? 'msg-latest' : ''} color-${m.color || 'gray'}">
        <div class="discussion-avatar">${m.name[0]}</div>
        <div class="discussion-bubble">
          <div class="discussion-bubble-header">
            <span class="msg-name">${m.name}</span>
            <span class="msg-team">${m.team || ''}</span>
            <span class="msg-time">${m.time}</span>
          </div>
          <div class="discussion-bubble-text">${m.text}</div>
        </div>
      </div>`;
  }).join("");
  discussionThread.scrollTop = 0;
}

discussionSend.addEventListener("click", () => {
  const text = discussionInput.value.trim();
  if (!text) return;
  discussionMessages.default.push({ 
    name: "You", 
    role: "User", 
    team: "DAS TEAM", 
    text: text, 
    time: "Just now",
    color: "red"
  });
  discussionInput.value = "";
  renderDiscussion();
});

discussionInput.addEventListener("keydown", e => {
  if (e.key === "Enter") discussionSend.click();
});

// ===== SUBMIT IDEA MODAL =====
function openSubmitModal() {
  submitModal.classList.add("active");
  document.body.style.overflow = "hidden";
  ideaForm.style.display = "";
  formSuccess.style.display = "none";
  ideaForm.reset();
  // Clear tags
  const tagsList = document.getElementById("tagsList");
  if (tagsList) tagsList.innerHTML = "";
}

function closeSubmitModal() {
  submitModal.classList.remove("active");
  document.body.style.overflow = "";
}

function handleAddIdea() { openSubmitModal(); }

submitModalClose.addEventListener("click", closeSubmitModal);
cancelSubmit.addEventListener("click", closeSubmitModal);
successClose.addEventListener("click", closeSubmitModal);
submitModal.addEventListener("click", e => { if (e.target === submitModal) closeSubmitModal(); });

// Tags management
const currentTags = [];
const btnAddTag = document.getElementById("btnAddTag");
const ideaTagsInput = document.getElementById("ideaTags");
const tagsList = document.getElementById("tagsList");

function renderTags() {
  if (!tagsList) return;
  tagsList.innerHTML = currentTags.map((t, i) =>
    `<span class="form-tag">${t} <button type="button" onclick="removeTag(${i})">&times;</button></span>`
  ).join('');
}

function removeTag(i) {
  currentTags.splice(i, 1);
  renderTags();
}

if (btnAddTag) {
  btnAddTag.addEventListener("click", () => {
    const val = ideaTagsInput.value.trim();
    if (val && currentTags.length < 10) {
      currentTags.push(val);
      ideaTagsInput.value = "";
      renderTags();
    }
  });
}

if (ideaTagsInput) {
  ideaTagsInput.addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); btnAddTag.click(); }
  });
}

ideaForm.addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;
  const title = ideaTitleEl.value.trim();
  const domain = ideaDomainEl.value;
  const ideaTeam = document.getElementById("ideaTeam");
  const ideaStatus = document.getElementById("ideaStatus");

  [ideaTitleEl, ideaDomainEl, ideaTeam, ideaStatus].forEach(el => {
    if (el) {
      el.classList.remove("invalid");
      if (!el.value || !el.value.trim()) { el.classList.add("invalid"); valid = false; }
    }
  });
  if (!valid) return;

  const statusMap = { "sandbox": "sandbox", "internal": "internal", "commercial": "commercial" };
  projects.unshift({
    id: Date.now(),
    title: title,
    desc: document.getElementById("ideaKnowledge") ? document.getElementById("ideaKnowledge").value.trim() : "",
    team: ideaTeam ? ideaTeam.value.trim() : "",
    domain: domain,
    target: domain,
    status: statusMap[ideaStatus.value] || "sandbox",
    votes: 0,
    date: new Date().toISOString().split("T")[0],
    icon: "ðŸ’¡",
    tags: [...currentTags],
    features: [],
    deployment: ""
  });

  currentTags.length = 0;
  ideaForm.style.display = "none";
  formSuccess.style.display = "";
  renderProjects();
});

btnDeploy.addEventListener("click", e => { e.preventDefault(); openSubmitModal(); });
const btnDeployMobile = document.getElementById("btnDeployMobile");
if (btnDeployMobile) btnDeployMobile.addEventListener("click", e => { e.preventDefault(); openSubmitModal(); });

// ===== DASHBOARD =====
function renderDashboardTable() {
  const tbody = document.getElementById("dashTableBody");
  if (!tbody) return;
  tbody.innerHTML = projects.map((p, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${p.title}</strong></td>
      <td>${p.target || p.domain}</td>
      <td><span class="status-tag status-${p.status}">${statusLabel(p.status)}</span></td>
      <td>${p.votes}</td>
    </tr>`).join("");
}

function initDashboardCharts() {
  const m = getMetrics();

  // Stage Doughnut
  const ctxStage = document.getElementById("chartDashStage");
  if (ctxStage) {
    new Chart(ctxStage, {
      type: "doughnut",
      data: {
        labels: ["In Sandbox", "Internal Used", "Commercialized"],
        datasets: [{
          data: [m.sandbox, m.internal, m.commercial],
          backgroundColor: ["#D97706", "#2563EB", "#16A34A"],
          borderWidth: 0, spacing: 3
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: "65%",
        plugins: {
          legend: { position: "bottom", labels: { color: "#808285", font: { size: 12 }, padding: 16, usePointStyle: true } }
        }
      }
    });
  }

  // Domain Bar Chart
  const ctxDomain = document.getElementById("chartDashDomain");
  if (ctxDomain) {
    const domainCounts = {};
    projects.forEach(p => { domainCounts[p.domain] = (domainCounts[p.domain] || 0) + 1; });
    new Chart(ctxDomain, {
      type: "bar",
      data: {
        labels: Object.keys(domainCounts),
        datasets: [{
          data: Object.values(domainCounts),
          backgroundColor: ["#E21E26", "#2563EB", "#16A34A", "#D97706", "#7C3AED", "#0891B2"],
          borderRadius: 6, barThickness: 28
        }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, indexAxis: "y",
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: "#808285", stepSize: 1 }, grid: { color: "#E5E7EB" } },
          y: { ticks: { color: "#808285", font: { size: 12 } }, grid: { display: false } }
        }
      }
    });
  }
}

// AI Auto-Analyze button handler
const btnAiAnalyze = document.getElementById("btnAiAnalyze");
if (btnAiAnalyze) {
  btnAiAnalyze.addEventListener("click", () => {
    const refLink = document.getElementById("ideaRefLink");
    const knowledge = document.getElementById("ideaKnowledge");
    if (!refLink || !knowledge) return;
    if (!refLink.value.trim()) {
      alert("à¸à¸£à¸¸à¸“à¸²à¹ƒà¸ªà¹ˆ Reference Link à¸à¹ˆà¸­à¸™à¹ƒà¸Šà¹‰ AI Auto-Analyze");
      return;
    }
    btnAiAnalyze.textContent = "â³ Analyzing...";
    btnAiAnalyze.disabled = true;
    setTimeout(() => {
      knowledge.value = `🔎§ à¸§à¸´à¸˜à¸µà¸à¸²à¸£à¹ƒà¸Šà¹‰à¸‡à¸²à¸™\nà¸£à¸°à¸šà¸šà¸£à¸±à¸šà¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸ˆà¸²à¸à¸¥à¸´à¸‡à¸à¹Œà¸—à¸µà¹ˆà¹ƒà¸«à¹‰à¸¡à¸²à¹à¸¥à¸°à¸›à¸£à¸°à¸¡à¸§à¸¥à¸œà¸¥à¸”à¹‰à¸§à¸¢ AI à¹€à¸žà¸·à¹ˆà¸­à¸ªà¸£à¸¸à¸›à¹€à¸™à¸·à¹‰à¸­à¸«à¸²à¸­à¸±à¸•à¹‚à¸™à¸¡à¸±à¸•à¸´\n\nâœ… à¸‚à¹‰à¸­à¸”à¸µà¹à¸¥à¸°à¸‚à¹‰à¸­à¸ˆà¸³à¸à¸±à¸”\n- à¸›à¸£à¸°à¸«à¸¢à¸±à¸”à¹€à¸§à¸¥à¸²à¹ƒà¸™à¸à¸²à¸£à¸­à¹ˆà¸²à¸™à¹à¸¥à¸°à¸ªà¸£à¸¸à¸›à¸‚à¹‰à¸­à¸¡à¸¹à¸¥\n- AI à¸­à¸²à¸ˆà¸•à¸µà¸„à¸§à¸²à¸¡à¸œà¸´à¸”à¸žà¸¥à¸²à¸”à¹ƒà¸™à¸šà¸²à¸‡à¸à¸£à¸“à¸µ à¸„à¸§à¸£à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸à¹ˆà¸­à¸™à¹ƒà¸Šà¹‰à¸‡à¸²à¸™à¸ˆà¸£à¸´à¸‡\n\nðŸ“Š à¸œà¸¥à¸à¸£à¸°à¸—à¸šà¸—à¸µà¹ˆà¹„à¸”à¹‰à¸£à¸±à¸š\n- à¸¥à¸”à¹€à¸§à¸¥à¸²à¸à¸²à¸£à¸—à¸³à¸‡à¸²à¸™à¹„à¸”à¹‰ 50-70%\n- à¹€à¸žà¸´à¹ˆà¸¡à¸„à¸§à¸²à¸¡à¸ªà¸¡à¹ˆà¸³à¹€à¸ªà¸¡à¸­à¸‚à¸­à¸‡à¹€à¸­à¸à¸ªà¸²à¸£`;
      btnAiAnalyze.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg> AI Auto-Analyze Link`;
      btnAiAnalyze.disabled = false;
    }, 1500);
  });
}

// ===== NAVBAR SCROLL + PROGRESS =====
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.width = (docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0) + "%";
});

// ===== ESC KEY =====
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeProjectModal(); closeSubmitModal(); }
});

// ===== MOBILE NAV =====
hamburgerBtn.addEventListener("click", () => {
  mobileNav.classList.add("active");
  document.body.style.overflow = "hidden";
});

mobileNavClose.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  document.body.style.overflow = "";
});

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".fade-up:not(.project-card):not(.visible)").forEach(el => observer.observe(el));
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const start = performance.now();
        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / 1500, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target);
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-count]").forEach(counter => observer.observe(counter));
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  updateAllMetrics();
  renderProjects();
  renderSuccessStories();
  initScrollAnimations();
  animateCounters();
});


function deleteProject(id) {
  if (!confirm("Are you sure you want to delete this project?")) return;
  const idx = projects.findIndex(p => p.id === id);
  if (idx !== -1) {
    projects.splice(idx, 1);
    renderProjects();
    updateAllMetrics();
  }
}

function editProject(id) {
  openProjectModal(id);
  // In a real app, this would enable edit mode in the modal.
  // For now, we'll just show a hint.
  setTimeout(() => alert("Edit mode enabled for: " + projects.find(p => p.id === id).title), 500);
}

function toggleVote(id) {
  const voted = getVoted();
  if (voted[id]) delete voted[id];
  else voted[id] = true;
  setVoted(voted);
  renderProjects();
  updateAllMetrics();
}
