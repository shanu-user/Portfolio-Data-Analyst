import React from "react";

const projectsData = [
  {
    img: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg",
    organization: "360DigiTMG, Bangalore, India",
    title: "Wind Turbine Failure Analysis",
    description: "Analyzed 3,000+ wind turbine sensor records to identify failure patterns and risks.",
    highlights: [
      "Performed EDA on 10+ features to detect anomaly trends",
      "Built interactive Power BI dashboards for visualization",
      "Supported data-driven decision-making"
    ],
    tech: ["Python", "Power BI", "EDA", "Data Cleaning"]
  },
  {
    img: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86",
    organization: "Self-Initiated",
    title: "Job Market Trend Analysis",
    description: "Conducted EDA on 5,000+ job postings to derive skill-demand patterns.",
    highlights: [
      "Designed dashboards for salary comparison",
      "Delivered insights on in-demand skills",
      "Provided strategic recommendations"
    ],
    tech: ["Python", "Power BI", "MySQL", "Statistical Analysis"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h2 className="display-5 fw-bold mb-5 text-center">Featured Projects</h2>
        <div className="row g-4">
          {projectsData.map((project, idx) => (
            <div key={idx} className="col-12">
              <div className="card shadow-sm border-0 overflow-hidden">
                <div className="row g-0">
                  <div className="col-md-5">
                    <img src={project.img} alt={project.title} className="img-fluid h-100 object-fit-cover" style={{ minHeight: '300px' }} />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <span className="badge bg-info text-dark mb-3">{project.organization}</span>
                      <h5 className="card-title fw-bold fs-4 mb-2">{project.title}</h5>
                      <p className="card-text text-secondary mb-3">{project.description}</p>
                      <ul className="list-unstyled mb-3">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="mb-2">
                            <span className="text-info me-2">•</span>
                            <small>{h}</small>
                          </li>
                        ))}
                      </ul>
                      <div className="d-flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="badge bg-light text-dark border">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
