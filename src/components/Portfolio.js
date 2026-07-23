import React from "react";
import "./Design.css";
import profilePic from "./tin.jpg";

const data = {
  name1: "Kristine Jellaine",
  name2: "R. Mercado",
  role: "4th Year College Student · BSIT-WMA · National University MOA",
  address: "Makati City",
  email: "kj13mercado@gmail.com",
  phone: "09192069417",
  aboutme:
    "I'm a 4th year college student taking Bachelor of Science in Information Technology with a specialization in Web and Mobile Applications (BSIT-WMA) at National University MOA. ",
  skills: [
    { label: "HTML" },
    { label: "CSS" },
    { label: "JavaScript" },
    { label: "React" },
    { label: "Java" },
    { label: "MySQL" },
  ],
  education: [
    { level: "Elementary", school: "South Central Elementary School", place: "Moncada, Tarlac" },
    { level: "High School", school: "St. Rose Catholic School", place: "Paniqui, Tarlac" },
    { level: "Senior High School", school: "St. Rose Catholic School", place: "Paniqui, Tarlac" },
    { level: "College", school: "National University MOA", place: "BSIT" },
  ],
  projects: [
    { title: "ATM Simulation", badge: "Java", desc: "A simulation system that mimics basic ATM transactions such as deposit, withdraw, and balance inquiry." },
    { title: "E-commerce System", badge: "Web", desc: "An online store system for browsing, ordering, and managing products." },
    { title: "Sales Management System", badge: "MySQL", desc: "A system for tracking and managing sales transactions and records." },
    { title: "Inventory System", badge: "Web", desc: "A system for monitoring and managing stock levels and inventory records." },
  ],
};

export default function Portfolio() {
  return (
    <div className="kp-root">
      <header className="kp-header">
        <div>
          <p className="kp-hello">Hello, I'm</p>
          <h1 className="kp-name">{data.name1}</h1>
          <h1 className="kp-name kp-name-accent">{data.name2}</h1>
          <p className="kp-role">{data.role}</p>
          <div className="kp-contact">
            <span>{data.address}</span>
            <span>{data.email}</span>
            <span>{data.phone}</span>
          </div>
        </div>
        <div className="kp-photo-wrap">
          <img src={profilePic} alt={data.name1 + " " + data.name2} className="kp-photo" />
        </div>
      </header>

      <section className="kp-section">
        <p className="kp-eyebrow">About Me</p>
        <h2 className="kp-h2">Who I Am</h2>
        <p className="kp-about-text">{data.aboutme}</p>
      </section>

      <section className="kp-section">
        <p className="kp-eyebrow">Skills</p>
        <h2 className="kp-h2">What I Work With</h2>
        <div className="kp-skills">
          {data.skills.map((s, i) => (
            <span className="kp-skill" key={i}>
              <span>{s.label}</span>
            </span>
          ))}
        </div>
      </section>

      <section className="kp-section">
        <p className="kp-eyebrow">Education</p>
        <h2 className="kp-h2">My Academic Journey</h2>
        <div className="kp-timeline">
          {data.education.map((e, i) => (
            <div className="kp-titem" key={i}>
              <p className="kp-tlevel">{e.level}</p>
              <p className="kp-tschool">{e.school}</p>
              <p className="kp-tplace">{e.place}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="kp-section" style={{ paddingBottom: 90 }}>
        <p className="kp-eyebrow">Projects</p>
        <h2 className="kp-h2">Things I've Built</h2>
        <div className="kp-grid">
          {data.projects.map((p, i) => (
            <div className="kp-card" key={i}>
              <div className="kp-card-top">
                <span className="kp-badge">{p.badge}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}