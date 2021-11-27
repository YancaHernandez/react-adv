import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    terms: false,
                    jobType: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, "Must be 15 characters or less")
                        .required("Required"),
                    lastName: Yup.string()
                        .max(10, "Must be 10 characters or less")
                        .required("Required"),
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe aceptar las condiciones'),
                    jobType: Yup.string()
                    .notOneOf(['it-jr'], 'Esta opcion no es permitida.')
                        .required("Required")

                })}
            >
                {
                    formik => (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage component="span" name="firstName" />

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage component="span" name="lastName" />

                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" />
                            <ErrorMessage component="span" name="email" />

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as="select" >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Sunior</option>

                            </Field>
                            <ErrorMessage component="span" name="jobType" />

                            <label>
                                <Field name="terms" type="checkbox" />
                                Terminos y condiciones
                            </label>
                            <ErrorMessage component="span" name="terms" />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}
