export const myApplicationsPromise = (email, accessToken) => {
  return fetch(`https://carrer-code-server-ten.vercel.app//applications?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  }).then((res) => res.json());
};
