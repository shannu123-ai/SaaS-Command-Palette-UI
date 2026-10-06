// ======================================================
// MODERN SAAS UI COLLECTION - COMPLETE TEMPLATE VIEWER
// ======================================================

const templates = {

    landing: {
        title: "SaaS Landing Page",
        description: "Modern SaaS landing page with hero section, features and CTA.",
        type: "landing"
    },

    dashboard: {
        title: "SaaS Dashboard",
        description: "Analytics dashboard with metrics, activity and performance.",
        type: "dashboard"
    },

    onboarding: {
        title: "SaaS Onboarding",
        description: "Step-by-step onboarding experience for new users.",
        type: "onboarding"
    },

    login: {
        title: "SaaS Login / Signup",
        description: "Clean authentication interface for SaaS applications.",
        type: "login"
    },

    pricing: {
        title: "SaaS Pricing",
        description: "Pricing plans with feature comparison and upgrade actions.",
        type: "pricing"
    },

    billing: {
        title: "SaaS Billing",
        description: "Subscription, invoices and payment management interface.",
        type: "billing"
    },

    settings: {
        title: "SaaS Account Settings",
        description: "Profile, security and notification settings.",
        type: "settings"
    },

    team: {
        title: "SaaS Team Management",
        description: "Manage team members, roles and invitations.",
        type: "team"
    },

    users: {
        title: "SaaS User Management",
        description: "Manage users, status and account access.",
        type: "users"
    },

    integrations: {
        title: "SaaS Integrations",
        description: "Connect your application with popular services.",
        type: "integrations"
    },

    help: {
        title: "SaaS Help Center",
        description: "Searchable help center with support categories.",
        type: "help"
    },

    docs: {
        title: "SaaS Documentation",
        description: "Organized documentation and developer guides.",
        type: "docs"
    },

    calendar: {
        title: "SaaS Calendar",
        description: "Modern calendar for meetings, events and scheduling.",
        type: "calendar"
    },

    files: {
        title: "SaaS File Management",
        description: "Cloud file management with folders and recent files.",
        type: "files"
    },

    workspace: {
        title: "SaaS Collaboration Workspace",
        description: "Team collaboration workspace for projects and tasks.",
        type: "workspace"
    },

    command: {
        title: "SaaS Command Palette",
        description: "Quick navigation and actions using a command palette.",
        type: "command"
    }

};


// ======================================================
// COMMON TEMPLATE CSS
// ======================================================

const templateCSS = `

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background: #0b0d18;
    color: #f5f7ff;
    min-height: 100vh;
}

.app {
    min-height: 100vh;
    padding: 28px;
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.logo {
    font-size: 22px;
    font-weight: 800;
}

.logo span {
    color: #8b5cf6;
}

.btn {
    border: 0;
    border-radius: 9px;
    padding: 11px 18px;
    background: #8b5cf6;
    color: white;
    cursor: pointer;
    font-weight: 600;
}

.btn:hover {
    opacity: .85;
}

.card {
    background: #141827;
    border: 1px solid #252a3e;
    border-radius: 16px;
    padding: 22px;
}

.hero {
    padding: 55px 35px;
    border-radius: 20px;
    background: linear-gradient(135deg,#171b32,#24164a);
    margin-bottom: 25px;
}

.hero h1 {
    font-size: 42px;
    margin-bottom: 14px;
}

.hero p {
    color: #aeb5ca;
    max-width: 650px;
    line-height: 1.7;
    margin-bottom: 22px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 18px;
}

.metric {
    font-size: 30px;
    font-weight: 800;
    margin-top: 10px;
}

.muted {
    color: #929ab2;
}

.title {
    font-size: 24px;
    margin-bottom: 18px;
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid #252a3e;
}

.row:last-child {
    border-bottom: 0;
}

.badge {
    padding: 6px 10px;
    border-radius: 20px;
    background: #24203d;
    color: #bba7ff;
    font-size: 12px;
}

.input {
    width: 100%;
    padding: 13px;
    border-radius: 9px;
    border: 1px solid #30364e;
    background: #0d101c;
    color: white;
    margin: 8px 0 14px;
}

.center {
    max-width: 480px;
    margin: 50px auto;
}

.price {
    font-size: 38px;
    font-weight: 800;
    margin: 15px 0;
}

.feature {
    padding: 9px 0;
    color: #b6bdd0;
}

.side-layout {
    display: grid;
    grid-template-columns: 210px 1fr;
    gap: 20px;
}

.sidebar {
    min-height: 500px;
}

.sidebar div {
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 6px;
    color: #aeb5ca;
    cursor: pointer;
}

.sidebar div:hover,
.sidebar div.active {
    background: #25203e;
    color: white;
}

.search {
    padding: 15px;
    border: 1px solid #30364e;
    background: #101322;
    border-radius: 10px;
    color: white;
    width: 100%;
    margin-bottom: 18px;
}

.big-number {
    font-size: 34px;
    font-weight: 800;
}

.calendar {
    display: grid;
    grid-template-columns: repeat(7,1fr);
    gap: 8px;
}

.day {
    min-height: 70px;
    background: #141827;
    border: 1px solid #252a3e;
    border-radius: 9px;
    padding: 10px;
}

.file {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #252a3e;
}

.chat {
    min-height: 300px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.message {
    padding: 12px 15px;
    border-radius: 12px;
    background: #24203d;
    max-width: 75%;
}

.message.me {
    align-self: flex-end;
    background: #8b5cf6;
}

.progress {
    height: 8px;
    background: #272c40;
    border-radius: 10px;
    overflow: hidden;
    margin: 12px 0;
}

.progress span {
    display: block;
    height: 100%;
    background: #8b5cf6;
}

@media(max-width:800px) {

    .grid {
        grid-template-columns: 1fr;
    }

    .side-layout {
        grid-template-columns: 1fr;
    }

    .hero h1 {
        font-size: 30px;
    }

    .calendar {
        grid-template-columns: repeat(2,1fr);
    }

}

`;


// ======================================================
// TEMPLATE HTML GENERATOR
// ======================================================

function getTemplateHTML(type) {

    switch(type) {

        case "landing":
            return `
<div class="app">
<div class="top">
<div class="logo">Flow<span>Desk</span></div>
<button class="btn" onclick="notify('Started free trial!')">Start Free</button>
</div>

<section class="hero">
<h1>Build better products together.</h1>
<p>FlowDesk helps modern teams manage projects, collaborate and grow faster from one powerful workspace.</p>
<button class="btn" onclick="notify('Welcome to FlowDesk!')">Get Started</button>
</section>

<h2 class="title">Everything your team needs</h2>

<div class="grid">
<div class="card">
<h3>Project Management</h3>
<p class="muted">Plan and track every project.</p>
</div>

<div class="card">
<h3>Team Collaboration</h3>
<p class="muted">Keep everyone connected.</p>
</div>

<div class="card">
<h3>Analytics</h3>
<p class="muted">Understand your business performance.</p>
</div>
</div>
</div>`;


        case "dashboard":
            return `
<div class="app">

<div class="top">
<div class="logo">Flow<span>Desk</span></div>
<button class="btn" onclick="notify('Dashboard refreshed')">Refresh</button>
</div>

<h1 class="title">Dashboard</h1>

<div class="grid">

<div class="card">
<span class="muted">Revenue</span>
<div class="metric">$48,290</div>
<span class="badge">+18%</span>
</div>

<div class="card">
<span class="muted">Customers</span>
<div class="metric">2,840</div>
<span class="badge">+12%</span>
</div>

<div class="card">
<span class="muted">Projects</span>
<div class="metric">128</div>
<span class="badge">Active</span>
</div>

</div>

<br>

<div class="card">
<h2 class="title">Recent Activity</h2>

<div class="row">
<span>New customer registered</span>
<span class="badge">Today</span>
</div>

<div class="row">
<span>Project Alpha completed</span>
<span class="badge">2h ago</span>
</div>

<div class="row">
<span>Payment received</span>
<span class="badge">4h ago</span>
</div>

</div>
</div>`;


        case "onboarding":
            return `
<div class="app">

<div class="center">

<div class="card">

<div class="logo">Flow<span>Desk</span></div>

<br>

<h1>Welcome aboard! 👋</h1>

<p class="muted">Let's set up your workspace.</p>

<div class="progress">
<span style="width:60%"></span>
</div>

<label>Workspace Name</label>

<input class="input" placeholder="My Workspace">

<label>Your Role</label>

<select class="input">
<option>Founder</option>
<option>Developer</option>
<option>Designer</option>
<option>Manager</option>
</select>

<button class="btn" onclick="notify('Workspace created!')">
Continue
</button>

</div>
</div>
</div>`;


        case "login":
            return `
<div class="app">

<div class="center">

<div class="card">

<div class="logo">Flow<span>Desk</span></div>

<br>

<h1>Welcome back</h1>

<p class="muted">
Sign in to continue to your workspace.
</p>

<label>Email</label>

<input
class="input"
type="email"
placeholder="you@example.com">

<label>Password</label>

<input
class="input"
type="password"
placeholder="••••••••">

<button
class="btn"
style="width:100%"
onclick="notify('Login successful!')">
Sign In
</button>

<br><br>

<p class="muted">
Don't have an account?

<span
style="color:#a78bfa;cursor:pointer"
onclick="notify('Signup selected')">
Create account
</span>

</p>

</div>
</div>
</div>`;


        case "pricing":
            return `
<div class="app">

<div class="top">

<div class="logo">Flow<span>Desk</span></div>

<button class="btn" onclick="notify('Pricing selected')">
Compare Plans
</button>

</div>

<div class="hero">

<h1>Simple pricing.</h1>

<p>Choose the plan that fits your team.</p>

</div>

<div class="grid">

<div class="card">

<h2>Starter</h2>

<div class="price">$9</div>

<p class="muted">per user / month</p>

<div class="feature">✓ 5 Projects</div>
<div class="feature">✓ Basic Analytics</div>
<div class="feature">✓ Email Support</div>

<button class="btn" onclick="notify('Starter selected')">
Choose Plan
</button>

</div>

<div class="card">

<h2>Pro</h2>

<div class="price">$29</div>

<p class="muted">per user / month</p>

<div class="feature">✓ Unlimited Projects</div>
<div class="feature">✓ Advanced Analytics</div>
<div class="feature">✓ Priority Support</div>

<button class="btn" onclick="notify('Pro selected')">
Choose Plan
</button>

</div>

<div class="card">

<h2>Enterprise</h2>

<div class="price">$79</div>

<p class="muted">per user / month</p>

<div class="feature">✓ Unlimited Everything</div>
<div class="feature">✓ Enterprise Security</div>
<div class="feature">✓ Dedicated Support</div>

<button class="btn" onclick="notify('Enterprise selected')">
Choose Plan
</button>

</div>

</div>
</div>`;


        case "billing":
            return `
<div class="app">

<div class="top">

<h1>Billing</h1>

<button class="btn"
onclick="notify('Invoice downloaded')">
Download Invoice
</button>

</div>

<div class="grid">

<div class="card">
<span class="muted">Current Plan</span>
<div class="metric">Pro</div>
</div>

<div class="card">
<span class="muted">Next Payment</span>
<div class="metric">$29</div>
</div>

<div class="card">
<span class="muted">Payment Status</span>
<div class="metric">Paid</div>
</div>

</div>

<br>

<div class="card">

<h2 class="title">Invoices</h2>

<div class="row">
<span>September 2026</span>
<button class="btn" onclick="notify('Invoice opened')">View</button>
</div>

<div class="row">
<span>August 2026</span>
<button class="btn" onclick="notify('Invoice opened')">View</button>
</div>

<div class="row">
<span>July 2026</span>
<button class="btn" onclick="notify('Invoice opened')">View</button>
</div>

</div>

</div>`;


        case "settings":
            return `
<div class="app">

<h1 class="title">Account Settings</h1>

<div class="side-layout">

<div class="card sidebar">

<div class="active">Profile</div>
<div>Security</div>
<div>Notifications</div>
<div>Appearance</div>

</div>

<div class="card">

<h2>Profile Information</h2>

<br>

<label>Full Name</label>

<input class="input" value="Shanmukha Lakshmi">

<label>Email</label>

<input class="input" value="shanmukha@example.com">

<label>Company</label>

<input class="input" value="FlowDesk">

<button class="btn"
onclick="notify('Settings saved!')">
Save Changes
</button>

</div>

</div>
</div>`;


        // ==================================================
        // CORRECTED TEAM MANAGEMENT
        // ==================================================

        case "team":
            return `
<div class="app">

<div class="top">

<h1>Team Management</h1>

<button
class="btn"
onclick="notify('Invitation sent!')">
+ Invite Member
</button>

</div>

<div class="card">

<div class="row">

<span>
<b>Shanmukha Lakshmi</b><br>
<small class="muted">Team Leader</small>
</span>

<span class="badge">Owner</span>

</div>


<div class="row">

<span>
<b>Mohitha</b><br>
<small class="muted">Designer</small>
</span>

<span class="badge">Member</span>

</div>


<div class="row">

<span>
<b>Vyshnavi</b><br>
<small class="muted">Developer</small>
</span>

<span class="badge">Member</span>

</div>


<div class="row">

<span>
<b>Geethika</b><br>
<small class="muted">Manager</small>
</span>

<span class="badge">Member</span>

</div>


<div class="row">

<span>
<b>Priyanka</b><br>
<small class="muted">Developer</small>
</span>

<span class="badge">Member</span>

</div>

</div>

</div>`;


        case "users":
            return `
<div class="app">

<h1 class="title">User Management</h1>

<input
class="search"
placeholder="Search users..."
oninput="searchUsers(this.value)">

<div class="card" id="userList">

<div class="row user">
<span>Arjun Kumar</span>
<span class="badge">Active</span>
</div>

<div class="row user">
<span>Priya Sharma</span>
<span class="badge">Active</span>
</div>

<div class="row user">
<span>Rahul Singh</span>
<span class="badge">Pending</span>
</div>

<div class="row user">
<span>Ananya Rao</span>
<span class="badge">Active</span>
</div>

</div>
</div>`;


        case "integrations":
            return `
<div class="app">

<h1 class="title">Integrations</h1>

<p class="muted">
Connect your favorite tools.
</p>

<br>

<div class="grid">

<div class="card">

<h2>Slack</h2>

<p class="muted">
Team communication
</p>

<br>

<button class="btn"
onclick="notify('Slack connected')">
Connect
</button>

</div>


<div class="card">

<h2>GitHub</h2>

<p class="muted">
Code collaboration
</p>

<br>

<button class="btn"
onclick="notify('GitHub connected')">
Connect
</button>

</div>


<div class="card">

<h2>Google Drive</h2>

<p class="muted">
File storage
</p>

<br>

<button class="btn"
onclick="notify('Google Drive connected')">
Connect
</button>

</div>

</div>
</div>`;


        case "help":
            return `
<div class="app">

<div class="center">

<h1>Help Center</h1>

<p class="muted">
How can we help you?
</p>

<br>

<input
class="search"
placeholder="Search for answers..."
oninput="notifySearch(this.value)">

<div class="card">

<div class="row">
<span>Getting Started</span>
<span>→</span>
</div>

<div class="row">
<span>Account & Billing</span>
<span>→</span>
</div>

<div class="row">
<span>Managing Your Team</span>
<span>→</span>
</div>

<div class="row">
<span>Security & Privacy</span>
<span>→</span>
</div>

</div>

</div>
</div>`;


        case "docs":
            return `
<div class="app">

<div class="side-layout">

<div class="card sidebar">

<div class="active">Introduction</div>
<div>Getting Started</div>
<div>Authentication</div>
<div>API Reference</div>
<div>Components</div>

</div>

<div>

<h1 class="title">Documentation</h1>

<div class="card">

<h2>Introduction</h2>

<br>

<p class="muted">
Welcome to the FlowDesk documentation.
Learn how to build, configure and manage
your SaaS workspace.
</p>

<br>

<button class="btn"
onclick="notify('Guide opened')">
Read Getting Started →
</button>

</div>

</div>

</div>
</div>`;


        case "calendar":
            return `
<div class="app">

<div class="top">

<h1>Calendar</h1>

<button class="btn"
onclick="notify('New event created')">
+ New Event
</button>

</div>

<div class="calendar">

${Array.from({length:28},(_,i)=>`

<div class="day">

<b>${i+1}</b>

${i===5 ?
'<br><span class="badge">Meeting</span>' :
''}

${i===14 ?
'<br><span class="badge">Demo</span>' :
''}

</div>

`).join("")}

</div>

</div>`;


        case "files":
            return `
<div class="app">

<div class="top">

<h1>File Management</h1>

<button class="btn"
onclick="notify('Upload started')">
Upload File
</button>

</div>

<div class="card">

<div class="file">
<span>📁 Projects</span>
<span>Folder</span>
</div>

<div class="file">
<span>📁 Documents</span>
<span>Folder</span>
</div>

<div class="file">
<span>📄 presentation.pdf</span>
<span>2.4 MB</span>
</div>

<div class="file">
<span>📄 report.docx</span>
<span>840 KB</span>
</div>

<div class="file">
<span>📊 analytics.xlsx</span>
<span>1.2 MB</span>
</div>

</div>

</div>`;


        case "workspace":
            return `
<div class="app">

<div class="top">

<h1>Collaboration Workspace</h1>

<button class="btn"
onclick="notify('Task added')">
+ Add Task
</button>

</div>

<div class="grid">

<div class="card">

<h2>To Do</h2>

<br>

<div class="row">
Design homepage
</div>

<div class="row">
Write documentation
</div>

</div>


<div class="card">

<h2>In Progress</h2>

<br>

<div class="row">
Build dashboard
</div>

<div class="row">
API integration
</div>

</div>


<div class="card">

<h2>Completed</h2>

<br>

<div class="row">
Project setup
</div>

<div class="row">
Team onboarding
</div>

</div>

</div>

</div>`;


        case "command":
            return `
<div class="app">

<div class="top">

<div class="logo">
Flow<span>Desk</span>
</div>

<button class="btn"
onclick="openCommand()">
⌘ K
</button>

</div>

<div class="hero">

<h1>Command Palette</h1>

<p>
Quickly navigate your SaaS workspace
and perform actions.
</p>

<button class="btn"
onclick="openCommand()">
Open Command Palette
</button>

</div>

<div class="card">

<h2>Quick Actions</h2>

<br>

<div class="row">
Create Project
<span>→</span>
</div>

<div class="row">
Invite Team Member
<span>→</span>
</div>

<div class="row">
Open Analytics
<span>→</span>
</div>

</div>

</div>

<div id="commandBox"
style="
display:none;
position:fixed;
inset:20% 20%;
background:#15192a;
border:1px solid #353b56;
border-radius:16px;
padding:25px;
box-shadow:0 30px 80px #000;
z-index:10;
">

<h2>Command Palette</h2>

<br>

<input
class="input"
placeholder="Search commands..."
oninput="filterCommands(this.value)">

<div id="commands">

<div class="row command">
Create Project
</div>

<div class="row command">
Open Dashboard
</div>

<div class="row command">
Open Analytics
</div>

<div class="row command">
Invite Member
</div>

</div>

</div>`;

        default:
            return `
<div class="app">

<div class="card">

<h1>Template</h1>

<p class="muted">
Template content.
</p>

</div>

</div>`;
    }
}


// ======================================================
// TEMPLATE JAVASCRIPT
// ======================================================

const templateJS = `

function notify(message) {
    alert(message);
}

function searchUsers(value) {

    const users =
        document.querySelectorAll(".user");

    users.forEach(user => {

        user.style.display =
            user.textContent
            .toLowerCase()
            .includes(value.toLowerCase())
            ? "flex"
            : "none";

    });
}

function notifySearch(value) {

    console.log("Searching:", value);

}

function openCommand() {

    const box =
        document.getElementById("commandBox");

    if (box) {

        box.style.display =
            box.style.display === "none"
            ? "block"
            : "none";

    }

}

function filterCommands(value) {

    document
        .querySelectorAll(".command")
        .forEach(item => {

            item.style.display =
                item.textContent
                .toLowerCase()
                .includes(value.toLowerCase())
                ? "flex"
                : "none";

        });

}

`;


// ======================================================
// GET TEMPLATE
// ======================================================

const params =
    new URLSearchParams(window.location.search);

const templateId =
    params.get("id") || "landing";

const template =
    templates[templateId];


// ======================================================
// PAGE ELEMENTS
// ======================================================

const titleElement =
    document.getElementById("templateTitle");

const descriptionElement =
    document.getElementById("templateDescription");

const previewFrame =
    document.getElementById("previewFrame");

const htmlCode =
    document.getElementById("htmlCode");

const cssCode =
    document.getElementById("cssCode");

const jsCode =
    document.getElementById("jsCode");


// ======================================================
// LOAD TEMPLATE
// ======================================================

function loadTemplate() {

    if (!template) {
        return;
    }

    titleElement.textContent =
        template.title;

    descriptionElement.textContent =
        template.description;

    const html =
        getTemplateHTML(template.type);

    const fullHTML = `
<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<meta
name="viewport"
content="width=device-width,initial-scale=1.0">

<style>

${templateCSS}

</style>

</head>

<body>

${html}

<script>

${templateJS}

<\/script>

</body>

</html>
`;

    previewFrame.srcdoc =
        fullHTML;

    htmlCode.textContent =
        html.trim();

    cssCode.textContent =
        templateCSS.trim();

    jsCode.textContent =
        templateJS.trim();

}


// ======================================================
// TABS
// ======================================================

const tabButtons =
    document.querySelectorAll(".tab-btn");

const tabContents =
    document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

    button.addEventListener(
        "click",
        function() {

            const target =
                this.dataset.tab;

            tabButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            tabContents.forEach(content => {

                content.classList.remove("active");

            });

            this.classList.add("active");

            const selected =
                document.getElementById(target);

            if (selected) {

                selected.classList.add("active");

            }

        }
    );

});


// ======================================================
// COPY CODE
// ======================================================

function copyCode(elementId) {

    const element =
        document.getElementById(elementId);

    if (!element) {
        return;
    }

    navigator.clipboard
        .writeText(element.textContent)
        .then(() => {

            alert("Code copied successfully!");

        })
        .catch(() => {

            alert("Unable to copy code.");

        });

}


// ======================================================
// START
// ======================================================

loadTemplate();

console.log(
    "Modern SaaS Template Viewer loaded successfully."
);