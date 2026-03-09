import React from "react";

export default function Education() {
  return (
    <section id="education" className="py-5 bg-light">
      <div className="container">
        <h2 className="display-5 fw-bold mb-5 text-center">Education</h2>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <div className="fs-1 mb-3">📖</div>
                    <h5 className="card-title fw-bold">B.Tech in Information Technology</h5>
                    <p className="card-text text-secondary">Oriental College of Technology</p>
                  </div>
                  <span className="badge bg-info text-dark">8.24 CGPA</span>
                </div>
                <p className="text-secondary">2020-2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
