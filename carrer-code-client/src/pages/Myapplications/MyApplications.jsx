import React, { Suspense } from "react";
import ApplicationStats from "./ApplicationStats";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";


const MyApplications = () => {

    const {user} = useAuth();
    
    console.log("token in the context", user?.accessToken)

    // console.log("token firebase token", user.accessToken)

  return (
    <div>
      <ApplicationStats></ApplicationStats>
      <Suspense fallback={"loading your applications"}>
        <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email, user.accessToken)}></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
