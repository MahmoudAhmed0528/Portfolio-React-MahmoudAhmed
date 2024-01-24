import React from "react";

const ResumeSection = ({ title, items, backgroundColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor || "#eee",
  };

  return (
    <div className="col-md-6">
      <div className="card mb-4" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <ul className="list-unstyled">
            {items.map((item, index) => (
              <li key={index} className="d-flex align-items-center">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
