export const jobsCreateByPromise = (email, accessToken) => {
    return fetch(`https://carrer-code-server-ten.vercel.app//jobs?email=${email}`, {
        headers: {
            authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
    })
    .then(res => res.json())
}