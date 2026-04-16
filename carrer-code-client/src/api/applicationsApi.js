export const myApplicationsPromise = (email, accessToken) => {
  return fetch(`http://localhost:5000/applications?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  }).then((res) => res.json());
};
