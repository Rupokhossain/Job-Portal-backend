import { use } from "react"
import JobsCard from "../Shared/JobsCard"


const HotJobs = ({jobPromise}) => {

  const jobs = use(jobPromise);
  return (
    <div>
      <h2 className="text-4xl">Hot Jobs The Day</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {
          jobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
        }
      </div>
    </div>
  )
}

export default HotJobs