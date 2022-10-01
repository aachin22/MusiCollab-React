import { useRef } from "react";

const AccountCreate = () => {
  const AccountForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('submitted')
      // Call be
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