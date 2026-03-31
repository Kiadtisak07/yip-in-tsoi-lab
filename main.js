/* ============================================
   YIP IN TSOI LAB — Main JavaScript
   ============================================ */

// ===== PROJECT DATA =====
const projects = [
  {
    id: 1,
    title: "AI Resume Screener",
    desc: "NLP-powered resume parsing and candidate ranking system that reduces HR screening time by 80%.",
    team: "HR",
    domain: "Longevity",
    status: "market",
    votes: 42,
    date: "2026-01-15"
  },
  {
    id: 2,
    title: "Smart Campaign Optimizer",
    desc: "ML model that dynamically adjusts ad spend across channels in real-time based on conversion predictions.",
    team: "Marketing",
    domain: "Finance",
    status: "internal",
    votes: 38,
    date: "2026-02-10"
  },
  {
    id: 3,
    title: "Carbon Footprint Tracker",
    desc: "Computer vision + IoT pipeline to measure and optimize carbon emissions across supply chain operations.",
    team: "Product",
    domain: "Sustainability",
    status: "prototype",
    votes: 27,
    date: "2026-03-01"
  },
  {
    id: 4,
    title: "Personalized Skincare AI",
    desc: "Deep learning model analyzing skin condition from selfies to recommend personalized beauty routines.",
    team: "Product",
    domain: "Beauty",
    status: "internal",
    votes: 51,
    date: "2025-12-20"
  },
  {
    id: 5,
    title: "AgriDrone Yield Predictor",
    desc: "Satellite imagery + weather data fusion to predict crop yields and optimize irrigation schedules.",
    team: "Product",
    domain: "Agriculture",
    status: "prototype",
    votes: 19,
    date: "2026-03-15"
  },
  {
    id: 6,
    title: "Smart Route Optimizer",
    desc: "Real-time delivery route optimization using reinforcement learning, cutting fuel costs by 30%.",
    team: "Product",
    domain: "Food Delivery",
    status: "market",
    votes: 63,
    date: "2025-11-05"
  },
  {
    id: 7,
    title: "Employee Wellness Bot",
    desc: "Conversational AI chatbot for mental health check-ins, burnout detection, and wellness resource recommendations.",
    team: "HR",
    domain: "Longevity",
    status: "internal",
    votes: 33,
    date: "2026-01-28"
  },
  {
    id: 8,
    title: "Utility Demand Forecaster",
    desc: "Time-series transformer model predicting energy/water consumption patterns for smart grid optimization.",
    team: "Marketing",
    domain: "Utilities",
    status: "prototype",
    votes: 15,
    date: "2026-03-20"
  }
];

// ===== SUCCESS STORIES DATA =====
const successStories = [
  {
    emoji: "🏆",
    title: "Smart Route Optimizer",
    desc: "Started as a hackathon idea from the Product team. Now serving 3 enterprise clients in logistics.",
    result: "Revenue: $120K ARR"
  },
  {
    emoji: "⭐",
    title: "AI Resume Screener",
    desc: "HR team built a prototype in 2 weeks. After vetting, it became our flagship HR-tech product.",
    result: "5 Clients Onboarded"
  },
  {
    emoji: "🔥",
    title: "Personalized Skincare AI",
    desc: "Cross-team effort between Product and Marketing. Now licensed to 2 beauty brands in SEA.",
    result: "2 Brand Partnerships"
  }
];

// ===== FILTER CATEGORIES =====
const categories = {
  team:   ["All", "HR", "Product", "Marketing"],
  domain: ["All", "Longevity", "Sustainability", "Beauty", "Finance", "Agriculture", "Food Delivery", "Utilities"]
};

// ===== STATE =====
let activeFilter     = "team";
let activeChip       = "All";
let currentProjectId = null;

// Upvote persistence via localStorage
const votedKey = "yip_voted";
function getVoted()    { try { return JSON.parse(localStorage.getItem(votedKey)) || {}; } catch { return {}; } }
function setVoted(obj) { localStorage.setItem(votedKey, JSON.stringify(obj)); }

// ===== DOM REFERENCES =====
const filterChipsEl    = document.getElementById("filterChips");
const projectGridEl    = document.getElementById("projectGrid");
const successGridEl    = document.getElementById("successGrid");
const btnFilterTeam    = document.getElementById("btnFilterTeam");
const btnFilterDomain  = document.getElementById("btnFilterDomain");
const searchInput      = document.getElementById("searchInput");
const navbar           = document.getElementById("navbar");
const hamburgerBtn     = document.getElementById("hamburgerBtn");
const mobileNav        = document.getElementById("mobileNav");
const mobileNavClose   = document.getElementById("mobileNavClose");
const scrollProgress   = document.getElementById("scrollProgress");
const btnDeploy        = document.getElementById("btnDeploy");

// Modal – Project Detail
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

// Modal – Submit Idea
const submitModal      = document.getElementById("submitModal");
const submitModalClose = document.getElementById("submitModalClose");
const ideaForm         = document.getElementById("ideaForm");
const ideaTitleEl      = document.getElementById("ideaTitle");
const ideaTeamEl       = document.getElementById("ideaTeam");
const ideaDomainEl     = document.getElementById("ideaDomain");
const ideaDescEl       = document.getElementById("ideaDesc");
const ideaNameEl       = document.getElementById("ideaName");
const charCount        = document.getElementById("charCount");
const cancelSubmit     = document.getElementById("cancelSubmit");
const formSuccess      = document.getElementById("formSuccess");
const successClose     = document.getElementById("successClose");

// ===== RENDER CHIPS =====
function renderChips() {
  const chips = categories[activeFilter];
  filterChipsEl.innerHTML = chips.map(chip => `
    <div class="filter-chip ${chip === activeChip ? 'active' : ''}" data-chip="${chip}">
      ${chip}
    </div>
  `).join("");

  filterChipsEl.querySelectorAll(".filter-chip").forEach(el => {
    el.addEventListener("click", () => {
      activeChip = el.dataset.chip;
      renderChips();
      renderProjects();
    });
  });
}

// ===== RENDER PROJECTS =====
function renderProjects() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  let filtered = projects.filter(p => {
    if (activeChip !== "All") {
      if (activeFilter === "team"   && p.team   !== activeChip) return false;
      if (activeFilter === "domain" && p.domain !== activeChip) return false;
    }
    if (searchTerm) {
      return p.title.toLowerCase().includes(searchTerm)  ||
             p.desc.toLowerCase().includes(searchTerm)   ||
             p.team.toLowerCase().includes(searchTerm)   ||
             p.domain.toLowerCase().includes(searchTerm);
    }
    return true;
  });

  const ctaCard = `
    <div class="card-add" id="cardAdd" onclick="handleAddIdea()">
      <div class="card-add-icon">+</div>
      <div class="card-add-title">Add Your Innovation</div>
      <div class="card-add-sub">Submit a new AI idea</div>
    </div>
  `;

  const voted = getVoted();
  const cards = filtered.map(p => `
    <div class="project-card fade-up" data-id="${p.id}" data-team="${p.team}" data-domain="${p.domain}" data-status="${p.status}">
      <div class="card-top">
        <div class="card-badges">
          <span class="badge badge-team">${p.team}</span>
          <span class="badge badge-domain">${p.domain}</span>
        </div>
        <span class="status-tag status-${p.status}">
          ${p.status === 'prototype' ? 'Prototype' : p.status === 'internal' ? 'Internal Used' : 'Market Ready'}
        </span>
      </div>
      <h3 class="card-title">${p.title}</h3>
      <p class="card-desc">${p.desc}</p>
      <div class="card-footer">
        <div class="card-meta">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg>
          ${voted[p.id] ? '<strong style="color:var(--accent-red)">' + (p.votes + 1) + '</strong>' : p.votes} votes
        </div>
        <div class="card-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </div>
      </div>
    </div>
  `).join("");

  projectGridEl.innerHTML = ctaCard + cards;

  // Click on card → open detail modal
  projectGridEl.querySelectorAll(".project-card").forEach(el => {
    el.addEventListener("click", () => {
      openProjectModal(parseInt(el.dataset.id, 10));
    });
  });

  // Fade-in stagger
  requestAnimationFrame(() => {
    projectGridEl.querySelectorAll(".fade-up").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 80);
    });
  });
}

// ===== RENDER SUCCESS STORIES =====
function renderSuccessStories() {
  successGridEl.innerHTML = successStories.map(s => `
    <div class="success-card">
      <div class="success-emoji">${s.emoji}</div>
      <h3 class="success-title">${s.title}</h3>
      <p class="success-desc">${s.desc}</p>
      <div class="success-result">✓ ${s.result}</div>
    </div>
  `).join("");
}

// ===== FILTER TOGGLE =====
btnFilterTeam.addEventListener("click", () => {
  if (activeFilter === "team") return;
  activeFilter = "team";
  activeChip   = "All";
  btnFilterTeam.classList.add("active");
  btnFilterDomain.classList.remove("active");
  renderChips();
  renderProjects();
});

btnFilterDomain.addEventListener("click", () => {
  if (activeFilter === "domain") return;
  activeFilter = "domain";
  activeChip   = "All";
  btnFilterDomain.classList.add("active");
  btnFilterTeam.classList.remove("active");
  renderChips();
  renderProjects();
});

// ===== SEARCH =====
let searchTimeout;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(renderProjects, 200);
});

// ===== PROJECT DETAIL MODAL =====
function statusLabel(status) {
  return status === 'prototype' ? 'Prototype' : status === 'internal' ? 'Internal Used' : 'Market Ready';
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function openProjectModal(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  currentProjectId = id;

  modalBadges.innerHTML = `
    <span class="badge badge-team">${p.team}</span>
    <span class="badge badge-domain">${p.domain}</span>
  `;
  modalStatus.className   = `status-tag status-${p.status}`;
  modalStatus.textContent = statusLabel(p.status);
  modalTitle.textContent  = p.title;
  modalDesc.textContent   = p.desc;
  modalTeam.textContent   = p.team;
  modalDomain.textContent = p.domain;
  modalDate.textContent   = formatDate(p.date);

  updateVoteUI(id, p.votes);

  projectModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateVoteUI(id, baseVotes) {
  const voted    = getVoted();
  const hasVoted = !!voted[id];
  modalVotes.textContent  = hasVoted ? baseVotes + 1 : baseVotes;
  btnVoteText.textContent = hasVoted ? "Voted ✓" : "Upvote";
  btnVote.classList.toggle("voted", hasVoted);
}

function closeProjectModal() {
  projectModal.classList.remove("active");
  document.body.style.overflow = "";
  currentProjectId = null;
}

modalClose.addEventListener("click", closeProjectModal);
projectModal.addEventListener("click", e => { if (e.target === projectModal) closeProjectModal(); });

// Upvote
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

// Share — copies to clipboard
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

// ===== SUBMIT IDEA MODAL =====
function openSubmitModal() {
  submitModal.classList.add("active");
  document.body.style.overflow = "hidden";
  ideaForm.style.display   = "";
  formSuccess.style.display = "none";
  ideaForm.reset();
  charCount.textContent = "0 / 400";
  [ideaTitleEl, ideaTeamEl, ideaDomainEl, ideaDescEl, ideaNameEl].forEach(el => el.classList.remove("invalid"));
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

// Character counter
ideaDescEl.addEventListener("input", () => {
  charCount.textContent = `${ideaDescEl.value.length} / 400`;
});

// Form submit + validation
ideaForm.addEventListener("submit", e => {
  e.preventDefault();
  let valid = true;

  const fields = [
    { el: ideaTitleEl,  val: ideaTitleEl.value.trim() },
    { el: ideaTeamEl,   val: ideaTeamEl.value },
    { el: ideaDomainEl, val: ideaDomainEl.value },
    { el: ideaDescEl,   val: ideaDescEl.value.trim() },
    { el: ideaNameEl,   val: ideaNameEl.value.trim() },
  ];

  fields.forEach(f => {
    f.el.classList.remove("invalid");
    if (!f.val) { f.el.classList.add("invalid"); valid = false; }
  });
  if (!valid) return;

  const newProject = {
    id:     Date.now(),
    title:  ideaTitleEl.value.trim(),
    desc:   ideaDescEl.value.trim(),
    team:   ideaTeamEl.value,
    domain: ideaDomainEl.value,
    status: "prototype",
    votes:  0,
    date:   new Date().toISOString().split("T")[0]
  };
  projects.unshift(newProject);
  if (!categories.team.includes(newProject.team))     categories.team.push(newProject.team);
  if (!categories.domain.includes(newProject.domain)) categories.domain.push(newProject.domain);

  ideaForm.style.display    = "none";
  formSuccess.style.display = "";
  renderChips();
  renderProjects();
});

// Deploy button wires to Submit modal
btnDeploy.addEventListener("click", e => { e.preventDefault(); openSubmitModal(); });

// ===== NAVBAR SCROLL + PROGRESS BAR =====
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

mobileNav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    document.body.style.overflow = "";
  });
});

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".fade-up:not(.project-card)").forEach(el => observer.observe(el));
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const start  = performance.now();

        function update(now) {
          const elapsed  = now - start;
          const progress = Math.min(elapsed / 1500, 1);
          const eased    = 1 - Math.pow(1 - progress, 3);
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
  renderChips();
  renderProjects();
  renderSuccessStories();
  initScrollAnimations();
  animateCounters();
});
