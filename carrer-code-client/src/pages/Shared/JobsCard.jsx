import React from "react";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    salaryRange,
    description,
    company,
    company_logo,
    requirements,
  } = job;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex gap-1">
        <figure>
          <img src={company_logo} className="w-16" alt="Shoes" />
        </figure>

        <div>
          <h3 className="text-4xl">{company}</h3>
          <p className="flex gap-1 items-center">
            <FiMapPin /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((skill, index) => (
            <div key={index} className="badge badge-outline">
              {skill}
            </div>
          ))}
        </div>

        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}>
            {" "}
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
