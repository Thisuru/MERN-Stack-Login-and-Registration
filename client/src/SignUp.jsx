import { Field, Form, Formik } from "formik";
import { validationSchema } from "./schemas";
import axios from 'axios';
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <Formik
        initialValues={{
          firstName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => { // Add { setSubmitting } to access Formik's setSubmitting function
          console.log("values: ", values);

          axios.post("<your_endpoint_here>", values) // Replace "<your_endpoint_here>" with your actual endpoint
            .then(result => {
              console.log(result);
              setSubmitting(false); // Set submitting to false after successful submission
            })
            .catch(err => {
              console.log(err);
              setSubmitting(false); // Set submitting to false after error
            });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              className="form-group"
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            {errors?.firstName && touched.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
            <Field
              className="form-group"
              type="email"
              name="email"
              placeholder="Email"
            />
            {errors?.email && touched.email && (
              <div className="error">{errors.email}</div>
            )}
            <Field
              className="form-group"
              type="password"
              name="password"
              placeholder="Password"
            />
            {errors?.password && touched.password && (
              <div className="error">{errors.password}</div>
            )}
            <Field
              className="form-group"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            {errors?.confirmPassword && touched.confirmPassword && (
              <div className="error">{errors.confirmPassword}</div>
            )}
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
