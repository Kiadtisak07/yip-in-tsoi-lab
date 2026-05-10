
const fs = require("fs");
const path = require("path");

const newCSS = `/* ============================================
   DASHBOARD SYSTEM
   ============================================ */
.dashboard-section {
  padding: 100px 0 60px;
}

.dashboard-header {
  margin-bottom: 32px;
}

.dash-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.dash-subtitle {
  color: var(--text-secondary);
  font-size: 16px;
}

/* Dashboard Metrics */
.dashboard-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.dash-metric-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}

.dash-metric-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.06);
}

.dash-metric-icon {
  font-size: 24px;
  margin-bottom: 12px;
}

.dash-metric-value {
  font-size: 36px;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
  margin-bottom: 4px;
}

.dash-metric-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.dash-metric-card--total { border-bottom: 3px solid #E21E26; }
.dash-metric-card--sandbox { border-bottom: 3px solid #f59e0b; }
.dash-metric-card--internal { border-bottom: 3px solid #3b82f6; }
.dash-metric-card--commercial { border-bottom: 3px solid #10b981; }

/* Dashboard Charts */
.dashboard-charts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.dash-chart-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 24px;
}

.dash-chart-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

/* Dashboard Table */
.dashboard-table-wrap {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 24px;
  overflow: hidden;
}

.dash-table-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.dash-table-scroll {
  overflow-x: auto;
}

.dash-table {
  width: 100%;
  border-collapse: collapse;
}

.dash-table th,
.dash-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
  font-size: 14px;
}

.dash-table th {
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-primary);
}

.dash-table td {
  color: var(--text-primary);
}

.dash-table tr:last-child td {
  border-bottom: none;
}

.dash-table tr:hover td {
  background: var(--bg-primary);
}

.dash-table-icon {
  font-size: 18px;
  margin-right: 8px;
  vertical-align: middle;
}

@media (max-width: 768px) {
  .dashboard-charts {
    grid-template-columns: 1fr;
  }
}
`;

const filePath = path.join(__dirname, "style.css");
const content = fs.readFileSync(filePath, "utf8");

const agentIndex = content.indexOf("AGENT FACTORY WORKBENCH");
if (agentIndex !== -1) {
  const cutoffIndex = content.lastIndexOf("/*", agentIndex);
  if (cutoffIndex !== -1) {
    const newContent = content.substring(0, cutoffIndex) + newCSS;
    fs.writeFileSync(filePath, newContent, "utf8");
    console.log("Successfully replaced old Agent Factory CSS with new Dashboard CSS.");
  } else {
    console.log("Could not find start of comment block.");
  }
} else {
  console.log("Could not find AGENT FACTORY WORKBENCH.");
}

