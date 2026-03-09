import React from "react";

const skillsData = [
  {
    title: "Programming",
    icon: "💻",
    items: [
      { name: "Python", details: "Pandas, NumPy, Matplotlib, Seaborn" },
      { name: "Git", details: "Version Control" },
      { name: "Jupyter Notebook", details: "Interactive Computing" },
    ],
  },
  {
    title: "Databases & SQL",
    icon: "🗄️",
    items: [
      { name: "MySQL", details: "Joins, Aggregations, Subqueries, CTEs" },
      { name: "SQL", details: "Query Optimization" },
    ],
  },
  {
    title: "BI & Visualization",
    icon: "📊",
    items: [
      { name: "Power BI", details: "DAX, KPI Dashboards" },
      { name: "Excel", details: "Advanced Functions" },
    ],
  },
  {
    title: "Data Analysis",
    icon: "📈",
    items: [
      { name: "EDA", details: "Exploratory Data Analysis" },
      { name: "Data Cleaning", details: "Data Preprocessing" },
      { name: "Statistical Analysis", details: "Hypothesis Testing" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="display-5 fw-bold mb-5 text-center">Technical Skills</h2>
        <div className="row g-4">
          {skillsData.map((category, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="fs-1 mb-3">{category.icon}</div>
                  <h5 className="card-title fw-bold">{category.title}</h5>
                  <div className="mt-3">
                    {category.items.map((item, i) => (
                      <div key={i} className="mb-3">
                        <h6 className="fw-semibold">{item.name}</h6>
                        <small className="text-secondary">{item.details}</small>
                      </div>
                    ))}
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
