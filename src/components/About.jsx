import React from "react";

export default function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="display-5 fw-bold mb-4">About Me</h2>
            <p className="fs-5 mb-4 text-secondary">
              I'm a passionate Data Analyst with a strong foundation in transforming raw data into meaningful insights. With expertise in Python, SQL, and Power BI, I specialize in exploratory data analysis, data cleaning, and building interactive KPI dashboards that drive business decisions.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <div className="d-flex align-items-center">
                <span className="me-2 text-info">📍</span>
                <span>Bengaluru, India</span>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-2 text-info">✉️</span>
                <a href="mailto:shanunandanwar12@gmail.com" className="text-decoration-none">shanunandanwar12@gmail.com</a>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-2 text-info">📞</span>
                <a href="tel:+91-8269340285" className="text-decoration-none">+91-8269340285</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
