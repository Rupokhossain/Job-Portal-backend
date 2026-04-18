import React, { Suspense } from "react";
import useAuth from "../hooks/useAuth";
import JobLists from "./JobLists";
import useJobApi from "../api/useJobApi";


const MyPostedJob = () => {
  const { user } = useAuth();
  const {jobsCreateByPromise} = useJobApi();

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
