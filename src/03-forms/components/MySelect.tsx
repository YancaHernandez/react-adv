import { ErrorMessage, useField } from "formik"


interface Props {
    label: string;
    name: string;
    [x: string]: any;
}
export const MySelect = ({label, ...props}: Props) => {
    const [field, meta] = useField(props)
    return (
        <>
        <label htmlFor="">{label}</label>
        <select {...field} {...props} ></select>
        <ErrorMessage  name={props.name} component="span" />
        </>
    )
}
