import React from "react";
import Classes from "../Sass/Signin.module.scss";

const Login = () => {
  return (
    <>
      <main className={Classes["signin-main"]}>
        <section className={Classes["signin-section"]}>
          <h1>Sign in</h1>
          <form className={Classes["Signin-form"]}>
            <div className={Classes["email-phoneNumber"]}>
              <input type="text" placeholder="Email or phone number" />
            </div>
            <div className={Classes["password-div"]}>
              <input type="text" placeholder="Password" />
            </div>
            <button>Sign in</button>
          </form>
          <section className={Classes["enquiry-section"]}>
            <aside>
              <div className={Classes["checkbox"]}>
                <input type="checkbox" />
              </div>
              <p>Remember me</p>
            </aside>
            <p>need help?</p>
          </section>
          <h2>
            New to Movix? <p>Sign up now</p>{" "}
          </h2>
        </section>
      </main>
    </>
  );
};

export default Login;