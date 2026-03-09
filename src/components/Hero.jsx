import React from "react";

export default function Hero() {
  return (
    <section className="py-5 text-light" style={{ background: 'linear-gradient(to bottom right, #0f172a, #1e293b, #134e4a)' }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <span className="badge bg-info text-dark mb-3">Available for Opportunities</span>
            <h1 className="display-3 fw-bold mb-3">SACHIN NANDANWAR</h1>
            <h2 className="h2 text-info mb-4 fw-light">Data Analyst</h2>
            <p className="lead mb-4">
              Data Analyst fresher skilled in Python, SQL (MySQL), and Power BI, with hands-on experience in EDA, data cleaning, and KPI dashboards. Experienced in transforming raw datasets into actionable business insights.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="https://www.linkedin.com/in/sachinnandanwar" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/shanu-user" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg">
                <i className="bi bi-github"></i> GitHub
              </a>
              <button className="btn btn-info btn-lg text-dark fw-bold">
                <i className="bi bi-download"></i> Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
