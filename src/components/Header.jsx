import React from "react";

export default function Header() {
  return (
    <header className="sticky-top bg-light border-bottom">
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#home">SN</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-4">
              {["About", "Skills", "Projects", "Education", "Certifications"].map(item => (
                <li key={item} className="nav-item">
                  <a className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <a href="mailto:shanunandanwar12@gmail.com" className="btn btn-dark btn-sm ms-3">
            Get In Touch
          </a>
        </div>
      </nav>
    </header>
  );
}
