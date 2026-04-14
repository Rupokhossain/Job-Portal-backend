/**
 *  simple but not the best way
 * 1. from client side sent information.
 * 2. generate token jwt.sign()
 * 3. on the client side set token to the
 */

/**
 *  useing http only cookies
 * 
 * 1. from client side send the information (email, better: firebase er auth token) to generate token
 * 2. on the server side, accept user information and if needed validate it
 * 3. generate token in the server side using secret and expiresIn

    -------------

    set the cookies


    4. while calling the api tell to use withCredentials
         
        axios.post("http://localhost:5000/jwt", userData, {
          withCredentials: true
        })

        or fetch add option credentials: "include"

    5.  in the cors setting set credentials and origin

        app.use(cors({
        origin: "http://localhost:5173",
        credentials: true
        }));   


     6. after gererating the token set it to the cookies with some options

       res.cookie("token", token, {
        httpOnly: true,
        secure: false
      })


      ---------------
      7. one time: use cookiesParser as middleware 
      8.for every api you want to verify token: in the client side: in the client side: if using axios withCredentials: true
         for fetch use credentials: "include"

       --------------

       verify token

       9. check token exists. if not, return 401 --> unauthorized
       10. jwt.verify function





*/
