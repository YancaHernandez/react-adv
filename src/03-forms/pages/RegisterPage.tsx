
import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";
export const RegisterPage = () => {

    const { formData, name, email, password, password2, onChange, reset, isValidEmail } = useForm({
        name: "",
        email: "",
        password: "",
        password2: "",
    })


    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <=0 && <span>Este campo es requerido</span>}
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Email no es valido</span>}
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    className={`${password.trim().length <= 0 && 'has-error'}`}
                    />
                    {password.trim().length <=0 && <span>Este campo es requerido</span>}
                    {password.trim().length > 0 && password.length < 6 && <span>La contraseña debe tener al menos 6 caracteres</span>}
                <input
                    type="password"
                    placeholder="Repeat Password"
                    name="password2"
                    value={password2}
                    onChange={onChange}
                    className={`${password2.trim().length <= 0 && 'has-error'}`}
                    />
                    {password2.trim().length <=0 && <span>Este campo es requerido</span>}
                    {password2.trim().length > 0 && password2 !== password && <span>Las contraseñas no coinciden</span>}

                <button type="submit" >Create</button>
                <button type="button" onClick={reset} >Reset</button>
            </form>
        </div>
    )
}
