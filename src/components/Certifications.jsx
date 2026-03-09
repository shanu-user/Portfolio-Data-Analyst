import React from "react";

const certificationsData = [
  {
    name: "Python for Data Science",
    org: "360DigiTMG",
    credential: "Python Certificate",
    link: "https://drive.google.com/file/d/1-a_desn1tw53rmOHN4S99Iomu2-IraPe/view?usp=drive_link"
  },
  {
    name: "MySQL for Data Science",
    org: "360DigiTMG",
    credential: "SQL Certificate",
    link: "https://drive.google.com/file/d/1T3TOImhCKriLTC6DJplGdtlWH84WOz22/view?usp=drive_link"
  },
  {
    name: "PowerBI for Data Analytics",
    org: "360DigiTMG",
    credential: "Power BI Certificate",
    link: "https://drive.google.com/file/d/1TCkwS_KAD9V0buqQJyWHx4hLjuFdRKHk/view?usp=drive_link"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-5 bg-white">
      <div className="container">
        <h2 className="display-5 fw-bold mb-5 text-center">Certifications</h2>
        <div className="row g-4">
          {certificationsData.map((cert, idx) => (
            <div key={idx} className="col-md-4">
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="card h-100 shadow-sm border-0 hover-shadow" style={{ cursor: 'pointer', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div className="card-body text-center">
                    <div className="fs-1 mb-3">🏅</div>
                    <h5 className="card-title fw-bold text-info">{cert.name} 🔗</h5>
                    <p className="card-text text-secondary">{cert.org}</p>
                    <span className="badge bg-light text-dark border">{cert.credential}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
