import React, { useState } from "react";
import work1 from "../../../assets/work1.jpg";
import work2 from "../../../assets/work2.jpg";
import work3 from "../../../assets/work3.jpg";
import work4 from "../../../assets/work4.jpg";
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "UI/UX",
    tags: ["React", "CSS"],
    image: work1,
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web Apps",
    tags: ["React", "API"],
    image: work2,
  },
  {
    id: 3,
    title: "Admin Dashboard",
    category: "Web Apps",
    tags: ["Vue", "TailwindCSS"],
    image: work3,
  },

  {
    id: 4,
    title: "Blog CMS",
    category: "UI/UX",
    tags: ["Next.js", "SEO"],
    image: work4,
  },
];

const categories = ["All", "UI/UX", "Web Apps", "E-commerce"];

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="projects">
      <div className="container">
        <div className="projects__header">
          <h2 className="section__title">My Projects</h2>
          <p className="section__subtitle">
            Explore some of the work I’ve done for clients and personal growth.
          </p>
        </div>

        <div className="projects__filters">
          {categories.map((category) => (
            <button
              key={category}
              className={category === activeCategory ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="projects__grid--card">
              <img src={project.image} alt={project.title} />
              <div className="card-body">
                <h3>{project.title}</h3>
                <p>Category: {project.category}</p>
                <div className="tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <div className="links">
                  <a href="#">View Live</a>
                  <a href="#">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
