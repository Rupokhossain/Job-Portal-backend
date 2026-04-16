import React, { Suspense } from "react";
import useAuth from "../hooks/useAuth";
import JobLists from "./JobLists";
import { jobsCreateByPromise } from "../api/JobsApi";




const MyPostedJob = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>My Posted Jobs: </h2>

      <Suspense>
        <JobLists jobsCreateByPromise={jobsCreateByPromise(user.email, user.accessToken)}>

        </JobLists>
      </Suspense>
    </div>
  );
};

export default MyPostedJob;
