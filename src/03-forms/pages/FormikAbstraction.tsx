import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MySelect, MyCheckbox, MyTextInput } from "../components";

import "../styles/styles.css";
export const FormikAbstraction = () => {

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
                            <MyTextInput
                                label="First Name"
                                name="firstName"
                                placeholder="Yan Hernandez"
                            />

                            <MyTextInput
                                label="Last Name"
                                name="lastName"
                                placeholder="Hernandez"
                            />

                            <MyTextInput
                                label="Email Address"
                                name="email"
                                placeholder="yanhernandez.1997@gmail.com"
                                type="email"
                            />


                            <MySelect label="Job Type" name="jobType"  >
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Sunior</option>
                            </MySelect>

                            <MyCheckbox 
                                label="Terminos y condiciones" 
                                name="terms" 
                            />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}
