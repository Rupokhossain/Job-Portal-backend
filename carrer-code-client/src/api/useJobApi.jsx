import React from 'react'
import useAxiosSecure from '../hooks/useAxiosSecure'

const useJobApi = () => {

    const axiosSecure = useAxiosSecure();

    const jobsCreatedByPromise = email => {
        return axiosSecure.get(`/jobs?email=${email}`)
        .then(res => res.data)
    }

  return {
    jobsCreatedByPromise
  }
}

export default useJobApi