import React from "react";
import { Formik } from "formik";

const showForm = (props) => {
  return (
    <form>
      <input type="text" name="username" placeholder="Username" value={props.values.username} />
      <br />
      <input type="text" name="password" placeholder="Password" value={props.values.password}/>
      <br />
      <button>Submit</button>
    </form>
  );
};

const LoginPage = () => {
  return (
    <div>
      <Formik initialValues={{username: "lek", password: "1234"}}
        onSubmit={(values, {setSubmitting})=>{
          alert(JSON.stringify(values))
        }}>
        {props=>showForm(props)}
      </Formik>
    </div>
  );
};

export default LoginPage;
