import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            lastName: Yup.string()
                .max(10, "Must be 10 characters or less")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
        }),
    })

    return (
        <div>
            <h1>Formik Yup</h1>

            <form onSubmit={handleSubmit} noValidate >
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...getFieldProps} />
                {touched.firstName && errors.firstName && <span className="error">{errors.firstName}</span>}


                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...getFieldProps} />
                {touched.lastName && errors.lastName && <span className="error">{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input type="email" {...getFieldProps} />
                {touched.email && errors.email && <span className="error">{errors.email}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
