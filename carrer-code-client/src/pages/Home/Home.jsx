
import { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {

  const jobPromise = fetch("https://carrer-code-server-ten.vercel.app//jobs").then(res => res.json())


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
