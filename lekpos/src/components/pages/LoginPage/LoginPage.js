import React from "react";
import { Formik } from "formik";

const LoginPage = () => {
  return (
    <div>
      <Formik>
        <form>
          <input type="text" name="username" placeholder="Username" />
          <br />
          <input type="text" name="password" placeholder="Password" />
          <br />
          <button>Submit</button>
        </form>
      </Formik>
    </div>
  );
};

export default LoginPage;
