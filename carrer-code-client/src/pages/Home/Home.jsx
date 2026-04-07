
import { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {

  const jobPromise = fetch("http://localhost:5000/jobs").then(res => res.json())


  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={"Loading hot jobs"}>
      <HotJobs jobPromise={jobPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;
