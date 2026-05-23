const fs = require("fs");
const path = require("path");

const MAIN_JS_PATH = path.join(__dirname, "..", "main.js");
const STYLE_CSS_PATH = path.join(__dirname, "..", "style.css");

// ==========================================
// 1. Fix Encoding & Characters in main.js
// ==========================================
function fixEncodingIssues() {
  try {
    let content = fs.readFileSync(MAIN_JS_PATH, "utf8");

    // From fix_chars.js
    content = content.replace(/â€”/g, "—");
    content = content.replace(/à¸—à¸”à¸¥à¸­à¸‡à¹ƒà¸Šà¹‰/g, "ทดลองใช้");
    content = content.replace(/ðŸ¤–/g, "🤖");
    content = content.replace(/ðŸ”/g, "🔎");

    // From fix_chars2.js
    content = content.replace(/â†’/g, "→");
    content = content.replace(/âœ“/g, "✓");

    fs.writeFileSync(MAIN_JS_PATH, content, "utf8");
    console.log("✅ Fixed encoding and character issues in main.js");
  } catch (error) {
    console.error("❌ Error fixing characters:", error.message);
  }
}

// ==========================================
// 2. Remove Roles from Chat Bubbles
// ==========================================
function removeRoleBadges() {
  try {
    let content = fs.readFileSync(MAIN_JS_PATH, "utf8");
    content = content.replace(/<span class="discussion-bubble-role discussion-bubble-role--\${m.role}">\${m.role === 'engineer' \? 'AI Engineer' : 'Domain Expert'}<\/span>/g, "");
    fs.writeFileSync(MAIN_JS_PATH, content, "utf8");
    console.log("✅ Removed role badges from main.js");
  } catch (error) {
    console.error("❌ Error removing roles:", error.message);
  }
}

// ==========================================
// 3. Update Dashboard CSS
// ==========================================
function updateDashboardCSS() {
  const newCSS = `/* ============================================
   DASHBOARD SYSTEM
   ============================================ */
.dashboard-section { padding: 100px 0 60px; }
.dashboard-header { margin-bottom: 32px; }
.dash-title { font-size: 32px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
.dash-subtitle { color: var(--text-secondary); font-size: 16px; }

/* Dashboard Metrics */
.dashboard-metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 40px; }
.dash-metric-card { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s; }
.dash-metric-card:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(0,0,0,0.06); }
.dash-metric-icon { font-size: 24px; margin-bottom: 12px; }
.dash-metric-value { font-size: 36px; font-weight: 800; color: var(--text-primary); line-height: 1; margin-bottom: 4px; }
.dash-metric-label { font-size: 14px; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px; }

.dash-metric-card--total { border-bottom: 3px solid #E21E26; }
.dash-metric-card--sandbox { border-bottom: 3px solid #f59e0b; }
.dash-metric-card--internal { border-bottom: 3px solid #3b82f6; }
.dash-metric-card--commercial { border-bottom: 3px solid #10b981; }

/* Dashboard Charts */
.dashboard-charts { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 24px; margin-bottom: 40px; }
.dash-chart-card { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; padding: 24px; }
.dash-chart-title { font-size: 18px; font-weight: 600; color: var(--text-primary); margin-bottom: 16px; }

/* Dashboard Table */
.dashboard-table-wrap { background: var(--card-bg); border: 1px solid var(--border-color); border-radius: 12px; padding: 24px; overflow: hidden; }
.dash-table-title { font-size: 18px; font-weight: 600; color: var(--text-primary); margin-bottom: 16px; }
.dash-table-scroll { overflow-x: auto; }
.dash-table { width: 100%; border-collapse: collapse; }
.dash-table th, .dash-table td { padding: 12px 16px; text-align: left; border-bottom: 1px solid var(--border-color); font-size: 14px; }
.dash-table th { font-weight: 600; color: var(--text-secondary); background: var(--bg-primary); }
.dash-table td { color: var(--text-primary); }
.dash-table tr:last-child td { border-bottom: none; }
.dash-table tr:hover td { background: var(--bg-primary); }
.dash-table-icon { font-size: 18px; margin-right: 8px; vertical-align: middle; }

@media (max-width: 768px) { .dashboard-charts { grid-template-columns: 1fr; } }
`;

  try {
    let content = fs.readFileSync(STYLE_CSS_PATH, "utf8");
    const agentIndex = content.indexOf("AGENT FACTORY WORKBENCH");

    if (agentIndex !== -1) {
      const cutoffIndex = content.lastIndexOf("/*", agentIndex);
      if (cutoffIndex !== -1) {
        content = content.substring(0, cutoffIndex) + newCSS;
        fs.writeFileSync(STYLE_CSS_PATH, content, "utf8");
        console.log("✅ Successfully replaced old Agent Factory CSS with Dashboard CSS in style.css");
      }
    } else {
      console.log("⚠️ Could not find 'AGENT FACTORY WORKBENCH' in style.css (Might be updated already).");
    }
  } catch (error) {
    console.error("❌ Error updating CSS:", error.message);
  }
}

// ==========================================
// 4. Update Project Data
// ==========================================
function updateProjectData() {
  const newProjectsData = `const projects = [
  {
    id: 1, title: "Agent Office", desc: "Coming Soon — Agentic AI solution for Watsons Thailand.",
    team: "Watsons Thailand", domain: "Agentic AI", target: "Agentic AI", status: "sandbox", votes: 0,
    date: "2026-05-01", comingSoon: true, icon: "🤖", tags: [], features: [], deployment: ""
  },
  {
    id: 2, title: "Rider Uniform Verifier",
    desc: "ส่งรูปไรเดอร์เข้ามา AI จะบอกได้ทันทีว่าคนในภาพใส่เสื้อยูนิฟอร์มสีม่วง-เหลืองของ Robinhood ถูกต้องหรือไม่ พร้อมระบุ Confidence Score และเหตุผลประกอบ",
    team: "Robinhood — Operations", domain: "Delivery", target: "Delivery", status: "internal", votes: 34,
    date: "2026-03-10", icon: "🛵", tags: ["Gemini 2.5 Pro", "Vision AI", "FastAPI"],
    features: ["ตรวจสีเสื้อ + โลโก้ อัตโนมัติ", "ลดภาระ QC ของทีม Operations", "ตอบกลับภายใน 2-3 วินาที", "แสดงค่า Confidence score 0-100%"],
    deployment: "Internal Used"
  },
  {
    id: 3, title: "Food Delivery Verifier",
    desc: "แก้ปัญหาลูกค้าสั่ง \\"ข้าวมันไก่\\" แต่ได้ \\"ข้าวหมูแดง\\" ระบบจะรับรูปอาหารที่จัดส่งจริงเทียบกับชื่อเมนูที่สั่ง แล้วตัดสินว่าตรงกันหรือไม่ พร้อมบอกว่า AI มองเห็นอาหารอะไรในรูป",
    team: "Robinhood — Quality Assurance", domain: "Delivery", target: "Delivery", status: "internal", votes: 28,
    date: "2026-02-20", icon: "📦", tags: ["Gemini 2.5 Pro", "Multimodal", "Cloud Run"],
    features: ["เทียบรูปจริง vs ชื่อเมนู", "ลด Complaint จากลูกค้า", "แสดง Similarity score 0-100%", "บอกชื่ออาหารที่ AI เห็นในรูป"],
    deployment: "Internal Used"
  },
  {
    id: 4, title: "Food Auto-Tagger",
    desc: "ร้านค้าแค่อัปโหลดรูปเมนู AI จะติ๊กหมวดหมู่ให้อัตโนมัติจาก 39 หมวดของ Robinhood (เช่น \\"อาหารจานเดียว\\", \\"อาหารญี่ปุ่น\\", \\"ของทอด\\") โดยสามารถเลือกได้หลายหมวดพร้อมกัน",
    team: "Robinhood — Merchant Tools", domain: "Delivery", target: "Delivery", status: "internal", votes: 45,
    date: "2026-01-15", icon: "🏷️", tags: ["Gemini 2.5 Pro", "Schema Enforcement", "39 Categories"],
    features: ["มี 39 หมวดหมู่ครอบคลุมทุกประเภท", "Multi-tag ติ๊กได้หลายหมวด", "ช่วยเรื่อง Search Optimization บนแอป", "ร้านค้าแค่ตรวจความถูกต้องแล้วกดยืนยัน"],
    deployment: "Internal Used"
  },
  {
    id: 5, title: "YIP AI Chatbot",
    desc: "Chatbot ที่เข้าถึงข้อมูลภายในองค์กรได้โดยตรง ไม่ว่าจะเป็นเอกสาร ระเบียบ หรือข้อมูลจากฐานข้อมูล พนักงานแค่ถามเป็นภาษาธรรมชาติ AI จะค้นหาและตอบพร้อมอ้างอิงแหล่งที่มา รองรับการพิมพ์ด้วยเสียงภาษาไทย",
    team: "Enterprise — Knowledge Management", domain: "Chatbot", target: "Chatbot", status: "internal", votes: 52,
    date: "2025-12-01", icon: "💬", tags: ["RAG", "Private Knowledge Base", "Speech-to-Text", "Thai NLP"],
    features: ["RAG Pipeline: ค้นหาข้อมูลจากเอกสารภายในแบบ Semantic Search แล้วนำมาสร้างคำตอบ", "Database Connect: ดึงข้อมูลจาก Database มาตอบคำถามเชิงตัวเลขและสถิติได้แบบ Real-time", "Voice Input: พูดภาษาไทยใส่ไมค์ได้เลย ไม่ต้องพิมพ์", "Source Citation: ทุกคำตอบบอกแหล่งอ้างอิง ตรวจสอบได้ว่า AI ดึงข้อมูลมาจากไหน"],
    deployment: "Internal Used", darkCard: true, extraButtons: ["ทดลอง Chatbot →", "ทดลอง Voice Input →"]
  },
  {
    id: 6, title: "YIP AI AML",
    desc: "ระบบตรวจจับธุรกรรมต้องสงสัยด้วย Behavioral AI แทนที่ระบบ Rule-Based แบบเดิม โดย AI จะเรียนรู้พฤติกรรมปกติของลูกค้าแต่ละคน แล้วจับ \\"ความผิดปกติ\\" ที่ระบบเดิมมองข้าม พร้อมอธิบายเหตุผลให้เจ้าหน้าที่ ปปง. (AML) เข้าใจได้",
    team: "Banking — Anti-Money Laundering", domain: "Finance", target: "Finance", status: "internal", votes: 38,
    date: "2026-01-20", icon: "🛡️", tags: ["XGBoost", "SHAP", "MLOps", "Behavioral AI"],
    features: ["ลด False Positive ได้อย่างมีนัยสำคัญ", "Explainable AI อธิบายเหตุผลได้ทุกเคส", "มีระบบ Human-in-the-Loop Feedback", "รองรับการทำรายงาน ปปง. 1-03"],
    deployment: "Pilot Phase"
  },
  {
    id: 7, title: "Customs HS Code Classifier",
    desc: "ถ่ายรูปสินค้าหรือพิมพ์ชื่อสินค้าเข้ามา AI จะระบุพิกัด HS Code 8 หลักตามระบบของกรมศุลกากรไทย พร้อมอธิบายเหตุผลว่าทำไมถึงจัดเข้าพิกัดนั้น",
    team: "กรมศุลกากร — Trade Compliance", domain: "Finance", target: "Finance", status: "commercial", votes: 63,
    date: "2025-11-05", icon: "📋", tags: ["Gemini 2.5 Pro", "Multimodal", "Customs"],
    features: ["รับได้ทั้งรูปภาพและข้อความ", "ระบุ HS Code 8 หลักของไทย", "อธิบายตามหลักพิกัดศุลกากร (GIR)", "มีคำอธิบายทั้งภาษาไทย-อังกฤษ"],
    deployment: "Commercialized"
  },
  {
    id: 8, title: "Contact Center Analytics",
    desc: "ระบบแปลงไฟล์เสียงจาก Call Center เป็นข้อความ สามารถแยกผู้พูดได้ 2 ฝั่ง (Agent / Customer) แล้ววิเคราะห์ Sentiment (อารมณ์ความรู้สึก) อัตโนมัติ เพื่อให้ทีม CX คัดกรองเคสที่ต้องดูแลเร่งด่วน",
    team: "Enterprise — Customer Service", domain: "Customer Service", target: "Customer Service", status: "commercial", votes: 41,
    date: "2025-10-15", icon: "📞", tags: ["Speech-to-Text", "Sentiment", "Batch Processing", "Local Deployment"],
    features: ["รองรับภาษาไทยโดยเฉพาะ", "Speaker Diarization แยกผู้พูด 2 ฝั่ง", "Sentiment Analysis วิเคราะห์อารมณ์อัตโนมัติ", "สามารถ Export ข้อมูลเป็น CSV"],
    deployment: "Commercialized"
  },
  {
    id: 9, title: "BDI AI Report Writer",
    desc: "ระบบรับข้อมูลดิบหลายร้อยหัวข้อจากไฟล์ CSV แล้วให้ AI เขียนรายงานฉบับเต็มออกมาเป็นไฟล์ Word อัตโนมัติ ครอบคลุมทั้งรายงานผลการศึกษาและรายงานมาตรฐาน ตามรูปแบบเอกสารราชการไทย",
    team: "BDI — Document Automation", domain: "Document", target: "Document", status: "commercial", votes: 55,
    date: "2025-09-20", icon: "📄", tags: ["Gemini 2.5 Pro", "Vertex AI", "python-docx", "50+ TOR Topics", "Local Deployment"],
    features: ["Dual Micro-Chunking ป้อนข้อมูลให้ AI ทีละหัวข้อ", "ได้ทั้งผลการศึกษา + ข้อเสนอแนะ + Gap Analysis", "ใช้ภาษาเชิงบรรทัดฐานทางการ (ต้อง/ควร/อาจ)", "สร้างอภิธานศัพท์และบรรณานุกรมให้อัตโนมัติ"],
    deployment: "Commercialized"
  },
  {
    id: 10, title: "AI OCR Scanner", desc: "Coming Soon — AI-powered OCR scanning solution for Brother Thailand.",
    team: "Brother Thailand", domain: "Document", target: "Document", status: "commercial", votes: 0,
    date: "2026-04-01", comingSoon: true, icon: "🖨️", tags: [], features: [], deployment: ""
  }
];

// ===== SUCCESS STORIES DATA (Commercialized products) =====
const successStories = [
  { emoji: "📋", title: "Customs HS Code Classifier", desc: "AI ที่ระบุ HS Code 8 หลักจากรูปภาพหรือชื่อสินค้า ใช้งานจริงกับกรมศุลกากรไทย", result: "Commercialized — กรมศุลกากร" },
  { emoji: "📞", title: "Contact Center Analytics", desc: "แปลงเสียง Call Center เป็นข้อความพร้อม Sentiment Analysis ใช้งานจริงในองค์กร", result: "Commercialized — Enterprise" },
  { emoji: "📄", title: "BDI AI Report Writer", desc: "สร้างรายงานวิจัยภาษาไทยอัตโนมัติจากข้อมูล CSV ส่งออกเป็น Word พร้อมบรรณานุกรม", result: "Commercialized — BDI" }
];`;

  try {
    let content = fs.readFileSync(MAIN_JS_PATH, "utf8");
    const startMatch = "const projects = [";
    const endMatch = "// ===== STATE =====";

    const startIdx = content.indexOf(startMatch);
    const endIdx = content.indexOf(endMatch);

    if (startIdx !== -1 && endIdx !== -1) {
      content = content.substring(0, startIdx) + newProjectsData + "\\n\\n" + content.substring(endIdx);
      fs.writeFileSync(MAIN_JS_PATH, content, "utf8");
      console.log("✅ Successfully updated project and success stories data in main.js");
    } else {
      console.log("⚠️ Could not find start/end markers for data update in main.js (Might be updated already).");
    }
  } catch (error) {
    console.error("❌ Error updating project data:", error.message);
  }
}

// ==========================================
// RUN ALL PATCHES
// ==========================================
console.log("🚀 Starting Project Patches...");
fixEncodingIssues();
removeRoleBadges();
updateDashboardCSS();
updateProjectData();
console.log("🎉 All patches applied successfully!");
