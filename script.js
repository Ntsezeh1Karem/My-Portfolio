// ===== EDIT YOUR CONTENT HERE =====
// status: "Planned", "In progress" or "Done". Only mark "Done" when it is published on GitHub.
const G="https://github.com/Ntsezeh1Karem";
const projects = [
  {title:"Enterprise Network Design", cat:"Networking", status:"Planned",
   desc:"A multi-site enterprise network with VLANs, routing and a firewall, built in a simulator and fully documented with diagrams.", link:G},
  {title:"Vulnerability Assessment Lab", cat:"Cybersecurity", status:"Planned",
   desc:"Practical scanning and assessment work on a lab I own, written up as a findings report with fixes.", link:G},
  {title:"OSINT Investigation Case Study", cat:"Cybersecurity", status:"Planned",
   desc:"A sanitised case study showing how public information is gathered and what it reveals. No personal data.", link:G},
  {title:"NOVACORP Log Analysis", cat:"Cybersecurity", status:"Planned",
   desc:"Analysing security logs to spot suspicious activity. Uses permitted or synthetic data only.", link:G},
  {title:"ESP32 Sensor Network", cat:"IoT", status:"Planned",
   desc:"Sensor nodes built on my existing Arduino work, reporting readings over a wireless network.", link:G},
  {title:"NETAVA Security Platform", cat:"Software + Cybersecurity", status:"In progress",
   desc:"A security platform under development. This card will show real progress with screenshots and commits.", link:G},
  {title:"Besitra Traceability Platform", cat:"Software development", status:"In progress",
   desc:"A traceability platform, shown as an MVP with the features built so far.", link:G},
  {title:"Python Security Automation", cat:"Software development", status:"Planned",
   desc:"Small Python tools that automate repeated security tasks such as port checks and log parsing.", link:G},
  {title:"Secure IoT Monitoring Platform", cat:"IoT + Networking + Security", status:"Planned",
   desc:"The integrated project: IoT devices on a segmented network, monitored and secured end to end.", link:G},
  {title:"Video Editing Showcase", cat:"Digital media", status:"Planned",
   desc:"A curated selection of my finished edits, including demos of the projects above.", link:G},
];
const skills = {
  "Networking":["Routing and switching","VLANs","Subnetting","Wireshark"],
  "Security":["Nmap","Burp Suite","Kali Linux","Vulnerability reporting"],
  "Development":["HTML, CSS, JavaScript","Git and GitHub","Python (learning)"],
  "Media":["Video editing","Screen-recorded project demos"],
};
// ===== END OF CONTENT =====

const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
document.getElementById("project-grid").innerHTML = projects.map(p => `
  <article class="card">
    <span class="status">${esc(p.status)}</span>
    <h3>${esc(p.title)}</h3>
    <p class="cat">${esc(p.cat)}</p>
    <p>${esc(p.desc)}</p>
    <a class="more" href="${esc(p.link)}">View on GitHub</a>
  </article>`).join("");
document.getElementById("skill-list").innerHTML = Object.entries(skills).map(([k,v]) =>
  `<div><h3>${esc(k)}</h3><ul>${v.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("");
document.getElementById("yr").textContent = new Date().getFullYear();
const btn = document.querySelector(".menu-btn"), nav = document.getElementById("nav");
btn.addEventListener("click", () => btn.setAttribute("aria-expanded", nav.classList.toggle("open")));
nav.addEventListener("click", () => {nav.classList.remove("open"); btn.setAttribute("aria-expanded","false");});
