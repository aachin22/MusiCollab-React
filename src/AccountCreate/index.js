import { useRef } from "react";
import axios from "axios";

const AccountCreate = () => {
  const AccountForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const createUser = () => {
      axios({
        method: "POST",
        url:"http://localhost:5000/create_user",
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
          // 'Content-Type': 'application/x-www-form-urlencoded'
        },
      })
      .then((response) => {
        const res =response.data
        console.log("success")
      }).catch((error) => {
        if (error.response) {
          console.log("error")
          console.log(error)
          console.log(error.response)
          console.log(error.response.status)
          }
      })}

      const handleSubmit = (e) => {
      e.preventDefault();
      console.log('submitted');
      createUser();
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="name" ref={nameRef}/>
        </label>
        <label>
          Email: <input type="text" name="email" ref={emailRef}/>
        </label>
        <label>
          Password: <input type="text" name="password" ref={passwordRef}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
  return (
    <div>
      <h1>Create an account</h1>
      <AccountForm />
    </div>
  );
}

export default AccountCreate;