export const jobsCreateByPromise = (email, accessToken) => {
    return fetch(`http://localhost:5000/jobs?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
    })
    .then(res => res.json())
}