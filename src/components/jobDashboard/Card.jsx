import React from "react";
import { jobsCard } from "../../dummydata";
import "./job.css";

const Card = () => {
  return (
    <>
      <section className="Card">
        <div className="container grid2">
          {jobsCard.map((val) => (
            <div className="items">
              <div className="price">
                <h1>{val.Name}</h1>
                <h3>Location :{val.Location}</h3>
                <h3>Qualification :{val.Qualification}</h3>
                <h3>Batch :{val.Batch}</h3>
                <h3>Salary :{val.Salary}</h3>
              </div>
              <a href={val.link} className="primary-btn">
                Apply NOW
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Card;
