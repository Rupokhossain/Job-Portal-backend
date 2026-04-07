import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);


  return (
    <div>
      <Banner></Banner>
      <HotJobs jobs={jobs}></HotJobs>
    </div>
  );
};

export default Home;
