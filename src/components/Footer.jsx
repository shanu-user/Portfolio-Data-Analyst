import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6">
            <h3 className="fw-bold mb-2">SACHIN NANDANWAR</h3>
            <p className="text-secondary">Data Analyst | Turning Data into Insights</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex gap-3 justify-content-md-end mb-3">
              <a href="https://www.linkedin.com/in/sachinnandanwar" target="_blank" rel="noopener noreferrer" className="text-info text-decoration-none">
                LinkedIn
              </a>
              <a href="https://github.com/shanu-user" target="_blank" rel="noopener noreferrer" className="text-info text-decoration-none">
                GitHub
              </a>
              <a href="mailto:shanunandanwar12@gmail.com" className="text-info text-decoration-none">
                Email
              </a>
            </div>
          </div>
        </div>
        <hr className="bg-secondary" />
        <div className="text-center text-secondary">
          <p>© 2026 SACHIN NANDANWAR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
