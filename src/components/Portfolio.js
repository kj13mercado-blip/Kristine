import React from "react";
import "./Design.css";
 
const portfoliodata = {
  name: "Kristine Jellaine R. Mercado",
  address: "Makati City",
  email: "kj13mercado@gmail.com",
  phonenumber: "09192069417",
  aboutme: "secret",
  skills: [
    "HTML","CSS","JavaScript","React","Java","MySQL",
  ],
 
  education: [
    {
      level: "Elementary",
      school: "South Central Elementary School",
      year: "2016",
      address: "Moncada, Tarlac",
    },
    {
      level: "Highschool",
      school: "St. Rose Catholic School",
      year: "2021",
      address: "Paniqui, Tarlac",
    },
    {
      level: "Senior Highschool",
      school: "St. Rose Catholic School",
      year: "2023",
      address: "Paniqui, Tarlac",
    },
    {
      level: "College",
      school: "National University MOA",
      year: "2026-2027",
      address: "BSIT",
    },
  ],
 
  projects: [
    {
      title: "ATM Simulation",
      discription: "A simulation system that mimics basic ATM transactions such as deposit, withdraw, and balance inquiry.",
    },
    {
      title: "E-commerce System",
      discription: "An online store system for browsing, ordering, and managing products.",
    },
    {
      title: "Sales Management System",
      discription: "A system for tracking and managing sales transactions and records.",
    },
    {
      title: "Inventory System",
      discription: "A system for monitoring and managing stock levels and inventory records.",
    },
  ],
};
 
export default function Portfolio() {
  return (
    <div className="portfolio">
      <header className="header">
        <p className="pname">{portfoliodata.name}</p>
        <p className="prole">BSIT Student</p>
      </header>
 
      <section className="section contact">
        <p><span className="details">Address:</span> {portfoliodata.address}</p>
        <p><span className="details">Email:</span> {portfoliodata.email}</p>
        <p><span className="details">Phone number:</span> {portfoliodata.phonenumber}</p>
        <p><span className="details">About me:</span> {portfoliodata.aboutme}</p>
      </section>
 
      <section className="section">
        <h2>Skills</h2>
        <div className="skillslist">
          {portfoliodata.skills.map((skill, index) => (
            <span className="skill" key={index}>{skill}</span>
          ))}
        </div>
      </section>
 
      <section className="section">
        <h2>Education</h2>
        <div className="timeline">
          {portfoliodata.education.map((edu, index) => (
            <div className="item" key={index}>
              <p className="level">{edu.level}</p>
              <p className="school">{edu.school}</p>
              <p className="edetails">{edu.address} &middot; {edu.year}</p>
            </div>
          ))}
        </div>
      </section>
 
      <section className="section">
        <h2>Projects</h2>
        <div className="project">
          {portfoliodata.projects.map((proj, index) => (
            <div className="card" key={index}>
              <h3>{proj.title}</h3>
              <p>{proj.discription}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
 